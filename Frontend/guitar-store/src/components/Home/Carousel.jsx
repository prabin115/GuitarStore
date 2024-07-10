import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = 3; // Total number of carousel items
    const navigate = useNavigate();

    const handleNavigate = (type) => {
        navigate("/products", {state: {type}});
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
        }, 5000); // Transition every 5 seconds

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, [totalItems]);
    
  return (
    <>
        <div className='flex justify-center'>
            <div id="default-carousel" className="h-96 w-full" data-carousel="slide">
            {/* Carousel wrapper */}
                <div className="overflow-hidden md:h-96">
                    {/* Item 1 */}
                    <div onClick={()=>handleNavigate("Electric Guitars")} className={`transition duration-700 ease-in-out ${currentIndex === 0 ? '' : 'hidden'} cursor-pointer`} data-carousel-item>
                        <img src="/photos/guitarbg1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <h2 className="text-4xl font-bold">Electric Guitars</h2>
                            <p>Amplified sound with magnetic pickups, used in various genres.</p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div onClick={()=>handleNavigate("Acoustic Guitars")} className={`transition duration-700 ease-in-out ${currentIndex === 1 ? '' : 'hidden'} cursor-pointer`} data-carousel-item>
                        <img src="/photos/caac.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        <div className="absolute inset-0 flex-col flex items-center justify-center text-white">
                            <h2 className="text-4xl font-bold">Acoustic Guitars</h2>
                            <p>Unamplified, resonant sound, versatile for folk, pop, and classical music.</p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div onClick={()=>handleNavigate("Bass Guitars")} className={`transition duration-700 ease-in-out ${currentIndex === 2 ? '' : 'hidden'} cursor-pointer`} data-carousel-item>
                        <img src="/photos/bass_1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        <div className="absolute inset-0 flex-col flex items-center justify-center text-white">
                            <h2 className="text-4xl font-bold">Bass Guitars</h2>
                            <p>Provides low-end rhythm and melody in bands, essential instrument.</p>
                        </div>
                    </div>
                </div>
                
                {/* Slider controls */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={() => setCurrentIndex((currentIndex - 1 + totalItems) % totalItems)}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={() => setCurrentIndex((currentIndex + 1) % totalItems)}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    </>
  )
}

export default Carousel