import React from "react";
import couch from "./img/couch.png";

const HeroSection = () => {
  return (
    <div className="bg-[#35736E] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <div className="w-full md:w-auto md:mr-10  pl-20">
        <h1 className="text-white font-bold text-4xl md:text-6xl whitespace-nowrap lg:text-7xl">
          Modern Interior
          <br />
          Design Studio
        </h1>
        <div className="flex justify-start mt-6 py-10">
          <button className="px-4 py-2 mr-2 bg-yellow-500 text-black rounded-full">
            Shop Now
          </button>
          <button className="px-4 py-2 text-white bg-transparent rounded-full border border-white">
            Explore
          </button>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <img src={couch} alt="couch" className="w-full md:w-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
