import React from 'react';
import ShoeList from './shoelist'; // Adjust the path based on your folder structure

const ShoesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Browse Climbing Shoes</h1>
        <ShoeList />
      </div>
    </div>
  );
};

export default ShoesPage;