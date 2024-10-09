'use client';

import Link from 'next/link';
import React, { useState } from "react";

const NavbarButtons = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="w-full flex items-center justify-between p-4 relative">

            {/* Navbar Links for Desktop */}
            <div className={`hidden sm:flex items-center space-x-2 ml-auto`}>
                <Link href="/">
                    <button className="bg-white-500 hover:text-blue-600 text-black text-opacity-70 font-bold py-2 px-4 rounded">
                        Home
                    </button>
                </Link>
                <Link href="/about">
                    <button className="bg-white-500 hover:text-blue-600 text-black text-opacity-70 font-bold py-2 px-4 rounded">
                        About
                    </button>
                </Link>
                <Link href="/browseshoes">
                    <button className="bg-white-500 hover:text-blue-600 text-black text-opacity-70 font-bold py-2 px-4 rounded">
                        Browse Shoes
                    </button>
                </Link>
            </div>

            {/* Hamburger Button for Mobile, aligned to the right */}
            <div className="sm:hidden ml-auto">
                <button onClick={toggleMenu} className="text-black focus:outline-none">
                    {/* Hamburger Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Full-Screen Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-full bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden z-50`}>
                {/* Collapse Button (Top-Left) */}
                <button onClick={toggleMenu} className="absolute top-4 left-4 text-black focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {/* Arrow pointing to the right */}
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>


                {/* Mobile Menu Links */}
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <Link href="/">
                        <button onClick={handleMenuClick} className="bg-white-500 hover:text-blue-600 text-black text-opacity-70 font-bold py-2 px-4 rounded text-lg">
                            Home
                        </button>
                    </Link>
                    <Link href="/about">
                        <button onClick={handleMenuClick} className="bg-white-500 hover:text-blue-600 text-black text-opacity-70 font-bold py-2 px-4 rounded text-lg">
                            About
                        </button>
                    </Link>
                    <Link href="/browseshoes">
                        <button onClick={handleMenuClick} className="bg-white-500 hover:text-blue-600 text-black text-opacity-70 font-bold py-2 px-4 rounded text-lg">
                            Browse Shoes
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavbarButtons;
