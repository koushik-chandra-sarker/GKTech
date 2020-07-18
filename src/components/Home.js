import React from 'react';
import Common from './Common';
import web1 from '../image/web1.svg'

const Home = () => {
    return (
       <Common
        name="Grow your business with"
        imgsrc={web1}
        visit="service"
        btn="Get Started"
        alt="Home image"
       />
    );
};

export default Home;
