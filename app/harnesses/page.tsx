import React from 'react';
import Head from 'next/head'

export default function Harnesses() {
    return (
        <>
            <Head>
                <title>Best Climbing Harnesses | Ultimate Guide to Finding the Perfect Fit</title>
                <meta name="description" content="Discover the best climbing harnesses with our expert guide. Learn about comfort, safety features, and how to choose the right harness for your climbing style." />
            </Head>
            <main className='bg-white'>
                {/* Top of screen image */}
                <div className="bg-cover bg-center w-full h-[400px] flex items-center justify-center" style={{ backgroundImage: "url('/backgrounds/repell.jpeg')" }} >
                    <div className="text-white text-5xl font-bold text-center">All about harnesses</div>
                </div>

                {/* Parts of a harness */}
                <div className="text-black text-4xl font-bold text-center py-12">The components of a rock climbing harness</div>

                {/* Harness Image - Centered */}
                <div className="flex justify-center pb-12">
                    <div className="w-full sm:w-1/2 lg:w-1/2">
                        <img src="/harnesses/anatomy.webp" alt="Harness" className="w-full h-auto object-cover" />
                    </div>
                </div>

                {/* Components of the harness */}
                <div className="flex flex-wrap justify-center gap-10 pb-20">
                    {/* Waist Belt */}
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">Waist Belt</h3>
                            <p className="text-center">The waist belt is the main support for the harness, wrapping around your waist. It is padded and adjustable to provide comfort and security during climbs.</p>
                        </div>
                    </div>

                    {/* Leg Loops */}
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">Leg Loops</h3>
                            <p className="text-center">Leg loops are designed to provide comfort and mobility while climbing. They are often padded and adjustable, allowing for a snug fit around the legs.</p>
                        </div>
                    </div>

                    {/* Gear Loops */}
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">Gear Loops</h3>
                            <p className="text-center">Gear loops are used to carry carabiners, quickdraws, and other climbing equipment. These are typically made of reinforced fabric or plastic for durability.</p>
                        </div>
                    </div>

                    {/* Belay Loop */}
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">Belay Loop</h3>
                            <p className="text-center">The belay loop is the strongest part of the harness. It is used during belaying and rappelling to securely attach the belay device or other essential gear.</p>
                        </div>
                    </div>

                    {/* Tie-in Points */}
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">Tie-in Points</h3>
                            <p className="text-center">Tie-in points are the areas of the harness where the rope is attached. These are typically reinforced to provide a secure connection during climbs.</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">Haul Loop</h3>
                            <p className="text-center">The haul loop is a small loop located on the back of the harness, typically used to carry a second rope or haul gear during multi-pitch climbs.</p>
                        </div>
                    </div>
                </div>

                {/* How to fit a harness */}
                <div className="text-black text-4xl font-bold text-center py-10 border-t border-black">How to fit a harness</div>

                <div className="flex flex-wrap justify-center gap-10 pb-20">
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">1. Waist Belt</h3>
                            <img src='/harnesses/waist.jpg' alt="waist fit" className="w-full h-auto object-cover pb-5" />
                            <p className="text-center">The waist belt should sit comfortably around your waist, above your hips. It should be snug but not too tight. You should be able to fit two fingers between the belt and your body, but it shouldn't slide down when you hang in it.</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">2. Leg Loops</h3>
                            <img src='/harnesses/leg.jpg' alt="leg loops fit" className="w-full h-auto object-cover pb-5" />
                            <p className="text-center">The leg loops should fit comfortably around your thighs. Like the waist belt, they should be snug but not too tight. Some harnesses come with adjustable leg loops for a more customized fit.</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">3. Tie-in Points</h3>
                            <img src='/harnesses/fit.jpg' alt="leg loops fit" className="w-full h-auto object-cover pb-5" />
                            <p className="text-center">Make sure the tie-in points (where the rope attaches) are properly aligned. These points should be centered, allowing for proper load distribution when you're climbing.</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">4. Double-Back Buckles</h3>
                            <img src='/harnesses/tail.jpg' alt="tail" className="w-full h-auto object-cover pb-5" />
                            <p className="text-center">Ensure all buckles (especially on the waist belt) are double-backed if your harness requires it and any extra tail length tucked away.</p>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
