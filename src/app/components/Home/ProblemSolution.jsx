import React from "react";
import { FaBolt, FaShieldVirus, FaMobileAlt } from "react-icons/fa";

const ProblemSolution = () => {
  const features = [
    {
      title: "Instant Access",
      problem: "Traditional stores are slow and filled with redirects.",
      solution: "One-tap direct downloads at unrestricted network speeds.",
      icon: <FaBolt className="text-yellow-500" />,
      gradient: "from-yellow-500/10 to-transparent",
    },
    {
      title: "Clean Experience",
      problem: "Most sites are cluttered with invasive, risky ads.",
      solution: "Enjoy a premium, ad-free interface designed for humans.",
      icon: <FaShieldVirus className="text-green-500" />,
      gradient: "from-green-500/10 to-transparent",
    },
    {
      title: "Device Harmony",
      problem: "Apps often fail to work on specific system versions.",
      solution: "Smart version matching ensures every download is compatible.",
      icon: <FaMobileAlt className="text-blue-500" />,
      gradient: "from-blue-500/10 to-transparent",
    },
  ];

  return (
    <section className="bg-[#0b0d17] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading - Compact & Professional */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-white text-3xl font-bold mb-3">
              Better apps. <span className="text-blue-500">Zero frustration.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              We fixed the biggest pain points of downloading software, creating 
               a platform that values your time and security.
            </p>
          </div>
          <button className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 group">
            Explore the library <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden p-7 rounded-[2rem] border border-white/5 bg-gradient-to-b ${item.gradient} backdrop-blur-sm group hover:border-white/10 transition-all duration-300`}
            >
              {/* Animated Icon Container */}
              <div className="bg-white/5 w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                {item.icon}
              </div>
              
              <h3 className="text-white text-lg font-bold mb-5">{item.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-red-400/60 text-[10px] uppercase tracking-[0.2em] font-black mb-1">The Friction</p>
                  <p className="text-white/40 text-xs leading-relaxed">{item.problem}</p>
                </div>
                
                <div className="pt-4 border-t border-white/5">
                  <p className="text-blue-400/70 text-[10px] uppercase tracking-[0.2em] font-black mb-1">The App Zone Way</p>
                  <p className="text-white/70 text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;