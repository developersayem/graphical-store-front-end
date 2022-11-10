import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Footer from '../shared/Footer/Footer';
import ContactUs from './ContactUs/ContactUs';
import Feature from './Feature/Feature';
import Hero from './Hero/Hero';
import HomeServices from './HomeServices/HomeService';


const Home = () => {
    useTitle("Graphical")
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
            <div className='flex justify-center'>
                <ContactUs></ContactUs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;