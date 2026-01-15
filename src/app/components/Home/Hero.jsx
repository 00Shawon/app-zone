
import React from "react";
import hero from "../../../../public/hero.jpg";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative w-full h-[65vh] overflow-hidden flex items-center">
      {/* Background Image with Motion */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-slow-pan"
        style={{ 
            backgroundImage: `url(${hero.src})`,
            transform: 'scale(1.1)' // Initial scale for the zoom effect
        }}
      ></div>

      {/* Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto p-10 text-left w-full">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Discover & Download Premium Apps
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/90 leading-relaxed">
            Discover verified apps, trusted developers, and secure purchases — all
            in one marketplace built for growth.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 my-10">
          {/* Gradient Button 1 (Purple/Blue mix) */}
          <button className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-lg">
            Browse All <FaArrowRightLong size={18} className="animate-pulse"/>
          </button>

          {/* Gradient Button 2 (Deep Blue/Navy mix) */}
          <button className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-blue-900 to-indigo-900 border border-white/20 shadow-lg">
            Download Now <FaRegArrowAltCircleDown size={18} className="animate-bounce"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
