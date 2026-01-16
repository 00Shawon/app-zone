import React from "react";
import { FaLaptopCode, FaHeartPulse, FaRocket } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const CareersPage = () => {
  const openings = [
    { title: "Senior Android Engineer", department: "Engineering", location: "Remote" },
    { title: "Trust & Safety Analyst", department: "Operations", location: "Remote" },
    { title: "UI/UX Product Designer", department: "Design", location: "London / Remote" },
    { title: "Global Growth Manager", department: "Marketing", location: "New York / Remote" },
  ];

  return (
    <div className="bg-[#0b0d17] text-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-blue-600/10 to-transparent">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Help us build the <br />
          <span className="text-blue-500 italic">World's Best Store.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl">
          App Zone is a team of creators, engineers, and dreamers working 
          together to change how 50M+ users discover software.
        </p>
      </section>

      {/* --- PERKS BENTO GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-12 text-center">Why join App Zone?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div className="md:col-span-2 bg-white/5 border border-white/10 p-10 rounded-[2.5rem] group hover:bg-white/10 transition">
            <FaGlobeAmericas className="text-4xl text-blue-500 mb-6 group-hover:rotate-12 transition" />
            <h3 className="text-2xl font-bold mb-2">Remote-First Culture</h3>
            <p className="text-white/40">Work from your favorite cafe in Paris or your home office in Tokyo. We trust you to get things done wherever you are.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-center text-center">
            <FaHeartPulse className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Health & Wellness</h3>
            <p className="text-sm text-white/40">Full medical coverage and a monthly wellness stipend.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-center text-center">
            <FaRocket className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Ownership</h3>
            <p className="text-sm text-white/40">Generous equity packages for every full-time hire.</p>
          </div>
        </div>
      </section>

      {/* --- OPEN POSITIONS --- */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Open Roles</h2>
          <span className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-sm font-bold">
            {openings.length} Positions
          </span>
        </div>

        <div className="space-y-4">
          {openings.map((job, i) => (
            <div 
              key={i} 
              className="group bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-4 hover:border-blue-500/50 transition cursor-pointer"
            >
              <div>
                <h4 className="text-xl font-bold group-hover:text-blue-400 transition">{job.title}</h4>
                <div className="flex gap-4 mt-1 text-sm text-white/40">
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <button className="bg-white text-black px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-500 hover:text-white transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-10 rounded-[3rem] text-center border border-white/10">
          <h3 className="text-2xl font-bold mb-4">Don't see a fit?</h3>
          <p className="text-white/50 mb-6">We're always looking for talented people. Send your resume to careers@appzone.com</p>
          <div className="text-blue-400 font-medium hover:underline cursor-pointer flex items-center justify-center gap-2">
            View all departments <FaLaptopCode />
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <div className="pb-20 text-center opacity-20 flex justify-center items-center gap-2 text-2xl">
        App Z<BiWorld />ne — Building for the next billion.
      </div>
    </div>
  );
};

export default CareersPage;