import { baseUrlForCardImage } from "./config";

export const RestaurantCard = (props) => {
  //destructuring the props object
  const {user} = props;
  // console.log(user);
  const { name, cloudinaryImageId, avgRatingString, cuisines,key} = props.data;
  return (
    <div className="card">
      <div className="img">
            <img
            alt="image-food"
            className="img-card"
            src={baseUrlForCardImage + cloudinaryImageId}
            ></img>
            <h4 className="nameRestaurant" key = "heading">{name}</h4>
            <h4 className={`rating ${avgRatingString < 4 ? 'low-rating' : ''}`} key = "rating-heading">🌟{avgRatingString} stars</h4>
            <p className="cuisine-names">{cuisines.join(", ")}</p>
            <p>{user.name}</p>
      </div>
    </div>
  );
};
