'use client'
import React, { useState } from "react";
import { FaChevronDown, FaDownload } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is App Zone safe to use?",
      a: "Absolutely. Every app uploaded to our platform undergoes a multi-layer security scan to ensure it's free from malware and tracking scripts.",
    },
    {
      q: "Do I need an account to download?",
      a: "Basic apps are available for guest download, but creating a free account lets you track updates and sync your library across devices.",
    },
    {
      q: "How fast are the downloads?",
      a: "We use a decentralized CDN network, meaning you'll always download from the server closest to you at your maximum connection speed.",
    },
  ];

  return (
    <section className="bg-[#0b0d17] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* The Final CTA Box - Refined & Compact */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-blue-800 p-8 md:p-12 text-center mb-20 shadow-xl border border-white/10">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready for a better app experience?
            </h2>
            <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
              Join 50,000+ users discovering safe, high-speed apps every day. 
              No ads, no junk, just pure performance.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-white/10 transition-all active:scale-95 flex items-center gap-2 mx-auto">
              Browse the Library <FaDownload className="text-xs" />
            </button>
          </div>
        </div>

        {/* FAQ Section - Scaled for Comfort */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left text-white/90 text-sm font-semibold hover:bg-white/[0.03] transition-colors"
                >
                  {faq.q}
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${openIndex === index ? "rotate-180" : "opacity-40"}`} />
                </button>
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/40 text-xs leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;