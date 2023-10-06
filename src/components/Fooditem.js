import { useDispatch } from "react-redux";
import { baseUrlForCardImage } from "./config";
import {removeItem} from "../utils/cartSlice";

export const FootItem = (props) => {
  const {name,price,imageId,defaultPrice,isVeg,id} = props.data;
  
  const dispatch = useDispatch();
  const handleRemoveItem = ()=>{
    dispatch(removeItem(id));
  }
  return (
    
    <div className="card">
      <div className="img">
            <img
              alt="image-food"
              className="img-card"
              src={baseUrlForCardImage + imageId}
              >
              </img>
            <h4 className="nameRestaurant" key = "heading">{name}</h4>
            
            <p>{isVeg ? "🟢veg" : "🔴Non-veg"}</p>
            
            <h4>₹ {isNaN(price/100)?300 : price/100}/-</h4>
            <button className="clear-cart-btn" onClick = {()=>{handleRemoveItem()}}>remove item</button>
      </div>
      
    </div>
  );
};
