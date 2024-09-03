'use client';

import React from "react";

const NavbarButtons = () => {
  return (
    <div className="flex space-x-2">
      <button className="bg-white-500 hover:text-blue-300 text-black text-opacity-70 font-bold py-2 px-4 rounded">
        Button 1
      </button>
      <button className="bg-white-500 hover:text-blue-300 text-black text-opacity-70 font-bold py-2 px-4 rounded">
        Button 2
      </button>
      <button className="bg-white-500 hover:text-blue-300 text-black text-opacity-70 font-bold py-2 px-4 rounded">
        Button 3
      </button>
      <button className="bg-white-500 hover:text-blue-300 text-black text-opacity-70 font-bold py-2 px-4 rounded">
        Button 4
      </button>
    </div>
  );
};

export default NavbarButtons;
