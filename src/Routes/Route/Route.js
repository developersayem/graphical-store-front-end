import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../layouts/Main/Main';
import Blogs from '../../pages/Blogs/Blogs';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Home from '../../pages/Home/Home';
import LogIn from '../../pages/LogIn/LogIn';
import Register from '../../pages/Register/Register';
import Services from '../../Services/Services';




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch("https://service-review-server-server.vercel.app/services")
            },
        ]
    }, {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])


const Route = () => {


    return (
        <div>

        </div>
    );
};

export default Route;