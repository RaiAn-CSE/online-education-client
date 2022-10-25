import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-items')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <h2>This is Side Nav {courses.length} </h2>
            {
                courses.map(course => <p key={course.id}>
                    <Link to={`/course/${course.id}`}>{course.name}</Link >
                </p>)
            }
        </div>
    );
};

export default SideNav;