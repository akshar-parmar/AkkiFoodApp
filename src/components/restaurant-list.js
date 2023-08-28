import { RestaurantCard } from "./restaurant-card";
import { ShimmerUI } from "./shimmer";
import restaurantList from "./config";
import { useState, useEffect } from "react";
import { getCardURL } from "./config";
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
const RestaurantList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);

  async function getRestaurantList() {
    try {
      //api call
      const response = await fetch(getCardURL);
      const json = await response.json();
      //optional chaining
      const Restaurantdata =
        json?.data?.success?.cards?.[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants;
      //console.log(Restaurantdata);
      setAllRestaurantList(Restaurantdata);
      setfilteredRestaurantList(Restaurantdata);
    } catch (error) {
      throw new Error("Not able to fetch the Data from API call");
    }
  }

  useEffect(() => {
    getRestaurantList();
    //console.log("inside hook");
  }, []);

  //console.log("render()");

  //conditional rendering
  //initially we have passed [] array to RestaurantList
  //so when length of RestaurantList is 0, then render shimmerUI
  //once the api call gets complete and we have data then ,
  //RestaurantList length will not be 0 so in that case render else part

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
        {filteredRestaurantList.length == 0 ? 
        (
          <h1>No matching restaurant</h1>
        ) 
        : 
        (
          filteredRestaurantList.map((obj) => {
            return <Link to = {"/restaurant/" +obj.info.id}> <RestaurantCard data={obj.info} key={obj.info.id} /></Link>
          })
        )
        }
      </div>
    </>
  );
};
export default RestaurantList;
