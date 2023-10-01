import React, {lazy, Suspense} from "react";
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
import ShimmerUI from "./components/Shimmer";

//we are lazy loading the instamart component.
const Instamart = lazy(()=>import('./components/Instamart'));

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
            },
            {
                path : '/instamart',
                element : <Suspense fallback = {<ShimmerUI/>}>
                              <Instamart/>
                          </Suspense>
            }
        ],
    },

]);



root.render(<RouterProvider router = {appRouter}/>);