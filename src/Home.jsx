import React from 'react'
import Common from './Common'
import main from "../src/images/main.svg"


const Home = () =>   {
    return (
        <>
            <Common  
                name='Enhance your business with' 
                imgsrc={main} 
                visit='service' 
                btnname='Get Started' 
            />
        </>
    );
};


export default Home;