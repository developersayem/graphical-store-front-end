import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../layouts/Main/Main';
import Home from '../../pages/Home/Home';
import LogIn from '../../pages/LogIn/LogIn';
import Register from '../../pages/Register/Register';




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
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
        ]
    }
])


const Route = () => {


    return (
        <div>

        </div>
    );
};

export default Route;