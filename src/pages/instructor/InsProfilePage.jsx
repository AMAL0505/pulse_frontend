import React from 'react';
import Navbar from '../../components/Navbar';

const InsProfilePage = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col pl-10 pt-10 items-left'>
                <div className='flex flex-row items-center'>
                    <img class="w-20 h-20 rounded-full" src="https://imgs.search.brave.com/VEiEivBq0lhqdiUDjvRZnzAuo37CwK38qxQlH9mmp_Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3BvcnRwaG90b2dh/bGxlcnkuY29tL2Nv/bnRlbnQvaW1hZ2Vz/L2Ntc2ZpbGVzL3By/b2R1Y3QvNDI3NTkv/NDM2OTAtbGlzdC5q/cGc" alt="Rounded avatar"></img>
                    <div className='flex flex-col items-left pl-3.5'>
                        <p className='text-2xl font-semibold'>Lionel Messi </p>
                        <p className='text-sm text-zinc-700'>Professor of computer science</p>
                        <p className='text-sm text-zinc-700'>Joined in 2025</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <p className='text-lg font-semibold'>About</p>
                    <p className='text-sm font-semibold'>This is a sample description for the instructor for demo purpose</p>
                </div>
                <div className='py-4 flex flex-col'>
                    <p className='text-lg font-semibold'>Contact</p>
                    <hr className="my-2 mr-20 border-t-2 border-zinc-700" />
                    <div className="flex justify-start gap-4">
                        <p className="text-sm text-zinc-700">Email</p>
                        <p className="text-sm font-semibold">sample@gmail.com</p>
                    </div>
                    <hr className="my-2 mr-20 border-t-2 border-zinc-700" />
                    

                </div>
            </div>
        </>
    );
};

export default InsProfilePage;




{/* <div
                className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
                style={{
                    backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')",
                }}
            >
                <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                    {/* Main Col */}
//         <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
//             <div className="p-4 md:p-12 text-center lg:text-left">
//                 {/* Image for mobile view */}
//                 <div
//                     className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
//                     style={{
//                         backgroundImage: "url('https://source.unsplash.com/MP0IUfwrn0A')",
//                     }}
//                 ></div>

//                 <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
//                 <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

//                 <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
//                     <svg
//                         className="h-4 fill-current text-green-700 pr-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                     >
//                         <path d="M9 12H1v6a2 2 0 002 2h14a2 2 0 002-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 012-2h4a2 2 0 012 2v1h4a2 2 0 012 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
//                     </svg>
//                     What you do
//                 </p>

//                 <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
//                     <svg
//                         className="h-4 fill-current text-green-700 pr-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                     >
//                         <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82z" />
//                     </svg>
//                     Your Location - 25.0000° N, 71.0000° W
//                 </p>

//                 <p className="pt-8 text-sm">
//                     Totally optional short description about yourself, what you do and so on.
//                 </p>

//                 <div className="pt-12 pb-8">
//                     <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
//                         Get In Touch
//                     </button>
//                 </div>

//                 {/* Social Links */}
//                 <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
//                     {[
//                         { href: '#', label: 'Facebook', icon: 'facebook' },
//                         { href: '#', label: 'Twitter', icon: 'twitter' },
//                         { href: '#', label: 'GitHub', icon: 'github' },
//                         { href: '#', label: 'Unsplash', icon: 'unsplash' },
//                         { href: '#', label: 'Dribbble', icon: 'dribbble' },
//                         { href: '#', label: 'Instagram', icon: 'instagram' },
//                     ].map((link, index) => (
//                         <a key={index} href={link.href} aria-label={link.label}>
//                             <svg
//                                 className="h-6 fill-current text-gray-600 hover:text-green-700"
//                                 role="img"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <title>{link.label}</title>
//                                 <path d="" /> {/* You can insert the real icon paths here or use react-icons */}
//                             </svg>
//                         </a>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </div>
// </div> */}