import React from "react";
import { FaCheckCircle, FaSpinner, FaClock, FaLightbulb } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const RoadmapPage = () => {
  const roadmapData = [
    {
      status: "Completed",
      title: "Platform Launch",
      date: "Q4 2025",
      icon: <FaCheckCircle className="text-green-500" />,
      items: ["Global CDN setup", "Virus scanning engine v1", "Core marketplace architecture"]
    },
    {
      status: "In Progress",
      title: "Mobile Experience",
      date: "Q1 2026",
      icon: <FaSpinner className="text-blue-500 animate-spin" />,
      items: ["Native Android App Beta", "User Profile dashboards", "Push notifications for updates"]
    },
    {
      status: "Upcoming",
      title: "Smart Ecosystem",
      date: "Q2 2026",
      icon: <FaClock className="text-purple-500" />,
      items: ["AI-powered app recommendations", "Community review system", "Developer API access"]
    },
    {
      status: "Future Vision",
      title: "The App Zone OS",
      date: "2027",
      icon: <FaLightbulb className="text-yellow-500" />,
      items: ["Cloud gaming integration", "Cross-platform sync", "Decentralized app hosting"]
    }
  ];

  return (
    <div className="bg-[#0b0d17] text-white min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black mb-6">Our <span className="text-blue-500">Roadmap</span></h1>
          <p className="text-white/50 text-lg">
            We're building the fastest and safest app store on the planet. 
            Here is what we've done and where we're going.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-4 md:ml-10 pl-8 md:pl-16 space-y-16">
          {roadmapData.map((stage, i) => (
            <div key={i} className="relative">
              {/* Timeline Dot/Icon */}
              <div className="absolute -left-[52px] md:-left-[84px] bg-[#0b0d17] p-2 rounded-full border border-white/10 text-2xl z-10">
                {stage.icon}
              </div>

              {/* Content Card */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition">{stage.title}</h3>
                  <span className="bg-white/10 px-4 py-1 rounded-full text-xs font-mono text-white/60">
                    {stage.date}
                  </span>
                </div>

                <ul className="space-y-3">
                  {stage.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* Status Badge */}
                <div className="mt-6 inline-block text-[10px] uppercase tracking-widest font-bold opacity-30">
                  Status: {stage.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Suggestion CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-12 rounded-[3rem] text-center">
          <h2 className="text-3xl font-bold mb-4">Have an idea?</h2>
          <p className="text-white/50 mb-8">Most of our features come from user suggestions. Tell us what you want to see next.</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold transition">
            Submit Feature Request
          </button>
        </div>

        <div className="mt-20 text-center opacity-10 flex justify-center items-center gap-2">
          App Z<BiWorld />ne — Version 1.4.2
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;