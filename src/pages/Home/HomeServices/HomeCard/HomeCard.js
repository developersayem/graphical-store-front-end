import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { FaStarHalfAlt } from "react-icons/fa";

const HomeCard = ({ service }) => {
    const { price, img, name, details, ratings } = service;
    return (
        <Card className="w-90 mt-10 ">
            <CardHeader color="red" className="relative h-56">

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

                </div>
                <Typography as="div" variant="small" color="gray" className="flex gap-1 ">
                    <div className='text-amber-400'>
                        <FaStarHalfAlt />
                    </div>
                    {ratings}
                </Typography>
            </CardFooter>
        </Card>
    );
};

export default HomeCard;