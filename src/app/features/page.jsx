import React from "react";
import { 
  FaShieldHalved, FaDownload, FaMobileScreenButton, 
  FaBolt, FaStar, FaCircleCheck 
} from "react-icons/fa6"; // Using Fa6 for more modern icons
import { BiWorld } from "react-icons/bi";
import Link from "next/link";

const FeaturesPage = () => {
  return (
    <div className="bg-[#0b0d17] text-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6 text-center">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full" />
        
        <h1 className="relative text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Everything You Need <br />
          <span className="text-blue-500">In One App Store.</span>
        </h1>
        <p className="relative max-w-2xl mx-auto text-white/60 text-lg md:text-xl">
          Discover millions of apps, games, and tools. Built for speed, 
          privacy, and a seamless downloading experience.
        </p>
      </section>

      {/* --- CORE FEATURES BENTO GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Fast Download */}
          <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-500 p-10 rounded-[2.5rem] flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <FaBolt className="text-5xl text-blue-100 animate-pulse" />
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold">Ultra Fast</span>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-3">Lightning Fast Downloads</h3>
              <p className="text-blue-100 text-lg">Our global servers ensure you get your apps in seconds, not minutes. No speed caps, ever.</p>
            </div>
          </div>

          {/* Card 2: Security */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center text-center justify-center hover:bg-white/10 transition">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
              <FaShieldHalved className="text-4xl text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">100% Secure</h3>
            <p className="text-white/40">Every app is scanned for viruses and malware before it reaches you.</p>
          </div>

          {/* Card 3: Multi-Device */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-between group">
            <FaMobileScreenButton className="text-4xl text-blue-400 mb-10 group-hover:scale-110 transition" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Universal Compatibility</h3>
              <p className="text-white/40">Optimized for Android, iOS, and Tablets. The right version, every time.</p>
            </div>
          </div>

          {/* Card 4: Daily Updates */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">Daily Updates & Trending</h3>
              <p className="text-white/40">We refresh our library every 24 hours. Get the latest features and bug fixes as soon as they drop.</p>
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-2xl font-bold">NEW</div>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold">HOT</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPARISON SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Why choose App Zone?</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
            <FaCircleCheck className="text-blue-500 shrink-0" />
            <span className="text-lg">No annoying popup ads during downloads.</span>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
            <FaCircleCheck className="text-blue-500 shrink-0" />
            <span className="text-lg">One-click installation for all APKs and IPA files.</span>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
            <FaCircleCheck className="text-blue-500 shrink-0" />
            <span className="text-lg">User reviews you can actually trust.</span>
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] py-16 px-10 text-center shadow-2xl shadow-blue-900/40">
          <FaDownload className="text-5xl mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Ready to explore?</h2>
          <Link href="/store"className="bg-black text-white px-10 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-all">
            Go To Store
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;