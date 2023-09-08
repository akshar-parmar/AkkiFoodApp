import { Outlet } from "react-router-dom";
import burger from "../../images/burger-image.png";
import frenchfries from "../../images/french-fries.png";
import React from "react";
import { Link } from "react-router-dom";

export class About extends React.Component {
  constructor(props) {
    super(props);
    //state variable
    this.state = {
      show: false,
    };
    //console.log("parent-constructor");
  }
  async componentDidMount() {
    //api calls
    //console.log("parent-componentdidmount");
  }
  componentWillUnmount(){
    
  }
  render() {
    //console.log("parent-render");
    return (
      <div className="parent-div">
        <div className="profile-div">
        {this.state.show == false ? (
          <Link to="profile">
            <button className = "btn-profile" onClick={() => {
              this.setState({show : true})
            }}>show profile</button>
          </Link>
        ) : (
          <Link to="">
            <Outlet />
            <button className = "btn-profile" onClick={() => {
              this.setState({show : false})
            }}>hide Profile</button>
          </Link>
        )}
        </div>
        <div className="about-container">
          <div className="about-left">
            <h1>
              Welcome to
              <br /> the world of
              <br /> <span className="span-text">
                TASTY & HEALTHY FOOD
              </span>{" "}
            </h1>
            <h3 className="quote">
              <i>
                "exercise? I thought you said extra fries"{" "}
                <img className="french-fries" src={frenchfries} />
              </i>
            </h3>
          </div>
          <div className="about-right">
            <img className="about-burger" src={burger}></img>
          </div>
        </div>


      </div>
    );
  }
}
