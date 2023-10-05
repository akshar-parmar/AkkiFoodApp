import { baseUrlForCardImage } from "./config";

export const FootItem = (props) => {
    
  const {name,price,imageId,defaultPrice,isVeg} = props.data;
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
            <br></br>
            <p>{isVeg ? "🟢veg" : "🔴Non-veg"}</p>
            <br></br>
            <p>{isNaN(price/100)?300 : price/100}/-</p>
      </div>
    </div>
  );
};
