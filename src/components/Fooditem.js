import { useDispatch } from "react-redux";
import { baseUrlForCardImage } from "./config";
import { removeItem } from "../utils/cartSlice";
import veg from "../../images/veg.png";
import nonveg from "../../images/non-veg.png";

export const FootItem = (props) => {
  const { name, price, imageId, defaultPrice, isVeg, id } = props.data;

  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="food-item-container">
      <div className="img-food-container">
        <img
          alt="image-food"
          className="img-food"
          src={baseUrlForCardImage + imageId}
        ></img>
      </div>
      <div className = "description-food-item">
      <p>
        {isVeg ? (
          <img className="veg-nonveg-img" src={veg}></img>
        ) : (
          <img className="veg-nonveg-img" src={nonveg}></img>
        )}
      </p>
      <h4 className="" key="heading">
        {name}
      </h4>
      <h4 className="price-food-item">₹ {isNaN(price / 100) ? 300 : price / 100}/-</h4>
      <button
        className="clear-cart-btn"
        onClick={() => {
          handleRemoveItem();
        }}
      >
        remove-
      </button>

      </div>
    </div>
  );
};
