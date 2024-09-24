'use client';

import Link from 'next/link';
import React from "react";

const NavbarButtons = () => {
    return (
        <div className="flex space-x-2">
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
    );
};

export default NavbarButtons;
