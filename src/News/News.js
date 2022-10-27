import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news =useLoaderData();
    console.log(news);
    return (
        <div>
            
        </div>
    );
};

export default News;