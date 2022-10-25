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
            <h2>This Is Courses {courses.length}</h2>
            <Container>
                <Row>
                    <Col lg="5">
                        <SideNav></SideNav>
                    </Col>
                    <Col lg="7">
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