import { RestaurantCard } from "./Restaurant-card";
import { ShimmerUI } from "./Shimmer";
import { useState} from "react";
import { Link } from "react-router-dom";
import {filterData} from '../utils/helper';
import useRestaurantList from "../utils/useRestaurantList";

//RestaurantList component
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  // console.log("calling useRestaurantList Hook.......!");
  const allRestaurantList = useRestaurantList(setfilteredRestaurantList);
  // console.log(allRestaurantList);

  // console.log("render");
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
