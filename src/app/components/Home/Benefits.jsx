import React from "react";
import { FaShieldAlt, FaBolt, FaHeadset, FaCheckCircle } from "react-icons/fa";

const Benefits = () => {
  const benefitList = [
    {
      title: "Secure Transactions",
      desc: "Every purchase is protected by industry-leading encryption and secure payment gateways.",
      icon: <FaShieldAlt className="text-blue-400" />,
    },
    {
      title: "Instant Access",
      desc: "No waiting for manual approvals. Get your source code files immediately after payment.",
      icon: <FaBolt className="text-purple-400" />,
    },
    {
      title: "Developer Support",
      desc: "Direct access to original developers for troubleshooting and installation help.",
      icon: <FaHeadset className="text-indigo-400" />,
    },
  ];

  return (
    <section className="bg-[#0b0d17] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Visual Element (The "Glow" Box) */}
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Built for Professionals</h4>
              <ul className="grid md:grid-cols-2 gap-2">
                {["Regular Code Updates", "Lifetime License", "Clean Documentation", "Refund Protection"].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/80">
                    <div className="bg-green-500/20 p-1 rounded-full">
                      <FaCheckCircle className="text-green-400" />
                    </div>
                    <span className="text-lg font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              A marketplace built on <span className="text-purple-500">Trust</span> and <span className="text-blue-500">Speed</span>.
            </h2>
            
            <div className="space-y-10">
              {benefitList.map((benefit, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/50 leading-relaxed">
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