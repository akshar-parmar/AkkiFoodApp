import { useEffect, useState } from 'react';
import {
    RESTAURANT_TYPE_KEY,
    swiggy_menu_api_URL,
    MENU_ITEM_TYPE_KEY,
  } from "../components/config";

const useRestaurant = (id) => {
    
    //state variable's
    const [restaurant, setRestaurantMenu] = useState(null); //to store the api data inside restaurantMenu
    const [menuItems, setMenuItems] = useState([]);
   

    //fetch the data from api
    useEffect(() => {
        getRestaurantMenu(); //call this to fetch the data from api and set data in restaurantMenu state variable
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
          menuObj = uniqueMenuItems[0];
        } catch (error) {
          console.log("not able to fetch restaurant menu data");
        }
      }

      const result = {
        restaurant,
        menuItems
      }

      return result;

}

export default useRestaurant;