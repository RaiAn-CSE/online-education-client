import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import './CourseDetails.css'

const CourseDetails = () => {
    const course = useLoaderData();
    const { name, img, details, ratings, time, price } = course;
    return (
        <Container>
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
            </Card>
        </Container>
    );
};

export default CourseDetails;