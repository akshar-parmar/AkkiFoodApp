import { useSelector,useDispatch } from "react-redux";
import {FootItem} from "./Fooditem";
import {clearCart} from "../utils/cartSlice";
const Cart = ()=>{
    //performance enhancer
    //don't subscribe to whole store because, when something in store changes our component will re-render
    //so subscribe to only those part you want.
    const cartItems = useSelector(store=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    
    return (
        <>
        <h1>Cart Items - {cartItems.length}</h1>
        <button className="clear-cart-btn" onClick = {()=>handleClearCart()}>Clear Cart</button>
        <div className = "FoodItemSection">
        {
            cartItems.map((item)=>{
                return <FootItem key = {item.id} data = {item}/>
            })
        }
        </div>
        </>

    )
}
export default Cart;