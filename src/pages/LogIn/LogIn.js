import React from 'react';
import { Link } from "react-router-dom";

import {
    Card,
    Input,
    Button,
    Checkbox,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

const LogIn = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const PhotoURL = form.photoUrl.value;
        console.log(fullName, email, password, PhotoURL);

    }
    return (
        <div className='flex justify-center content-center mt-16'>
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Log In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <form onSubmit={handleLogin}>
                        <div className='mb-3'>
                            <Input type="email" name='email' label="Email" size="lg" required />
                        </div>
                        <div className='mb-3'>
                            <Input type="password" name='password' label="Password" size="lg" required />
                        </div>
                        <Button className='mt-5' variant="gradient" type='submit' fullWidth>
                            Log In
                        </Button>
                    </form>
                    {/* <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div> */}
                </CardBody>
                <CardFooter className="pt-0">
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don't have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue"
                            className="ml-1 font-bold"
                        >
                            <Link to="/register">Register</Link>
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LogIn;