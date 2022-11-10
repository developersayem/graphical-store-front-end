import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaReddit } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer ClassName="bg-white dark:bg-gray-900">
                <div ClassName="container p-6 mx-auto">
                    <div ClassName="lg:flex">
                        <div ClassName="w-full -mx-6 lg:w-2/5">
                            <div ClassName="px-6">
                                <div>
                                    <Link href="#" ClassName="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Graphical Store</Link>
                                </div>

                                <p ClassName="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, Services, and more.</p>

                                <div ClassName="flex justify-center mt-6 -mx-2">
                                    <Link href="www.github.com"
                                        ClassName="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Reddit">
                                        <FaReddit />
                                    </Link>

                                    <Link href="#"
                                        ClassName="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Facebook">
                                        <FaFacebook />
                                    </Link>

                                    <Link href="#"
                                        ClassName="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Github">
                                        <FaGithub />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div ClassName="mt-6 lg:mt-0 lg:flex-1">
                            <div ClassName="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 ClassName="text-gray-700 uppercase dark:text-white">About</h3>
                                    <Link to="/services" ClassName="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Services</Link>
                                    <Link to="/Blog" ClassName="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</Link>
                                    <Link to="/services" ClassName="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Products</Link>
                                </div>

                                <div>
                                    <h3 ClassName="text-gray-700 uppercase dark:text-white">Products</h3>
                                    <Link to="/services" ClassName="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Logo Design</Link>
                                    <Link to="/services" ClassName="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Poster Desing</Link>
                                    <Link to="/services" ClassName="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Banner Design</Link>
                                </div>

                                <div>
                                    <h3 ClassName="text-gray-700 uppercase dark:text-white">Contact</h3>
                                    <span ClassName="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+8801xxxxxxxxx</span>
                                    <span ClassName="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">graphical@email.com</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <p ClassName="text-center text-gray-500 dark:text-gray-400">© Graphical Store 2022 - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;