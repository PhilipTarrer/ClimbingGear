import React from 'react';
import NavbarButtons from './navbarButtons';

const Navbar = () => {
  return (
    <nav className="bg-white p-2 border-b border-black border-opacity-60">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo/logo.jpeg" alt="Logo" className="h-8 w-auto pb-1" />
          {/* Optionally, if you want to keep the text next to the logo */}
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