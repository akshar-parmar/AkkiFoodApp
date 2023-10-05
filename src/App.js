import React, {lazy, Suspense, useState} from "react";
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
import {Provider} from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//we are lazy loading the instamart component.
const Instamart = lazy(()=>import('./components/Instamart'));

const root = ReactDOM.createRoot(document.querySelector("#root"));
const AppLayout = ()=>{

    return (
        <Provider store = {store}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Provider>
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
            },
            {
                path : '/cart',
                element : <Cart/>
            }
        ],
    },

]);



root.render(<RouterProvider router = {appRouter}/>);