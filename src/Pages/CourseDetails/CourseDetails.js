import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import './CourseDetails.css'
import ReactToPdf from 'react-to-pdf';

const CourseDetails = () => {
    const course = useLoaderData();
    const pdfRef = useRef();
    const { name, img, details, ratings, time, price } = course;
    return (
        <Container ref={pdfRef}>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div className='card-info'>
                        <p> Ratings: {ratings}</p>
                        <p>{time}</p>
                        <p>{price}</p>
                    </div>
                    <Button className='go-back-home' variant="outline-success"><Link to="/courses">Go Back Courses</Link></Button>
                </Card.Body>
                <ReactToPdf targetRef={pdfRef} scale={0.6}>
                    {({ toPdf }) => <Button variant="success" onClick={toPdf} style={{ margin: "10px auto" }}>Download PDF</Button>}
                </ReactToPdf>
            </Card>
        </Container>
    );
};

export default CourseDetails;