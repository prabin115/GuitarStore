import React from 'react';
import Carousel from './Carousel';
import SubFooter from './SubFooter';

const Home = () => {
   
    return (
        <>
            <Carousel/>
            
            {/* <div className='text-white text-4xl font-bold p-5 mt-5 ml-9'>
                <h1>WHAT'S NEW</h1>
            </div>

            <GuitarCard/>

            <div className='text-white text-4xl font-bold p-5 mt-5 ml-9'>
                <h1>SPOTLIGHT STORIES</h1>
            </div>
            
            <Stories/> */}
            
            <SubFooter/>
        </>
    );
};

export default Home;
