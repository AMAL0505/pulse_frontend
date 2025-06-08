import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AddNewCoursePage() {
    const [formData, setFormData] = useState({});
    const token = localStorage.getItem('accessToken');

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        const newValue = e.target.type === 'file' ? files[0] : value;
        setFormData((prevData) => ({
            ...prevData,
            [id]: newValue,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value);
            });

            const res = await axios.post(
                'http://127.0.0.1:8000/api/courses/courses/create/',
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('response = ', res.data);
            toast.success('Course Created Successfully', { theme: 'colored' });
        } catch (error) {
            const errors = error.response?.data || error.message;
            console.error('errors = ', errors);
            toast.error('Failed to create course', { theme: 'colored' });
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-start ">
                <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-md w-[500px]">
                    <p className="text-[2rem] font-bold mb-6 text-center">Add New Course</p>

                    {/* Title */}
                    <div className="flex items-center mb-4">
                        <label htmlFor="title" className="w-[140px] ">
                            Enter Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="flex-1 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            placeholder="Course title"
                            value={formData.title || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex items-center mb-4">
                        <label htmlFor="description" className="w-[140px] ">
                            Enter Description
                        </label>
                        <textarea
                            id="description"
                            className="flex-1 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            placeholder="Course description"
                            value={formData.description || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="category" className="w-[140px]">
                            Enter Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            className="flex-1 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            placeholder="e.g., programming language, frontend framework"
                            value={formData.category || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex items-center mb-4">
                        <label htmlFor="image" className="w-[140px] ">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="flex-1 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
