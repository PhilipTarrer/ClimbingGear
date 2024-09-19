import React from 'react';
import ShoeCard from './shoecard';
import { shoeData } from './shoedata'; // Import the shoe data

const ShoeList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {shoeData.map((shoe) => (
        <ShoeCard key={shoe.name} shoe={shoe} />
      ))}
    </div>
  );
};

export default ShoeList;