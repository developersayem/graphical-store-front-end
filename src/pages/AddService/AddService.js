import React from 'react';
import { Input, Textarea, Button } from "@material-tailwind/react";
import useTitle from '../../Hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddService = () => {

    useTitle("Add Services")

    const handleAddService = (event) => {
        ///services
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.photoURL.value;
        const price = form.price.value;
        const details = form.dtetails.value;
        const data = { name, img, price, details }
        console.log(data)
        fetch("https://service-review-server-server.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged
                    > 0) {
                    notify()
                }
            });

    }
    const notify = () => toast("Seviews add successfully!");

    return (
        <div className='container mx-20'>
            <div className="container mx-auto p-4 my-3 space-y-2 text-center">
                <h2 className="text-4xl font-bold">Add Services</h2>
            </div>
            <div className='flex justify-center '>
                <div className="flex w-72 flex-col gap-4">
                    <form onSubmit={handleAddService}>
                        <div className='my-3'>
                            <Input name='name' color="blue" label="Name" />
                        </div>
                        <div className='my-3'>
                            <Input name='photoURL' color="blue" label="PhotoURL" />
                        </div>
                        <div className='my-3'>
                            <Input name='price' color="blue" label="price" />
                        </div>
                        <div className='my-3'>
                            <Textarea name='dtetails' variant="outlined" label="Details" />
                        </div>
                        <Button type='submit'>Submit <ToastContainer /></Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;