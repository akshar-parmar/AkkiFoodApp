import { useParams } from "react-router-dom";
import { baseUrlForCardImage } from "./config";
import { ShimmerMenu } from "./ShimmerMenu";
import {RestaurantMenuCard} from "./Restaurant-menu-card";
import useRestaurant from "../utils/useRestaurant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const RestaurantMenu = () => {
  const { id } = useParams(); //call use param and get the id using object destructuring
  //calling the custom hooks
  const {restaurant,menuItems} = useRestaurant(id);
  //condition initial : restaurant == null
  return restaurant == null ? (
    <ShimmerMenu />
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
            <h4 className={`summary rating ${restaurant.avgRatingString < 4 ? 'low-rating' : ''}`} key = "rating-heading"><FontAwesomeIcon icon={faStar} style={{ color: 'white' }} /> {restaurant.avgRatingString}</h4>
            <span className="line-span"></span>
            <h4 className = "summary cost-two">{restaurant.costForTwoMessage}</h4>
            <span className="line-span"></span>
            <h4 className = "summary max-time">{restaurant.sla.slaString}</h4>
            </div>
        </div>
      </div>
      
      <div className="restaurant-menu-list">
        {menuItems.map((item)=>{
          if(item?.price!= undefined){
            return <RestaurantMenuCard key = {item.id} data ={item}/>
          }else if(item?.defaultPrice!= undefined){
            return <RestaurantMenuCard key = {item.id}  data ={item}/>
          }
        })
        }

      </div>
    </div>
  );
};

export default RestaurantMenu;
