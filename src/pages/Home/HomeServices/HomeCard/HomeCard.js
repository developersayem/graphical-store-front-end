import React from 'react';
import { Link } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
} from "@material-tailwind/react";
import { FaStarHalfAlt } from "react-icons/fa";

const HomeCard = ({ service }) => {
    const { price, img, name, details, ratings } = service;
    return (
        <Card className="w-90 mt-10 ">
            <CardHeader color="blue" className="relative h-56">
                <img
                    src={img}
                    alt="img"
                    className="h-full w-full"
                />
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
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <Link to="/register">Register</Link>
                    </Button>
                </div>
                <Typography as="div" variant="small" color="gray" className="flex gap-1">
                    <div>
                        <FaStarHalfAlt />
                    </div>
                    {ratings}
                </Typography>
            </CardFooter>
        </Card>
    );
};

export default HomeCard;