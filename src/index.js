import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/header";
import Footer from "./components/footer";
import RestaurantList from "./components/restaurant-list";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const AppLayout = ()=>{
    return (
        <>
        <Header/>
        <RestaurantList/>
        <Footer/>
        </>
    );
}

root.render(<AppLayout/>);