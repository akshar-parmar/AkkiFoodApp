import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMenuURL,
  RESTAURANT_TYPE_KEY,
  swiggy_menu_api_URL,
  MENU_ITEM_TYPE_KEY,
} from "./config";
import { baseUrlForCardImage } from "./config";
import ShimmerUI from "./shimmer";

const RestaurantMenu = () => {
  const { id } = useParams(); //call use param and get the id using object destructuring
  const [restaurant, setRestaurantMenu] = useState(null); //to store the api data inside restaurantMenu
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantMenu(); //call this t  o fetch the data from api and set data in restaurantMenu state variable
  }, []);

  async function getRestaurantMenu() {
    try {
      const response = await fetch(swiggy_menu_api_URL + id);

      const json = await response.json();
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      console.log(restaurantData);
      setRestaurantMenu(restaurantData);

      // Set menu item data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];

      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
      //console.log(uniqueMenuItems);
    } catch (error) {
      console.log("not able to fetch restaurant menu data");
    }
  }

  return restaurant == null ? (
    <ShimmerUI />
  ) : (
    <div className="container-menu">
      <div className="restaurant-banner">
        <div className="img-container">
          <img
            className="img-restaurant"
            src={baseUrlForCardImage + restaurant.cloudinaryImageId}
          ></img>
        </div>
        <div className="restaurant-summary">
          <h1>{restaurant.name}</h1>
          <p className="cuisine-item">{restaurant.cuisines.join(", ")}</p>
            <div className="restaurant-rating-details">
            <h4 className={`summary rating ${restaurant.avgRatingString < 4 ? 'low-rating' : ''}`} key = "rating-heading">🌟{restaurant.avgRatingString} stars</h4>
            <span className="line-span"></span>
            <h4 className = "summary cost-two">{restaurant.costForTwoMessage}</h4>
            <span className="line-span"></span>
            <h4 className = "summary max-time">{restaurant.sla.slaString}</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
