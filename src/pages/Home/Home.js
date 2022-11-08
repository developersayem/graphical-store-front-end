import React from 'react';
import Feature from './Feature/Feature';
import Hero from './Hero/Hero';
import HomeServices from './HomeServices/HomeService';


const Home = () => {
    return (
        <div className='mx-16 mt-10'>
            <div className='flex justify-center'>
                <Hero></Hero>
            </div>
            <div className='flex justify-center'>
                <Feature></Feature>
            </div>
            <div className='flex justify-center'>
                <HomeServices></HomeServices>
            </div>
        </div>
    );
};

export default Home;