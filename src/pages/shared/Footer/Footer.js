import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaReddit } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <h1 className='text-2xl font-bold'>Graphical store</h1>
                    <p className='my-5'>Copyright © 2022 - All right reserved</p>
                </div>
                <div className="flex justify-center my-5">
                    <a className=' text-2xl'><FaReddit></FaReddit></a>
                    <a className=' text-2xl'><FaGithub></FaGithub></a>
                    <a className=' text-2xl'><FaFacebook></FaFacebook></a>
                </div>
            </footer >
        </div >
    );
};

export default Footer;