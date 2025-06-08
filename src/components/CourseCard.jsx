import React from 'react'

export default function CourseCard(props) {
    return (
        <>
            <div className="w-64 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-32 object-cover" src={props.image} alt={props.heading} />
                </a>
                <div className="p-3">
                    <a href="#">
                        <h5 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{props.heading}</h5>
                    </a>
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">{props.description}</p>
                    <a href="#" className="inline-flex items-center px-2 py-1 text-xs font-medium text-white bg-blue-700 rounded hover:bg-blue-800">
                        View
                        <svg className="rtl:rotate-180 w-3 h-3 ms-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}
