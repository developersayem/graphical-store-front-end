import React from 'react';
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const Navigation = () => {
    const [openNav, setOpenNav] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);



    const priveteList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {/* ------------------------my reviews --------------------------- */}
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <span>
                    <Link to="/myreviews" className="flex items-center">
                        My Reviews
                    </Link>
                </span>
            </Typography>
            {/* ---------------------- add Services --------------------------- */}

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <span>
                    <Link to="/addservice" className="flex items-center">
                        Add Services
                    </Link>
                </span>
            </Typography>
        </ul>
    );


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
                    <Link to="/home" className="flex items-center">
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
                    <Link to="/services" className="flex items-center">
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
                <span>
                    <Link to="/blogs" className="flex items-center">
                        blogs
                    </Link>
                </span>
            </Typography>
            {
                show ? { priveteList } : <></>
            }
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="div"
                    href="#"
                    variant="h5"
                    color="blue"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >

                    <Link to="/" className='!underline-offset-0'>Graphical Store</Link>
                </Typography>
                <div className="hidden lg:block">
                    {navList}
                </div>
                <div>
                    <Button ripple={true} variant="gradient" size="sm" className="hidden lg:inline-block mr-5">
                        <Link to="/login">Log IN</Link>
                    </Button>
                    <Button ripple={true} variant="gradient" size="sm" className="hidden lg:inline-block">
                        <Link to="/register">Register</Link>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
                {navList}
                {
                    show ? { priveteList } : <></>
                }
                <div>
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <Link to="/login">Log In</Link>
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <Link to="/register">Register</Link>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
};

export default Navigation;