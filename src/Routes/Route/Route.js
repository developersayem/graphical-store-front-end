import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../layouts/Main/Main';
import AddService from '../../pages/AddService/AddService';
import Blogs from '../../pages/Blogs/Blogs';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Home from '../../pages/Home/Home';
import LogIn from '../../pages/LogIn/LogIn';
import MyReviews from '../../pages/MyReviews/MyReviews';
import Register from '../../pages/Register/Register';
import Services from '../../pages/Services/Services';
import ServicesDetails from '../../pages/Services/ServicesDetails/ServicesDetails';
import PrivetRoute from './Private/PrivateRoute';




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
            },
            {
                path: "/myreviews",
                element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>,
            },
            {
                path: "/addservice",
                element: <PrivetRoute><AddService></AddService></PrivetRoute>,
            },
            {
                path: "/services/:id",
                element: <ServicesDetails></ServicesDetails>,
                loader: async ({ params }) =>
                    fetch(
                        `https://service-review-server-server.vercel.app/services/${params.id}`
                    ),
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