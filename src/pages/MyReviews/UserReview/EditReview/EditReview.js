import React, { useState } from 'react';
import { Input, Textarea, Button } from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';


const EditReview = () => {
    const [data, setData] = useState([]);
    const review = useLoaderData();


    const updateUser = (event) => {
        event.preventDefault();
        //https://service-review-server-server.vercel.app

        fetch(`https://service-review-server-server.vercel.app/review/edit/${review._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    notify()
                }
                console.log(data);
            });
    };

    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...data };
        newReview[field] = value;
        setData(newReview);
    };
    const notify = () => toast("Review edit successfully!");

    return (
        <div>
            <div className='container mx-20'>
                <div className="container mx-auto p-4 my-3 space-y-2 text-center">
                    <h2 className="text-4xl font-bold">Add Services</h2>
                </div>
                <div className='flex justify-center '>
                    <div className="flex w-72 flex-col gap-4">
                        <form onSubmit={updateUser}>

                            <div className='my-3'>
                                <Input onBlur={handleOnBlur} name='ratings' color="blue" label="Ratings" defaultValue={review.ratings} />
                            </div>
                            <div className='my-3'>
                                <Textarea onBlur={handleOnBlur} name='description' variant="outlined" defaultValue={review.description} label="Description" />
                            </div>
                            <Button type='submit'>Submit <ToastContainer /></Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditReview;