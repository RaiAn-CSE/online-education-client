import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ course }) => {
    const { img, name, details, id } = course;
    // console.log(course);
    return (
        <div className=''>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 100 ?
                                <p>{details.slice(0, 250) + '...'}<Link to={`/course-details/${id}`}>Read More</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;