import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import useTitle from '../../Hooks/useTitle';
import UserReview from './UserReview/UserReview';

const MyReviews = () => {
    useTitle("My Reviews")

    const [reviews, setReviews] = useState([])
    console.log(reviews)

    const { user } = useContext(AuthContext);

    const [change, setChange] = useState(0)

    useEffect(() => {
        fetch(`https://service-review-server-server.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [change, user])


    return (
        <div>
            <div className="container mx-auto p-4 my-3 space-y-2 text-center">
                <h2 className="text-4xl font-bold">My Reviews</h2>
            </div>
            {
                reviews?.length > 0 ? (<div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 px-16'>
                    {
                        reviews?.map(review => <UserReview key={review._id} change={change} setChange={setChange} review={review} ></UserReview>)
                    }
                </div>) : (
                    <div>
                        <h1 className=' mt-32 text-red-400 text-xl'>No Reviews</h1>
                    </div>)
            }
        </div>
    );
};

export default MyReviews;