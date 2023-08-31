import { RestaurantCard } from "./restaurant-card";
import { ShimmerUI } from "./shimmer";
import { useState, useEffect } from "react";
import { getCardURL, swiggy_api_URL } from "./config";
import { Link } from "react-router-dom";

//filter the data
function filterData(searchInput, RestaurantList) {
  const data = RestaurantList.filter((restaurantObj) => {
    return restaurantObj.info.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  return data;
}

//RestaurantList component
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);

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
    //console.log("inside hook");
  }, []);

  return allRestaurantList.length == 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="searchBox">
        <input
          className="input-area"
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button
          className="search-btn"
          type="submit"
          onClick={() => {
            const data = filterData(searchInput, allRestaurantList);
            setfilteredRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurantList.length == 0 ? (
          <h1>No matching restaurant</h1>
        ) : (
          filteredRestaurantList.map((obj) => {
            return (
              <Link
                to={"/restaurant/" + obj.info.id}
                className="cardLink"
                key={obj.info.id}
              >
                {" "}
                <RestaurantCard data={obj.info} key={obj.info.id} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
