import {RestaurantCard} from "./restaurant-card";
import restaurantList from "./config";
import { useState } from "react";

//filter the data
function filterData(searchInput){
    const data = restaurantList.filter((restaurantObj)=>{
        return restaurantObj.info.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return data;
}

//RestaurantList component
const RestaurantList = ()=>{
    const [searchInput,setSearchInput] = useState("");
    const [RestaurantList,setRestaurantList] = useState(restaurantList);
    return (
        <>
        <div className="searchBox">
            <input className="input-area"
            type="text"
             placeholder="search"
              value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}
            ></input>
            <button className ="search-btn" type="submit" onClick={()=>{
                const data = filterData(searchInput);
                setRestaurantList(data)
            }}>Search</button>
        </div>
        <div className="restaurant-list">
            {RestaurantList.map((obj,index)=>{
                return <RestaurantCard data = {obj.info} key = {obj.info.id}/>
            })}
        </div>
        </>
    );
};
export default RestaurantList;