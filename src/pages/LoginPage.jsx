import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ReactLogo from '../assets/react.svg';
import bgimg from '../assets/images/bg_img.jpg';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
        console.log(formData)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/accounts/login/',
                formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );

            const { access, refresh } = response.data;
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh)
            const userRes = await axios.get('http://localhost:8000/api/accounts/me/', {
                headers: {
                    Authorization: `Bearer ${access}`,
                }
            }
            )
            const { id ,role, first_name } = userRes.data
            localStorage.setItem('id',id)
            localStorage.setItem('userRole', role)
            localStorage.setItem('first_name',first_name)
            console.log('user Response = ', userRes)
            console.log('role = ', role)
            console.log('first name = ',first_name)
            toast.success('Successfully Logged in', {
                theme: 'colored'
            })
            if (role === 'instructor') {
                navigate('/instructor/home/');
            } else {
                navigate('/student/home');
            }
            // console.log('Token = ', access)
            // console.log('Form Data = ', formData)
            // console.log('response = ', response.data)

        } catch (error) {
            if (error.response && error.response.data) {
                const errors = error.response.data;
                Object.keys(errors).forEach((field) => {
                    const messages = Array.isArray(errors[field]) ? errors[field] : [errors[field]];
                    messages.forEach((message) => {
                        toast.error(`${field}: ${message}`, {
                            theme: 'colored'
                        });
                    });
                });
                console.log(errors);
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        }
    }
    return (
        <>
            <div
                className="bg-fill bg-center h-screen"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                <div className='flex flex-col items-center justify-center h-screen bg-white/80 dark:bg-gray-800/70'>
                    <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md'>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-6 mb-6 md:grid-cols-1">
                                <div className='flex flex-col items-center'>
                                    <img src={ReactLogo} className="flex" style={{ height: 50, width: 50 }} type='' alt="react logo" />
                                </div>
                                <div className='flex flex-col items-center mb-3'>
                                    <p className='text-[2rem] font-bold text-gray-800 dark:text-white'>Login to Your Account</p>
                                </div>
                                <label htmlFor="input-group-1" className="block text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="input-group-1"
                                        name="email"
                                        className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-transparent"
                                        placeholder="Enter Your Email"
                                        onChange={handleInput}
                                    />
                                </div>

                                <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-transparent"
                                        placeholder="Enter Your Password"
                                        onChange={handleInput}
                                    />
                                </div>

                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link to="/register" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                Doesn't have an account? Click here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}