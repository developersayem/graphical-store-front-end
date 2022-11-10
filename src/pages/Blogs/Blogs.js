import React from 'react';
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography
} from "@material-tailwind/react";
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {

    useTitle("Blogs")
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div>
            <Typography className="mt-10" variant="h1" color="blue-gray">
                Some Qestions and Answers!
            </Typography>
            <div className='container mx-auto px-4 py-10'>
                <Fragment>
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            What is Difference between SQL and NoSQL?
                        </AccordionHeader>
                        <AccordionBody>
                            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.

                            The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            What is JWT, and how does it work?
                        </AccordionHeader>
                        <AccordionBody>
                            What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            What is the difference between javascript and node js?
                        </AccordionHeader>
                        <AccordionBody>
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4}>
                        <AccordionHeader onClick={() => handleOpen(4)}>
                            How does Node js handle multiple reqyest at the same time?
                        </AccordionHeader>
                        <AccordionBody>
                            How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </div>
    )
};

export default Blogs;