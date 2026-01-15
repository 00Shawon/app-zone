'use client'
import React, { useState } from "react";
import { FaChevronDown, FaRocket } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What do I get after purchasing?",
      a: "You receive the full source code, documentation, and a lifetime license for your project instantly via email.",
    },
    {
      q: "Are these apps customizable?",
      a: "Yes! All our apps are built with clean, modular code, making it easy to change branding, features, and logic.",
    },
    {
      q: "Do you offer technical support?",
      a: "Absolutely. Each purchase includes 6 months of dedicated support from the original developers.",
    },
  ];

  return (
    <section className="bg-[#0b0d17] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* The Final CTA Box */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 p-10 md:p-20 text-center mb-24 shadow-2xl">
          {/* Decorative background blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to launch your next big idea?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of developers who are already scaling faster with our verified premium apps.
            </p>
            <button className="bg-white text-indigo-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-xl flex items-center gap-3 mx-auto">
              Get Started Now <FaRocket />
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Common Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left text-white font-medium hover:bg-white/5 transition-colors"
                >
                  {faq.q}
                  <FaChevronDown className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/60 leading-relaxed">
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