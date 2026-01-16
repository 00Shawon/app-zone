import React from "react";
import { FaShieldAlt, FaBolt, FaMagic, FaCheckCircle } from "react-icons/fa";

const Benefits = () => {
  const benefitList = [
    {
      title: "Privacy First",
      desc: "We prioritize your data. All apps are vetted to ensure they follow strict privacy guidelines.",
      icon: <FaShieldAlt className="text-blue-400 group-hover:text-white" />,
    },
    {
      title: "Lightning Downloads",
      desc: "Our global server network ensures you get the apps you want at the highest possible speeds.",
      icon: <FaBolt className="text-yellow-400 group-hover:text-white" />,
    },
    {
      title: "Smart Curation",
      desc: "Tired of junk? Our team hand-picks the best tools and games so you don't have to search.",
      icon: <FaMagic className="text-purple-400 group-hover:text-white" />,
    },
  ];

  return (
    <section className="bg-[#0b0d17] py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: The "Glow" Box (Scaled Down) */}
          <div className="relative w-full lg:w-5/12">
            {/* Subtle Glows */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-600/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
              <h4 className="text-lg font-bold text-white mb-6">Store Quality Standards</h4>
              <ul className="grid grid-cols-1 gap-4">
                {["Daily Malware Scans", "Verified Version Logs", "No Invasive Adware", "Auto-Update Support"].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/60">
                    <div className="bg-green-500/10 p-1 rounded-full">
                      <FaCheckCircle className="text-green-500 text-sm" />
                    </div>
                    <span className="text-sm font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Content (Condensed Typography) */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
              A better way to <span className="text-blue-500">discover</span> and <br className="hidden md:block" /> 
              <span className="text-purple-500">install</span> your favorite software.
            </h2>
            
            <div className="space-y-8">
              {benefitList.map((benefit, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl group-hover:bg-blue-600 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-md">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;