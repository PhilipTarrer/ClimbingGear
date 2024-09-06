'use client';

import React from "react";
import Link from "next/link";

const HomeButtons = () => {
    return (
        <div className="flex flex-wrap justify-center gap-24 p-12">
            <Link href="/climbingshoes" className="w-full sm:w-1/3 lg:w-1/3 px">
                <div className="bg-gray-300 p-8 min-h-[400px] flex items-center justify-center group">
                    {/* Background Image */}
                    <div className="relative w-full min-h-[400px]">
                        <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-20" style={{ backgroundImage: "url('/home/Shoe.jpg')" }}></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <h2 className="text-white text-5xl font-bold text-center z-10">Shoes</h2>
                            <p className="text-white text-2xl mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                                Learn about climbing shoes
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href="/climbingshoes" className="w-full sm:w-1/3 lg:w-1/3">
                <div className="bg-gray-300 p-8 min-h-[400px] flex items-center justify-center group">
                    {/* Background Image */}
                    <div className="relative w-full min-h-[400px]">
                        <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-20" style={{ backgroundImage: "url('/home/Quiz.jpeg')" }}></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <h2 className="text-white text-5xl font-bold text-center z-10">Quiz</h2>
                            <p className="text-white text-2xl mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                                Find the perfect shoe for you
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href={"/page3"} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="bg-gray-300 p-8 min-h-[400px] flex items-center justify-center">
                    <img src="/Quiz.jpeg" alt="Image 3" className="w-full h-auto object-cover" />
                </div>
            </Link>

            <Link href={"/page4"} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="bg-gray-300 p-8 min-h-[400px] flex items-center justify-center">
                    <img src="/Quiz.jpeg" alt="Image 4" className="w-full h-auto object-cover" />
                </div>
            </Link>
        </div>
    );
};

export default HomeButtons;