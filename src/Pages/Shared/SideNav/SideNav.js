import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://online-education-server.vercel.app/course-items')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <h3>Courses :</h3>
            {
                courses.map(course => <p key={course.id}>
                    <Link to={`/course-details/${course.id}`}>{course.name}</Link >
                </p>)
            }
        </div>
    );
};

export default SideNav;