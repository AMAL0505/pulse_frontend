import React from 'react'
import Navbar from '../../components/Navbar'

export default function AddNewLesson() {
    return (
        <>
            <Navbar />
            <div className='flex justify-center items-start '>
                <form action="" className="p-8 rounded-lg shadow-md w-[500px]">
                    <p className='text-[2rem] font-bold mb-6 text-center'>
                        Add New Lesson Page
                    </p>
                    <div className="flex items-center mb-4">
                        <label htmlFor="title" className="w-[140px] ">
                            Enter Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="flex-1 outline-none  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            placeholder="Course title"
                            // value={formData.title || ''}
                            // onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="title" className="w-[140px]">
                            Enter Title
                        </label>
                        <select
                            className="select-theme"
                            name="content"
                            id=""
                        >
                            <option value="select">Select</option>
                            <option value="pdf">pdf</option>
                            <option value="video">video</option>
                        </select>
                    </div>

                </form>
            </div>
        </>
    )
}
