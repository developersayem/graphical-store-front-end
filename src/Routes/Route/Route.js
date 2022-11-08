import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../layouts/Main/Main';
import Home from '../../pages/Home/Home';




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
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Home></Home>
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