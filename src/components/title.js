import logo1 from "../../images/logo1.jpg";
import { Link } from "react-router-dom";
export const Title = ()=>{
    return (
        <div className="img-div">
        <Link to ="/"><img className="logo" src={logo1}></img></Link>
        </div> 
    )
}