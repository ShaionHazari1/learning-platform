import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [course,setCourse] =useState([]);


    useEffect(()=>{
      fetch('http://localhost:5000/course')
      .then(res=>res.json())
      .then(data =>setCourse(data))
    },[])
    return (
        <div className='mt-4'>
            <h1>All Courses :{course.length} </h1>
            <div>
                {
                    course.map(c=> <p key={c.id}>
                        <Link to={`/course/${c.id}`}>{c.name}</Link>
                    </p>)
                }
            </div>
            
        </div>
    );
};

export default LeftSideNav;