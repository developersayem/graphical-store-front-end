import React from 'react';
import { FaRegSun, FaTools, FaDollarSign, FaCheck, FaRegPaperPlane, FaGlobe } from "react-icons/fa";

const Feature = () => {
    return (
        <div>
            <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Features</h2>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                        <div className='text-4xl hover:text-blue-400'>
                            <FaDollarSign />
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Affordable Price</h3>
                        <div className="space-y-1 leading-tight">
                            <p>i provide various services</p>
                            <p> in affordable price</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className='text-4xl hover:text-blue-400'>
                            < FaRegPaperPlane />
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">On Time Delivery</h3>
                        <div className="space-y-1 leading-tight">
                            <p>i delivered product in</p>
                            <p>on time</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className='text-4xl hover:text-blue-400'>
                            <FaTools />
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Customization</h3>
                        <div className="space-y-1 leading-tight">
                            <p>i give my customer</p>
                            <p>Customization option </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className='text-4xl hover:text-blue-400'>
                            <FaRegSun />
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Quality Control</h3>
                        <div className="space-y-1 leading-tight">
                            <p>i control product quality</p>
                            <p>so i can satisfy my customer</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className='text-4xl hover:text-blue-400'>
                            < FaCheck />
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Available for hire</h3>
                        <div className="space-y-1 leading-tight">
                            <p>i am always redy</p>
                            <p>to do your projects</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className='text-4xl hover:text-blue-400'>
                            < FaGlobe />
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">World Wide </h3>
                        <div className="space-y-1 leading-tight">
                            <p>i provide my service</p>
                            <p>world wide</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feature;