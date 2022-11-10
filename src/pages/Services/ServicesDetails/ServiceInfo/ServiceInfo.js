import React from 'react';
import { FaStar } from "react-icons/fa";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceInfo = ({ service }) => {
    const { price, img, name, details, ratings } = service;

    return (
        <div className='mt-6 mr-10'>
            <Card className="w-full flex">

                <div className='flex'>
                    <div className='w-1/2'>
                        <CardHeader color="blue" style={{ height: "400px" }} className="relative h-76 mt-5">
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img
                                        src={img}
                                        alt="img"
                                        className="h-full w-full"
                                    />
                                </PhotoView>
                            </PhotoProvider>
                        </CardHeader>
                    </div>
                    <div className='w-1/2'>
                        <CardBody className="text-center">
                            <Typography variant="h5" className="mb-2">
                                {name}
                            </Typography>
                            <Typography>
                                {details}
                            </Typography>
                        </CardBody>
                        <Button variant="filled" className="hover:scale-95 mb-5">Buy Now</Button>
                    </div>
                </div>
                <CardFooter divider className="flex items-center justify-between py-3">
                    <Typography variant="small">price: <span className='text-amber-400'>${price}</span></Typography>
                    <Typography variant="small" color="gray" className="flex gap-1">
                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                        Ratings: <FaStar className='mt-1 text-amber-400' />{ratings}
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ServiceInfo;