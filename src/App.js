import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/header";
import Footer from "./components/footer";
import Body from "./components/restaurant-list";
import { About } from "./components/about";
import { Service } from "./components/service";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Error } from "./components/error";
import RestaurantMenu from "./components/restaurant-menu";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const AppLayout = ()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/about",
                element : <About/>
            },
            {
                path: '/service',
                element : <Service/>
            },
            {
                path : '/',
                element : <Body/>
            },
            {
                path : '/restaurant/:id',
                element : <RestaurantMenu/>
            }
        ],
    },

]);



root.render(<RouterProvider router = {appRouter}/>);