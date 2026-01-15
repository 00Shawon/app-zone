'use client'
import React, { useState } from "react";

const PolicyPage = () => {
  const [activeTab, setActiveTab] = useState("terms");

  const sections = {
    terms: {
      title: "Terms of Service",
      content: (
        <>
          <p>By accessing App Zone, you agree to be bound by these terms. Our platform provides a marketplace for digital software assets.</p>
          <h4 className="text-white font-semibold mt-6 mb-2">1. Account Responsibility</h4>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          <h4 className="text-white font-semibold mt-6 mb-2">2. Product Usage</h4>
          <p>Purchased apps are subject to specific licenses. You may not redistribute or resell the source code as a standalone product.</p>
        </>
      ),
    },
    privacy: {
      title: "Privacy Policy",
      content: (
        <>
          <p>Your privacy is paramount. This section outlines how we collect and protect your data.</p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>We collect email addresses for account verification and delivery.</li>
            <li>Payment data is processed securely via Stripe; we never store credit card numbers.</li>
            <li>We use cookies to improve your browsing experience and remember your cart.</li>
          </ul>
        </>
      ),
    },
    refund: {
      title: "Refund Policy",
      content: (
        <>
          <p>Because our products are <strong>digital downloads</strong>, we generally do not offer refunds once the source code has been accessed.</p>
          <h4 className="text-white font-semibold mt-6 mb-2">Exceptions:</h4>
          <p>Refunds may be granted if:</p>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-red-400/80">
            <li>The product is fundamentally broken and cannot be fixed by the developer.</li>
            <li>The product was misrepresented in the preview/description.</li>
            <li>The purchase was made accidentally and the files have NOT been downloaded.</li>
          </ul>
        </>
      ),
    },
  };

  return (
    <div className="bg-[#0b0d17] min-h-screen text-white/70 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Legal & Policies</h1>
          <p>Last updated: January 2026</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 space-y-2">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left px-6 py-3 rounded-xl transition-all ${
                  activeTab === key 
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20" 
                  : "hover:bg-white/5 text-white/50"
                }`}
              >
                {sections[key].title}
              </button>
            ))}
          </aside>

          {/* Content Area */}
          <main className="flex-1 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8">
              {sections[activeTab].title}
            </h2>
            <div className="prose prose-invert max-w-none leading-relaxed">
              {sections[activeTab].content}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default PolicyPage;