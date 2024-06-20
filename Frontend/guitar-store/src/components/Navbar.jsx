import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const[profileOpen, setProfileOpen] = useState(false);

    const { searchProduct, clearCart } = useContext(ProductsContext);
    const { authData, logout } = useContext(AuthContext);
    
    const toggleDropdown = (e) => {
        e.preventDefault();
        setProfileOpen(!profileOpen);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit called");
        searchProduct(searchInput);
        navigate("/products");
        setSearchInput('');
    }

    const handleElectric = (e) => {
        e.preventDefault();
        navigate('/products', { state: { type: 'Electric Guitars' } });
    }

    const handleAcoustic = (e) => {
        e.preventDefault();
        navigate('/products', { state: { type: 'Acoustic Guitars' } });
    }

    const handleBass = (e) => {
        e.preventDefault();
        navigate('/products', { state: { type: 'Bass Guitars' } });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setProfileOpen(!profileOpen)
        navigate("/login");
    }

    const handleSignup = (e) => {
        e.preventDefault();
        setProfileOpen(!profileOpen)
        navigate("/signup");
    }

    const handleLogout = (e) => {
        e.preventDefault();
        setProfileOpen(!profileOpen)
        logout();
        clearCart();
        navigate("/");
    }

  return (
    <>
    <div className='navcolor bg-gray-700 p-4 flex justify-between sticky top-0 z-50'>
        <div className='flex text-white'>
            <ul className='flex space-x-2'>
                <Link to="/">
                    <li className='cursor-pointer'>Home</li>
                </Link>
            </ul>
        </div>

        <div className='flex space-x-6 mr-5'>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Search'
                value={searchInput}
                spellCheck='false'
                onChange={(e)=> setSearchInput(e.target.value)}
                className='rounded-md border border-gray-300 focus:outline-none '/>
            </form>

            <div className='text-white'> 
                <Link to={"/cart"}>
                    <button className='flex items-center'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <h1 className='ml-2'>
                            Cart
                        </h1>
                    </button>
                </Link>
            </div>

            <div className='space-x-3 text-white font-extralight'>
                <button onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faUser} />
                </button>

                {profileOpen && (
                    <div className='origin-top-right absolute right-5 mt-2 w-24 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50'>
                        <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                            {authData ? (
                            <>  
                                <button onClick={handleLogout} className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
                                    Logout
                                </button>
                            </>
                            ) : (
                                <>
                                    <button onClick={handleLogin} className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
                                        Login
                                    </button>
                                    <button onClick={handleSignup} className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
                                        Signup
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
    <div className='flex subnav justify-center font-bold p-5 text-white space-x-10'>
        <button className='hover:underline' onClick={handleElectric}>ELECTRIC</button>
        <button className='hover:underline' onClick={handleAcoustic}>ACOUSTIC</button>
        <button className='hover:underline' onClick={handleBass}>BASS</button>
    </div>
    </>
  )
}

export default Navbar