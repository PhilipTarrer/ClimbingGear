import React from 'react';
import NavbarButtons from './navbarButtons';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white p-2 border-b border-black border-opacity-60">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Using Next.js Image component for optimized loading */}
          <Image 
            src="/logo/logo.jpeg" 
            alt="Logo" 
            width={100} 
            height={20} 
            className="pb-1"
          />
          <span className="text-black text-lg font-bold ml-2">
            PeakSummit
          </span>
        </div>
        {/* Buttons Section */}
        <NavbarButtons />
      </div>
    </nav>
  );
};

export default Navbar;
