import React from 'react';
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
} from "@material-tailwind/react";
import { FaStarHalfAlt } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { price, img, name, details, ratings, _id } = service;
    return (
        <Card className="w-90 mt-10 ">
            <CardHeader color="blue" className="relative h-56">
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
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {name}
                </Typography>
                <Typography variant="small">
                    {details.slice(0, 100) + "..."}
                </Typography>

            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small">${price}</Typography>
                <div className='mt-1 pt-1'>
                    <Button variant="gradient " size="sm" fullWidth className="mb-2 hover:scale-110 ">
                        <Link to={`/services/${_id}`} > view Details</Link>
                    </Button>
                </div>
                <Typography as="div" variant="small" color="gray" className="flex gap-1">
                    <div className='text-amber-400'>
                        <FaStarHalfAlt />
                    </div>
                    {ratings}
                </Typography>
            </CardFooter>
        </Card>
    );
};

export default ServiceCard;