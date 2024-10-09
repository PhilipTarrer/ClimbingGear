import React from "react";
import HomeButtons from './components/homeButtons';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Climbing Gear - Belay Devices, Shoes, Harnesses | PeakSummit</title>
        <meta name="description" content="Find the best belay devices, climbing shoes, and harnesses on our expert climbing gear guide. Explore top-rated equipment now." />
      </Head>
      <main>
        <div className="bg-cover bg-center w-full h-80 flex items-center justify-center" style={{ backgroundImage: "url('/backgrounds/name.avif')" }}>
          <div className="text-white text-5xl font-bold text-center custom-text-outline"> Where the rubber meets the rock</div>
        </div>
        <HomeButtons />
      </main>
    </>
  )
}