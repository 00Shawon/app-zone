import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaUsers, FaLightbulb, FaShieldAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-[#0b0d17] min-h-screen text-white">
      {/* 1. Header / Intro */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-purple-600/20 to-transparent blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-400">
            Our Mission.
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            We started <span className="text-white font-bold inline-flex items-center gap-1">AppZ<BiWorld className="text-purple-500" />ne</span> with a simple idea: 
            Building software should be accessible, secure, and fast. We’re creating a global ecosystem where developers and entrepreneurs thrive together.
          </p>
        </div>
      </section>

      {/* 2. The Story (Split Layout) */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why we built this platform</h2>
            <p className="text-white/60 leading-relaxed">
              In 2024, our founders noticed a recurring problem: entrepreneurs had great ideas but were held back by high development costs and long timelines. Meanwhile, talented developers had incredible code sitting in private repositories.
            </p>
            <p className="text-white/60 leading-relaxed">
              We decided to bridge that gap. Today, App Zone is more than just a marketplace; it’s a launchpad for the next generation of digital products.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-[#161b2c] p-8 rounded-3xl border border-white/10">
               <div className="grid grid-cols-2 gap-4">
                  <div className="h-40 bg-white/5 rounded-2xl animate-pulse"></div>
                  <div className="h-40 bg-white/5 rounded-2xl animate-pulse mt-8"></div>
               </div>
               <p className="mt-6 text-center text-sm text-white/40 font-mono italic">// Empowering 10k+ Developers Globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">The Values We Live By</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaShieldAlt />, title: "Trust First", desc: "Every line of code is manually reviewed to ensure security and quality." },
              { icon: <FaLightbulb />, title: "Innovation", desc: "We support bleeding-edge tech, from AI integrations to Web3 dashboards." },
              { icon: <FaUsers />, title: "Community", desc: "We win when our developers win. Support and collaboration are in our DNA." }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent text-center hover:border-purple-500/50 transition-all">
                <div className="text-4xl text-purple-500 flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/50">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;