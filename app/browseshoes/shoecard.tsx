import React from 'react';
import { Shoe } from './shoedata'; // Import the Shoe type

interface ShoeCardProps {
  shoe: Shoe;
}

const ShoeCard: React.FC<ShoeCardProps> = ({ shoe }) => {
  const { name, image, rubber, aggression, bestUse } = shoe;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-contain rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-center mb-2">{name}</h3>
      <div className="text-sm text-gray-700">
        <p><strong>Rubber:</strong> {rubber}</p>
        <p><strong>Aggression:</strong> {aggression}</p>
        <p><strong>Best Use:</strong> {bestUse}</p>
      </div>
    </div>
  );
};

export default ShoeCard;
