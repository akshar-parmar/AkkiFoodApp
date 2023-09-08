import React from "react";
class ProfileClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userProfile : {
                name : "",
                location : "",
            }
        };
        console.log("child-constructor");
    }
    async componentDidMount(){
        //api calls
        const response = await fetch("https://api.github.com/users/akshar-parmar");
        const json = await response.json();
        console.log(json);
        this.setState({
            userProfile:json,
        })
        console.log("child-componentdidmount");
    }
    render(){
        console.log("child-render");
        return (
            <div className="profile-class-div">
                <h1 className="profileDetail" >{this.state.userProfile.name}</h1>
                <div id="profile-img">
                <img id="my-profile-img" src = {this.state.userProfile.avatar_url}></img>
                </div>
                
                <h2 className="profileDetail">{this.state.userProfile.location}</h2>
            </div>
        )
    }
}
export default ProfileClassComponent;