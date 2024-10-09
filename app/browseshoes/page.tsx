import React from 'react';
import ShoeList from './shoelist'; // Adjust the path based on your folder structure
import Head from 'next/head';

const ShoesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Browse Climbing Shoes | Find the Perfect Pair for Your Climbing Adventures</title>
        <meta name="description" content="Browse our wide range of climbing shoes and find the perfect pair for bouldering, sport climbing, or trad climbing. Compare top brands and styles to suit your needs." />
      </Head>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Browse Climbing Shoes</h1>
          <ShoeList />
        </div>
      </div>
    </>
  );
};

export default ShoesPage;