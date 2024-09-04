'use client';

import React from "react";
import Link from "next/link";

const HomeButtons = () => {
    return (
        <div className="flex flex-wrap justify-center gap-20 p-12">
            <Link href="/climbingshoes" className="w-full sm:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-8 min-h-[400px] flex items-center justify-center">
                    <img src="/Shoe.jpg" alt="Image 1" className="w-full h-auto object-cover" />
                </div>
            </Link>

            <Link href={"/page2"} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-8 min-h-[400px] flex items-center justify-center">
                    <img src="/Quiz.jpeg" alt="Image 2" className="w-full h-auto object-cover" />
                </div>
            </Link>

            <Link href={"/page3"} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-8 min-h-[400px] flex items-center justify-center">
                    <img src="/Quiz.jpeg" alt="Image 3" className="w-full h-auto object-cover" />
                </div>
            </Link>

            <Link href={"/page4"} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-8 min-h-[400px] flex items-center justify-center">
                    <img src="/Quiz.jpeg" alt="Image 4" className="w-full h-auto object-cover" />
                </div>
            </Link>
        </div>
    );
};

export default HomeButtons;