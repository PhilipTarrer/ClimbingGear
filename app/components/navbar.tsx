import React from 'react';
import NavbarButtons from './navbarButtons';

const Navbar = () => {
  return (
    <nav className="bg-white-800 p-2 border-b border-black border-opacity-60">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-opacity-70 text-lg font-bold">
          MySite
        </div>
        <NavbarButtons />
      </div>
    </nav>
  );
};

export default Navbar;
