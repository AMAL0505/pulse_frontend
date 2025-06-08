import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactLogo from '../assets/react.svg';
import bgimg from '../assets/images/bg_img.jpg';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



export default function RegisterPage() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { id, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value
    }));
  }
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/accounts/register/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('Your Account Registered Successfully', {
        theme: 'colored'
      })
      console.log("Form submitted successfully", response.data);
      navigate('/')

    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;

        Object.keys(errors).forEach((field) => {
          errors[field].forEach((message) => {
            toast.error(`${field}: ${message}`, {
              theme: 'colored'
            });
          });
        });
        console.log(errors)
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };


  return (
    <>
      <div
        className="bg-fill bg-center h-screen"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className='flex flex-col items-center justify-center h-screen bg-white/80 dark:bg-gray-800/70'>
          <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md justify-content-center'>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-2 md:grid-cols-1">
                <div className='flex flex-col items-center'>
                  <img src={ReactLogo} className="flex" style={{ height: 50, width: 50 }} type='' alt="react logo" />
                </div>
                <div className='flex flex-col items-center mb-2'>
                  <p className='text-[2rem] text-white font-bold'>Create Your Account</p>
                </div>
                <div className="mb-2">
                  <input type="text" id="username"
                    className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    value={formData.username || ''}
                    onChange={handleChange}
                    required />
                </div>
                <div className="grid gap-6 mb-2 md:grid-cols-2">
                  <div>
                    <input type="text" id="first_name"
                      className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="First Name"
                      value={formData.first_name || ''}
                      onChange={handleChange}
                      required />
                  </div>
                  <div>
                    <input type="text" id="last_name" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Last Name"
                      value={formData.last_name || ''}
                      onChange={handleChange}
                      required />
                  </div>
                </div>

              </div>
              <div className="mb-4">
                <input type="email" id="email" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={formData.email || 'Email'}
                  onChange={handleChange}
                  required />
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="mb-2">
                  <input type="password" id="password" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                    onChange={handleChange}
                    required />
                </div>
                <div className="mb-2">
                  <input type="password" id="password2" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    required />
                </div>
              </div>
              <div className="mb-6">
                <select
                  id="role"
                  name="role"
                  value={formData.role || ''}
                  onChange={handleChange}
                  className="outline-none w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="instructor">Instructor</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="outline-none w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>

                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
              </div>
              <div className="mb-6">
                <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Already have an account? click here</Link>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
