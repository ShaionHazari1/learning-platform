import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Courses from '../Courses/Courses';

const Course = () => {
    const AllCourse = useLoaderData();

    return (
        <div>
            <h1>This is Courses:{AllCourse.length}</h1>
            {
                AllCourse.map(course => <Courses
                    key={course._id}
                    course={course}
                >

                </Courses>)

            }

        </div>
    );
};

export default Course;