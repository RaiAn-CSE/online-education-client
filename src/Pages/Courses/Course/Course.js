import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ course }) => {
    // Destructuring 
    const { img, name, details, ratings, price, time, id } = course;
    return (
        <div className=''>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 100 ?
                                <p>{details.slice(0, 100) + '...'}<Link to={`/course-details/${id}`}>Read More</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                    <div className='card-info'>
                        <p> Ratings: {ratings}</p>
                        <p>{time}</p>
                        <p>{price}</p>
                    </div>

                    {/* Private Route  */}
                    <Button className='get-premium fw-semibold' variant="outline-success"><Link to={`/course-details/${id}`}>Get Premium</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;