"use client";

import { Orbits } from "./Orbits";

export default function Hero() {
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="flex flex-col col-span-1 bg-transparent items-center justify-center relative">
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
          <span> Harshwardhan</span>
        </h2>
      </div>
      <Orbits />
    </div>
  );
}
