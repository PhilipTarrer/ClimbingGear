import React from "react";
import HomeButtons from './components/homeButtons';

export default function Home() {
  return (
    <main>
      <div className="bg-cover bg-center w-full h-80 flex items-center justify-center" style={{ backgroundImage: "url('/backgrounds/name.jpeg')" }}>
        <div className="text-white text-5xl font-bold text-center "> Where the rubber meets the rock</div>
      </div> 
      <HomeButtons />
    </main>
  )
}