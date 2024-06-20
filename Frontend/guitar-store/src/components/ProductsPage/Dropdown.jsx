import React, { useState } from 'react'

const Dropdown = ({type, items}) => {
    const [dropdownModel, setDropdownModel] = useState(false);

    const toggleDropdownModel = () => {
        setDropdownModel(!dropdownModel);
    }


  return (
    <>
        <button 
            id="dropdownDefaultButton" 
            onClick={toggleDropdownModel}
            data-dropdown-toggle="dropdown" 
            className="text-gray-100 filter-bg font-medium text-sm px-5 py-2.5 text-center inline-flex items-center hover:underline" 
            type="button">{type}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div id="dropdown" className={`z-10 ${dropdownModel? 'block' : 'hidden'} dark:filter-bg`}>
            <ul className="py-2 ml-1 text-sm text-gray-100 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                {items.map((item, index)=>(
                   <li key={index}>
                        <div className="block px-4 py-2 hover:bg-gray-100 text-white dark:hover:bg-gray-700 cursor-pointer">
                            {item}
                        </div>
                    </li> 
                ))}
            </ul>
        </div>
    </>
  )
}

export default Dropdown