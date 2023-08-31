import burger from '../../images/burger-image.png';
import frenchfries from "../../images/french-fries.png"
export const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>Welcome to<br/> the world of<br/> <span className='span-text'>TASTY & HEALTHY FOOD</span> </h1>
        <h3 className='quote'><i>"exercise? I thought you said extra fries" <img className = "french-fries"src ={frenchfries}/></i></h3>
      </div>
      <div className="about-right">
        <img className='about-burger' src = {burger}></img>
      </div>

    </div>
  );
};
