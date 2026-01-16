import React from "react";
import { FaUsers, FaGlobe, FaShieldHeart } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

const AboutPage = () => {
  return (
    <div className="bg-[#0b0d17] text-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="py-24 px-6 text-center border-b border-white/5">
        <h1 className="text-5xl md:text-6xl font-black mb-6">
          The Future of <br />
          <span className="text-blue-500 italic">App Discovery.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-white/50 text-lg leading-relaxed">
          App Zone isn't just another download site. We are a global platform 
          dedicated to providing safe, fast, and high-quality applications 
          for users who value privacy and performance.
        </p>
      </section>

      {/* --- OUR MISSION (3-Column Layout) --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-2xl">
              <FaShieldHeart />
            </div>
            <h3 className="text-2xl font-bold">Safety First</h3>
            <p className="text-white/40 leading-relaxed">
              In an era of digital threats, we manually verify every single upload. 
              If it’s not 100% safe, it doesn’t make it onto App Zone.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-2xl">
              <FaGlobe />
            </div>
            <h3 className="text-2xl font-bold">Global Access</h3>
            <p className="text-white/40 leading-relaxed">
              We believe great software should be available to everyone, everywhere. 
              Our mirrors ensure high-speed access regardless of your location.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center text-2xl">
              <FaUsers />
            </div>
            <h3 className="text-2xl font-bold">User Focused</h3>
            <p className="text-white/40 leading-relaxed">
              No intrusive ads, no confusing redirects. Just the apps you need 
              in a clean, modern interface designed for humans.
            </p>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-white/5 border-y border-white/10 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-16 md:gap-32 text-center">
          <div>
            <h2 className="text-5xl font-black text-blue-500 mb-2">50M+</h2>
            <p className="text-white/40 uppercase tracking-widest text-sm">Downloads</p>
          </div>
          <div>
            <h2 className="text-5xl font-black text-purple-500 mb-2">120K</h2>
            <p className="text-white/40 uppercase tracking-widest text-sm">Verified Apps</p>
          </div>
          <div>
            <h2 className="text-5xl font-black text-pink-500 mb-2">200+</h2>
            <p className="text-white/40 uppercase tracking-widest text-sm">Countries</p>
          </div>
        </div>
      </section>

      {/* --- OUR STORY --- */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-3xl font-bold mb-8">Why we started App Zone</h2>
        <p className="text-white/60 text-lg leading-relaxed mb-6">
          We noticed that finding a reliable place to download apps had become a 
          nightmare of pop-up ads and broken links. We decided to build a platform 
          that puts the user experience first.
        </p>
        <p className="text-white/60 text-lg leading-relaxed">
          Today, App Zone serves millions of users monthly, providing a curated 
          experience that makes app discovery exciting again.
        </p>
        
        <div className="mt-12 inline-flex items-center gap-2 text-blue-500 font-bold text-xl">
          App Z<BiWorld />ne — The Last App Store You'll Ever Need.
        </div>
      </section>
    </div>
  );
};

export default AboutPage;