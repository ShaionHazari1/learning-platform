import React from 'react';
 
import headImageOne from '../images/headImageOne.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='sub-header container'>
            <div>
                <img src={headImageOne} alt="" />
            </div>
            <div className='sub-header-info'>
                <h1>Welcome To Our Web Quizing!!1</h1>
                <h4>Hello Friends!!!..I'am frontend developer..Just show my attend My Web Quizizng!!</h4>
            </div>
        </div>
    );
};

export default Home;