import React from 'react'
import { IMG_CDN_URL } from '../config';
export const RestaurantMenuCard = (props) => {
    const {description,name,price,imageId,defaultPrice}= props.data;
    let finalPrice = 0;
    if(props?.data?.price==undefined){
        finalPrice = defaultPrice;
    }
    else{
        finalPrice = price;
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
        </div>
    </div>
    <hr/>
    </>

  )
}
