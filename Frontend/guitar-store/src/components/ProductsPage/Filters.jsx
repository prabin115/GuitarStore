import React from 'react'
import Dropdown from './Dropdown';

const Filters = (props) => {
    const {category} = props;

  return (
    <>
        <div className='filter-bg mr-5 flex flex-col sticky top-0 pt-4'>
            <h1 className='text-3xl text-gray-200 font-bold text-left pr-16 mb-6'>{category}</h1>
            
            <Dropdown 
                type={'PRODUCT CATEGORIES'} 
                items={['Electric Guitars', 'Acoustic Guitars', 'Bass Guitars']}
            />
        
        </div>
    </>
  )
}

export default Filters