import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/header";
import Footer from "./components/footer";
import RestaurantList from "./components/restaurant-list";
import { About } from "./components/about";
import { Service } from "./components/service";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./components/error";

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

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>
    },
    {
        path : "/about",
        element : <About/>
    },
    {
        path: '/service',
        element : <Service/>
    }
]);



root.render(<RouterProvider router = {appRouter}/>);