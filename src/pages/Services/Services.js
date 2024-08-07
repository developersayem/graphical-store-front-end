import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [spiner, setSpiner] = useState(true);
    const [serviceData, setServiceDtat] = useState([]);
    useTitle("Services")


    useEffect(() => {
        fetch("https://service-review-server-server.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setServiceDtat(data)
                setSpiner(false)
            })

    }, [])


    return (
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            {
                spiner ? (
                    <div className='flex justify-center mt-52 h-screen	'>
                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
                    </div>
                ) : (<></>)
            }
            <div className='container mx-auto p-4 my-6 space-y-2 text-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-20 px-16'>
                {
                    serviceData.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;