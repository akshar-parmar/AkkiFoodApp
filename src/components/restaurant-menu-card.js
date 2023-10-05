import React from 'react'
import { IMG_CDN_URL } from './config';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
export const RestaurantMenuCard = (props) => {
    const itemObj = props.data;
    const {description,name,price,imageId,defaultPrice}= props.data;
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
  return (
    <>
    <div className='menu-card-container'>
        <div className='description-menu'>
            <h3>{name}</h3>
            <p className='description-item'>{description}</p>
            <h3>₹{finalPrice/100}/-</h3>
        </div>
        <div className='img-menu-div'>
            <img className="img-item" src={IMG_CDN_URL+imageId} alt='menu-item-image'></img>
            <button onClick = {()=>addFoodItem(itemObj)}> + Add Item</button>
        </div>
    </div>
    <hr/>
    </>

  )
}
