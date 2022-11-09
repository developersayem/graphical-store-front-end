import React, { useEffect, useState } from 'react';
import HomeCard from './HomeCard/HomeCard';
import { Button } from "@material-tailwind/react";


const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://service-review-server-server.vercel.app/homeservices")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services)

    return (
        <div>
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Services</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 mt-10 px-16'>
                {
                    services.map(service => <HomeCard key={service._id} service={service}></HomeCard>)
                }
            </div>
            <div className='mt-10'>
                <Button>See All</Button>
            </div>
        </div>
    );
};

export default HomeServices;