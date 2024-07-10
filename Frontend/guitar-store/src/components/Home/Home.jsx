import React from 'react';
import Carousel from './Carousel';
import SubFooter from './SubFooter';

const Home = () => {
   
    return (
        <>
            <div className='relative overflow-hidden h-screen'>
                <Carousel/>
            </div>
            
            <SubFooter/>
        </>
    );
};

export default Home;
