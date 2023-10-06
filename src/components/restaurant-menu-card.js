import React, { useState } from 'react'
import { IMG_CDN_URL } from './config';
import { addItem,removeItem } from '../utils/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import veg from "../../images/veg.png";
import nonveg from "../../images/non-veg.png";
export const RestaurantMenuCard = (props) => {
    const itemObj = props.data;
    const {description,name,price,imageId,defaultPrice,id,isVeg}= props.data;
    const cartItems = useSelector(store=>store.cart.items);
    const [itemPresent,setItemPresent] = useState(false);
    
    const dispatch = useDispatch();
    let finalPrice = 0;
    if(props?.data?.price==undefined){
        finalPrice = defaultPrice;
    }
    else{
        finalPrice = price;
    }
    const addFoodItem = (itemObj)=>{
        dispatch(addItem(itemObj));
    }
    
    const handleRemoveItem = ()=>{
      dispatch(removeItem(id));
    }
  return (
    <>
    <div className='menu-card-container'>
        <div className='description-menu'>
            <h3>
                <p>
                {isVeg ? 
                <img className = "veg-nonveg-img" src={veg}></img>
                : 
                <img className = "veg-nonveg-img" src={nonveg}></img>
                }
                </p>
                {name}
            </h3>
            <p className='description-item'>{description}</p>
            <h3>₹{finalPrice/100}/-</h3>
        </div>
        <div className='img-menu-div'>
            <img className="img-item" src={IMG_CDN_URL+imageId} alt='menu-item-image'></img>
            <div className = "add-remove-btn-container">
            <button className = "add-item-btn" onClick = {()=>addFoodItem(itemObj)}>add+</button>
            {
                cartItems.some((obj)=>{
                    return obj.id == id;
                }) ?
                (
                <button className="clear-cart-btn" onClick = {()=>{handleRemoveItem()}}>remove-</button>
                )
                :
                (<></>)
            }
            </div>

        </div>
    </div>
    <hr/>
    </>

  )
}
