import React from 'react';

export default function Harnesses() {
    return (
        <main className='bg-white'>
            {/* Top of screen image */}
            <div className="bg-cover bg-center w-full h-[400px] flex items-center justify-center" style={{ backgroundImage: "url('/backgrounds/repell.jpeg')" }} >
                <div className="text-white text-5xl font-bold text-center "> All about harnesses</div>
            </div>

            {/* Parts of a harness */}
            <div className="text-black text-4xl font-bold text-center py-12">The components of a rock climbing harness</div>

        </main>
    );
}