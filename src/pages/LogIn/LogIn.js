import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    Card,
    Input,
    Button,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    IconButton
} from "@material-tailwind/react";
import { AuthContext } from '../../Contexts/UserContext';
import useTitle from '../../Hooks/useTitle';
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {

    useTitle("Log In")
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false)
    const Navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { LogInUser, googleLogin } = useContext(AuthContext)




    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LogInUser(email, password)
            .then(res => {
                setError(false)
                setSuccess(true)
                form.reset();
                Navigate(from, { replace: true });
            })
            .cacth(err => {
                setError(true)
                setSuccess(false)
                notify();
            })

    }
    const notify = () => toast("You are Loged In!");


    return (
        <div className='flex justify-center content-center mt-16'>
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color={success ? "green" : error ? "red" : "blue"}
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        {success ? "Success!" : error ? "Error!" : "Log In"}
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
                        <Button className='mt-5 hover:scale-110' variant="gradient" type='submit' fullWidth>
                            Log In
                        </Button>
                        <div>
                            <p className='mt-2'>OR</p>
                        </div>
                        <Button onClick={googleLogin} className='mt-2 relative hover:scale-110' variant="gradient" type='submit' fullWidth>
                            Google
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
                            <Link to="/register">Register <ToastContainer /></Link>
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LogIn;