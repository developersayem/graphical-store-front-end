import React from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="container ">
            <div className="hero bg-bottom rounded-xl min-content bg-red-500"
                style={{ backgroundImage: `url("https://i.pinimg.com/originals/2e/a7/f5/2ea7f5d29b0fe88cc8e1c93bb50d3c40.gif")`, }}
            >
                <div className="hero-content text-center w-full p-32 flex justify-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl text-gray-600 brightness-90  font-extrabold ">Hello there</h1>
                        <p className="text-gray-300 font-bold py-6"> I am a professional graphic designer from bangladesh.
                            I Provied Graphic solution Likes Logo design, Poster, Book cover, Banner etc.</p>

                        <div className='flex justify-center text-3xl text-gray-600'>
                            <FaAngleDoubleDown></FaAngleDoubleDown>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;