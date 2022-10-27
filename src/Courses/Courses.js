import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = ({ course }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='bg-dark' variant="top" src={course.image_url
} />
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                        {course.details}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Courses;