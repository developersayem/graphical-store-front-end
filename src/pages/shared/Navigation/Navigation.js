
import "./Navigation.css"
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";

import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton, Tooltip
} from "@material-tailwind/react";
import { AuthContext } from "../../../Contexts/UserContext";

const Navigation = () => {
    const [openNav, setOpenNav] = useState(false);
    const { user, LogOut } = useContext(AuthContext)


    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);



    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {/* ------------------------Home --------------------------- */}
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <span>
                    <Link to="/home" className="flex  hover:text-blue-400 hover:scale-110 items-center">
                        Home
                    </Link>
                </span>
            </Typography>
            {/* ----------------------Services --------------------------- */}

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <span>
                    <Link to="/services" className="flex hover:text-blue-400 hover:scale-110 items-center">
                        Services
                    </Link>
                </span>
            </Typography>

            {/* ------------------------blogs --------------------------- */}

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <div>
                    <Link to="/blogs" className="flex hover:text-blue-400 hover:scale-110 items-center">
                        blogs
                    </Link>
                </div>
            </Typography>

            {user?.email ? (
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <div>
                        <Link to="/myreviews" className="flex hover:text-blue-400 hover:scale-110 items-center">
                            My Reviews
                        </Link>
                    </div>
                </Typography>
            ) : (<></>)}
            {user?.email ? (
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <div>
                        <Link to="/addservice" className="flex hover:text-blue-400 hover:scale-110 items-center">
                            Add Service
                        </Link>
                    </div>
                </Typography>
            ) : (<></>)}


        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="div"
                    href="#"
                    variant="h5"
                    color="transparent"
                    className="mr-4 cursor-pointer py-1.5 font-normal hover:scale-110"
                >
                    <div>
                        <Link to="/" className='text_fill '
                        >Graphical Store</Link>
                    </div>
                </Typography>
                <div className="hidden lg:block">
                    {navList}
                </div>
                <div>

                    {!user?.email ? (
                        <div>
                            <Button ripple={true} variant="gradient" size="sm" className="hidden hover:scale-110 lg:inline-block mr-5">
                                <Link to="/login">Log IN</Link>
                            </Button>
                            <Button ripple={true} variant="gradient" size="sm" className="hidden hover:scale-110 lg:inline-block">
                                <Link to="/register">Register</Link>
                            </Button>
                        </div>
                    ) : (<></>)}

                    {user?.email ? (
                        <div>
                            <Tooltip content={user?.displayName}>
                                <Avatar src={user?.photoURL} alt="avatar" className=" mr-5 hover:scale-125 lg:inline-block" variant="circular" />
                            </Tooltip>

                            <Button onClick={LogOut} ripple={true} variant="gradient" size="sm" className="hidden hover:scale-110 lg:inline-block">
                                <Link>Log Out</Link>
                            </Button>
                        </div>
                    ) : (<></>)}


                </div>
                <IconButton
                    variant="text"
                    className="ml-auto flex h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>

            </div>
            <MobileNav open={openNav}>
                <div className="ml-10">
                    {navList}
                </div>
                <div>
                    {user?.email ? (
                        <div>
                            <Tooltip content={user?.displayName}>
                                <Avatar src={user?.photoURL} alt="avatar" className=" mr-5 hover:scale-125" variant="circular" />
                            </Tooltip>

                            <Button onClick={LogOut} ripple={true} variant="gradient" size="sm" className="hidden hover:scale-110 lg:inline-block">
                                <Link>Log Out</Link>
                            </Button>
                        </div>
                    ) : (<></>)}
                </div>
            </MobileNav>
        </Navbar >
    );
};

export default Navigation;
