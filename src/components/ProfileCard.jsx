import React from 'react';

export default function ProfileCard() {
    return (
        <>
        <div className="h-screen flex items-center justify-center p-4">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                <div className="relative px-7 py-6 bg-black/80 backdrop-blur-xl rounded-xl leading-none flex flex-col items-center max-w-sm">

                    <div className="absolute top-4 right-4 flex items-center">
                        <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-xs ml-1.5">ONLINE</span>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="w-32 h-32 rounded-full object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                                alt="Profile"
                            />
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
                            John Doe
                        </h2>
                        <p className="text-purple-400 font-medium mt-1">Creative Technologist</p>
                        <p className="text-gray-300 mt-2 text-sm">
                            Crafting digital experiences at the intersection of design and code
                        </p>
                    </div>

                    <div className="flex justify-between w-full mt-6 px-4">
                        <div className="text-center transform transition-all duration-300 hover:scale-110">
                            <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
                                1.2k
                            </p>
                            <p className="text-gray-400 text-xs">FOLLOWERS</p>
                        </div>
                        <div className="text-center transform transition-all duration-300 hover:scale-110">
                            <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
                                86
                            </p>
                            <p className="text-gray-400 text-xs">PROJECTS</p>
                        </div>
                        <div className="text-center transform transition-all duration-300 hover:scale-110">
                            <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
                                4.8
                            </p>
                            <p className="text-gray-400 text-xs">RATING</p>
                        </div>
                    </div>

                    <button className="relative mt-8 w-full group" onClick={()=>{console.log("button clicked")}}>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative px-6 py-3 bg-black rounded-lg leading-none flex items-center justify-center">
                            <span className="text-gray-200 group-hover:text-white transition duration-200">Connect</span>
                        </div>
                    </button>

                    <div className="flex flex-wrap gap-2 mt-6 justify-center">
                        <span className="px-3 py-1 text-xs bg-purple-900/50 text-purple-300 rounded-full">React</span>
                        <span className="px-3 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-full">TypeScript</span>
                        <span className="px-3 py-1 text-xs bg-teal-900/50 text-teal-300 rounded-full">Tailwind</span>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}
