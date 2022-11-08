import React from 'react';
import Feature from './Feature/Feature';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div className='mx-16 mt-10'>
            <div className='flex justify-center'>
                <Hero></Hero>
            </div>
            <div className='flex justify-center'>
                <Feature></Feature>
            </div>
        </div>
    );
};

export default Home;