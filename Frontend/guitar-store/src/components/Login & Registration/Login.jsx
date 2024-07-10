import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {

    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {username, password} = formData;
        if(username && password){
            login(formData);
        } else {
            toast.error("Fields can not be empty");
        }
    }

  return (
    <>
    <div className="bg-gray-50 min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Log in</h1>
                    <input 
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Email" />

                    <input 
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none my-1"
                        onClick={handleSubmit}
                    >Log in</button>

                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account? 
                    <Link to="/signup" className="no-underline border-b border-blue text-blue-600" href="../login/">
                        Sign up
                    </Link>.
                </div>
            </div>
        </div>
    </>
  )
}

export default Login