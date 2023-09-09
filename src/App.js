import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { About } from "./components/About";
import { Service } from "./components/Service";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Error } from "./components/Error";
import RestaurantMenu from "./components/Restaurant-menu";
import ProfileClassComponent from "./components/ProfileClassComponent";

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
                element : <About/>,
                children : [{
                    path: "profile",
                    element : <ProfileClassComponent/>
                }]
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