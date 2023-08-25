import { baseUrlForCardImage } from "./config";

export const RestaurantCard = (props)=>{
    //destructuring the props object
    const {name, cloudinaryImageId, avgRatingString, cuisines} = props.data;
    return (
        <div className="card">
            <div className="img">
                <img alt = "image-food" className="img-card" src={baseUrlForCardImage+cloudinaryImageId}></img>
            </div>
            <h4>{name}</h4>
            <h4>{avgRatingString} stars</h4>
            <p>{cuisines.join(', ')}</p>
        </div>
    )
}