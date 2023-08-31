import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMenuURL, RESTAURANT_TYPE_KEY } from "./config";
import { baseUrlForCardImage } from "./config";
import ShimmerUI from "./shimmer";

const RestaurantMenu = () => {
  const { id } = useParams(); //call use param and get the id using object destructuring
  const [restaurantMenu, setRestaurantMenu] = useState(null); //to store the api data inside restaurantMenu
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    getRestaurantMenu(); //call this to fetch the data from api and set data in restaurantMenu state variable
  }, []);

  async function getRestaurantMenu() {
    try {
      const response = await fetch(fetchMenuURL + id);

      const json = await response.json();
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;

      setRestaurantMenu(restaurantData);

      setMenuData(
        json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards
      );
    } catch (error) {
      console.log("not able to fetch restaurant menu data");
    }
  }

  // return restaurantMenu == null ? (
  //   <ShimmerUI />
  // ) : (
  //   <div>
  //     <h1>Restaurant name is {restaurantMenu[0].card.card.info.name}</h1>
  //     <h2>Restaurant id : {id}</h2>
  //     <img
  //       src={
  //         baseUrlForCardImage +
  //         restaurantMenu[0].card.card.info.cloudinaryImageId
  //       }
  //     ></img>
  //     <h3>Restaurant area {restaurantMenu[0].card.card.info.areaName}</h3>
  //     <h3>Average Rating {restaurantMenu[0].card.card.info.avgRating} stars</h3>
  //     <h1>Menu</h1>
  //     <ul>
  //       {menuData.length == 0 ? (
  //         <h1>loading....</h1>
  //       ) : (
  //         menuData.map((item) => {
  //           return <li key={item.card.info.id}>{item.card.info.name}</li>;
  //         })
  //       )}
  //     </ul>
  //   </div>
  // );
  return <h1>testing</h1>;
};

export default RestaurantMenu;
