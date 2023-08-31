import React from 'react'
import { IMG_CDN_URL } from './config';
export const RestaurantMenuCard = (props) => {
    const {description,name,price,imageId}= props.data;
    console.log(props);
  return (
    <>
    <div className='menu-card-container'>
        <div className='description-menu'>
            <h3>{name}</h3>
            <p className='description-item'>{description}</p>
            <h3>₹{price/100}/-</h3>
        </div>
        <div className='img-menu-div'>
            <img className="img-item" src={IMG_CDN_URL+imageId} alt='menu-item-image'></img>
        </div>
    </div>
    <hr/>
    </>

  )
}
