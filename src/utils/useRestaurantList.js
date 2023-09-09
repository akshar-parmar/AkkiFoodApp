import {swiggy_api_URL } from "../components/config";
import {useEffect, useState} from 'react';
const useRestaurantList = (setfilteredRestaurantList)=>{
    //state
    const [allRestaurantList, setAllRestaurantList] = useState([]);
    
    // console.log("state done!");

    //api call function
    async function getRestaurantList() {
        try {
          //api call
          const response = await fetch(swiggy_api_URL);
          const json = await response.json();
    
          // initialize checkJsonData() function to check Swiggy Restaurant data
          async function checkJsonData(jsonData) {
            //why for loop because the restaurant data is fluctuating, card[3], card[4] kisi mein bhi aa sakta
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
              // initialize checkData for Swiggy Restaurant data
              let checkData =
                json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                  ?.restaurants;
    
              // if checkData is not undefined then return it
              if (checkData !== undefined) {
                return checkData;
              }
            }
          }
          // call the checkJsonData() function which return Swiggy Restaurant data
          const resData = await checkJsonData(json);
          setAllRestaurantList(resData);
          setfilteredRestaurantList(resData);

        } catch (error) {
          throw new Error("Not able to fetch the Data from API call");
        }
      }

      useEffect(() => {
        getRestaurantList();
        // console.log("inside hook");
      }, []);

      return allRestaurantList;
    
}

export default useRestaurantList;