import React from 'react';
import aboutImage from '../image/About.svg'
import Common from './Common';
const About = () => {
    return (
        <Common
            name="Welcome to about page"
            imgsrc={aboutImage}
            visit="contact"
            btn="Contact Now"
            alt="About image"
       />
    );
};

export default About;
