import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext';
import AddReview from './AddReview/AddReview';
import Reviews from './Reviews/Reviews';
import ServiceInfo from './ServiceInfo/ServiceInfo';

const ServicesDetails = () => {
    const service = useLoaderData();
    const [reviews, setReviews] = useState()
    const { user } = useContext(AuthContext)
    const [rdata, setRdata] = useState(false);



    useEffect(() => {
        fetch("https://service-review-server-server.vercel.app/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [rdata])

    return (
        <div className='container mx-auto p-4 my-6 space-y-2 text-center'>
            {/* top secton */}
            <div className='flex 	'>
                {/* service info section */}
                <div className=''>
                    <ServiceInfo service={service}></ServiceInfo>
                </div>
            </div>
            <div className=''>
                {
                    user?.email ? (<AddReview setRdata={setRdata}></AddReview>) : (<></>)
                }
                {
                    !user?.email ? (

                        <div className='my-60'>
                            <Link className='capitalize underline font-2xl' to="/login">Log in to add Review</Link>
                        </div>
                    ) : (<></>)
                }
            </div>
            {/* bottom section */}
            {/* review section */}
            <div>
                <div className="container mx-auto p-4 my-16 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Client Reviews</h2>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 px-16'>
                    {
                        reviews?.map(review => <Reviews review={review} ></Reviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;