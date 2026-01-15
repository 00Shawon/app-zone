import React from "react";
import { FaUsers, FaCloudDownloadAlt, FaShieldAlt, FaStar } from "react-icons/fa";
import techflow from '../../../../public/techflow.png';
import appGrid from '../../../../public/appGrid.webp';
import softly from '../../../../public/softly.jpeg';
import devCore from '../../../../public/devCore.webp';

const TrustSection = () => {
    const logos = [techflow, appGrid, softly, devCore];
  const stats = [
    { id: 1, label: "Active Users", value: "50K+", icon: <FaUsers className="text-purple-400" /> },
    { id: 2, label: "Total Downloads", value: "1.2M", icon: <FaCloudDownloadAlt className="text-blue-400" /> },
    { id: 3, label: "Verified Apps", value: "500+", icon: <FaShieldAlt className="text-indigo-400" /> },
    { id: 4, label: "Avg. Rating", value: "4.9/5", icon: <FaStar className="text-yellow-400" /> },
  ];

  return (
    <section className="bg-[#0b0d17] py-20 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <h3 className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-2">
            Trusted by Industry Leaders
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Building the Future of App Distribution
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Join thousands of developers and businesses who trust our platform for 
            high-quality, secure, and scalable application solutions.
          </p>
        </div>

        {/* Logo Cloud (Placeholders) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 mb-20">
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className="flex justify-center items-center h-16 px-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <img 
            src={logo.src} // Added .src here
            alt="Partner Logo" 
            className="max-h-8 w-auto object-contain"
          />
        </div>
      ))}
    </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-colors group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/50 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;