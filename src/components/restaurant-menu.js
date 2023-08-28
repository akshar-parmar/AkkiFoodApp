import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMenuURL } from "./config";
import { baseUrlForCardImage } from "./config";
import ShimmerUI from "./shimmer";
const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const response = await fetch(fetchMenuURL+id);
    
    const json = await response.json();
    console.log(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    setRestaurantMenu(json.data.cards);
    setMenuData(
      json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    );
  }

  return restaurantMenu == null ? (
    <ShimmerUI />
  ) : (
    <div>
      <h1>Restaurant name is {restaurantMenu[0].card.card.info.name}</h1>
      <h2>Restaurant id : {id}</h2>
      <img
        src={
          baseUrlForCardImage +
          restaurantMenu[0].card.card.info.cloudinaryImageId
        }
      ></img>
      <h3>Restaurant area {restaurantMenu[0].card.card.info.areaName}</h3>
      <h3>Average Rating {restaurantMenu[0].card.card.info.avgRating} stars</h3>
      <h1>Menu</h1>
      <ul>
        {menuData.length == 0 ? (
          <h1>loading....</h1>
        ) : (
          menuData.map((item) => {
            return <li key={item.card.info.id}>{item.card.info.name}</li>;
          })
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
