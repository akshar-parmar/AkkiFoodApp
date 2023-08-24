

export const RestaurantCard = (props)=>{
    //destructuring the props object
    const {name, cloudinaryImageId, avgRatingString, cuisines} = props.data;

    const baseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    return (
        <div className="card">
            <div className="img">
                <img alt = "image-food" className="img-card" src={baseUrl+cloudinaryImageId}></img>
            </div>
            <h4>{name}</h4>
            <h4>{avgRatingString} stars</h4>
            <p>{cuisines.join(', ')}</p>
        </div>
    )
}