import React from "react";
import { FaRocket, FaLock, FaCode } from "react-icons/fa";

const ProblemSolution = () => {
  const features = [
    {
      title: "Fast-Track Development",
      problem: "Coding from scratch takes months of work.",
      solution: "Our pre-built premium apps let you launch in days, not months.",
      icon: <FaRocket className="text-purple-500" />,
      gradient: "from-purple-500/20 to-transparent",
    },
    {
      title: "Verified Security",
      problem: "Random source code often contains vulnerabilities.",
      solution: "Every app on our platform undergoes a rigorous security audit.",
      icon: <FaLock className="text-blue-500" />,
      gradient: "from-blue-500/20 to-transparent",
    },
    {
      title: "Full Customization",
      problem: "Templates are often too rigid and hard to edit.",
      solution: "Get full source code access with clean, documented architecture.",
      icon: <FaCode className="text-indigo-500" />,
      gradient: "from-indigo-500/20 to-transparent",
    },
  ];

  return (
    <section className="bg-[#0b0d17] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-white text-4xl font-bold mb-4">
              Stop reinventing the wheel. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Start scaling your business.
              </span>
            </h2>
            <p className="text-white/60 text-lg">
              We bridge the gap between complex development and market-ready solutions.
            </p>
          </div>
          <button className="text-purple-400 font-medium hover:text-purple-300 transition-colors flex items-center gap-2">
            View all features <span>→</span>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden p-8 rounded-3xl border border-white/10 bg-gradient-to-b ${item.gradient} backdrop-blur-sm group hover:border-white/20 transition-all duration-300`}
            >
              <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-red-400/80 text-xs uppercase tracking-widest font-bold mb-1">The Problem</p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.problem}</p>
                </div>
                
                <div className="pt-4 border-t border-white/5">
                  <p className="text-green-400/80 text-xs uppercase tracking-widest font-bold mb-1">Our Solution</p>
                  <p className="text-white/80 text-sm leading-relaxed">{item.solution}</p>
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