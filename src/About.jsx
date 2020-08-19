import React from 'react'
import Common from './Common'
import about from "../src/images/about.png"


const About = () =>   {
    return (
        <>
            <Common  
                name='Boost up your sales with  ' 
                imgsrc={about} 
                visit='contact' 
                btnname='Contact Now' 
            />
        </>
    );
};


export default About;