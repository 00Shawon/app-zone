import React from "react";
import Image from "next/image";
import { FaDownload, FaShieldVirus, FaCheckCircle, FaHeart } from "react-icons/fa";

const TrustSection = ({ logos }) => {
  return (
    <section className="bg-[#0b0d17] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- COMPACT BENTO LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Messaging - Now takes 7/12 of the width */}
          <div className="md:col-span-7 bg-white/[0.03] border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <span className="text-blue-500 font-bold text-xs uppercase tracking-widest">
                Safe Discovery
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                The Secure Way to Explore Apps.
              </h2>
              <p className="text-white/50 text-sm max-w-md leading-relaxed">
                We manually verify every submission to ensure your device stays 
                malware-free. High-speed downloads, zero compromises.
              </p>
            </div>

            {/* Logo Cloud - Smaller and subtle */}
            <div className="mt-8 flex flex-wrap gap-6 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all  ">
              {logos?.map((logo, index) => (
                <Image 
                  key={index} 
                  src={logo} 
                  alt="Partner" 
                  className="h-5 w-auto object-contain" 
                />
              ))}
            </div>
          </div>

          {/* Stats Column - Now takes 5/12 of the width */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl hover:bg-white/[0.05] transition">
               <FaDownload className="text-blue-400 mb-3 text-lg" />
               <div className="text-xl font-bold text-white">No Caps</div>
               <div className="text-white/30 text-[10px] font-bold uppercase">Speed</div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl hover:bg-white/[0.05] transition">
               <FaShieldVirus className="text-green-400 mb-3 text-lg" />
               <div className="text-xl font-bold text-white">Verified</div>
               <div className="text-white/30 text-[10px] font-bold uppercase">Security</div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl hover:bg-white/[0.05] transition">
               <FaCheckCircle className="text-yellow-400 mb-3 text-lg" />
               <div className="text-xl font-bold text-white">1-Tap</div>
               <div className="text-white/30 text-[10px] font-bold uppercase">Install</div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl hover:bg-white/[0.05] transition">
               <FaHeart className="text-pink-400 mb-3 text-lg" />
               <div className="text-xl font-bold text-white">50K+</div>
               <div className="text-white/30 text-[10px] font-bold uppercase">Users</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;