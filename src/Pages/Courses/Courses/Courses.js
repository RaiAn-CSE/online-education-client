import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../../Shared/SideNav/SideNav';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div>
            <Container>
                <Row>

                    {/* Side Nav column  */}
                    <Col lg="4">
                        <div className="sticky-top courses mb-3">
                            <SideNav></SideNav>
                        </div>
                    </Col>

                    {/* Details Data Column  */}
                    <Col lg="8">
                        <div className='card-group'>
                            {
                                courses.map(course => <Course
                                    key={course.id}
                                    course={course}
                                ></Course>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;