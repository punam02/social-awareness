import React, { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle function for the mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary">
            <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                {/* Logo Section */}
                <div className="flex space-x-14 items-center">

                    <h2 className="text-2xl font-bold">
                        <span className="text-black">Social</span>{" "}
                        <span className="text-blue-500">Awareness</span>
                    </h2>



                    {/* Desktop Menu */}
                    <ul className="md:flex space-x-12 hidden">
                        <li><a href="/" className="block text-base hover:text-gray-300">Home</a></li>
                        <li><a href="/campaigns/home" className="block text-base hover:text-gray-300">Campaigns</a></li>
                        <li><a href="/business" className="block text-base hover:text-gray-300">Create Campaign</a></li>
                    </ul>
                </div>

                {/* Desktop Login and Registration */}
                <div className="space-x-12 hidden md:flex items-center text-base">
                    <a href="#login" className="hidden lg:flex items-center hover:text-gray-300">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em">
                            <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                        </svg>
                        <span className="px-1">Login</span>
                    </a>
                    <a href="#registration">
                        <button className="text-white py-2 px-5 transition-all duration-300 rounded hover:text-[#eee] bg-indigo-600">
                            Registration
                        </button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none focus:text-gray-300">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-6 h-6">
                            <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="bg-gray-800 text-white md:hidden shadow-xl space-y-4 z-50 p-3 rounded-md text-right fixed">
                    <div className="flex flex-col items-center">
                        <ul className="flex flex-col space-y-3">
                            <li><a href="/" className="text-base hover:text-gray-300">Home</a></li>
                            <li><a href="/campaigns" className="text-base hover:text-gray-300">Campaigns</a></li>
                            <li><a href="/business" className="text-base hover:text-gray-300">Business</a></li>
                        </ul>
                        <a href="#login" className="flex items-center mt-5">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em">
                                <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                            </svg>
                            <span className="px-1">Login</span>
                        </a>
                        <a href="#registration">
                            <button className="bg-indigo-600 text-white py-2 px-5 rounded-md">Registration</button>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;
