import React from "react";
import { FaCookieBite, FaShieldHalved, FaChartLine, FaUserLock } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

const CookiesPage = () => {
  const cookieTypes = [
    {
      icon: <FaUserLock className="text-blue-500" />,
      title: "Essential Cookies",
      desc: "Necessary for the website to function. They handle your login sessions and security tokens."
    },
    {
      icon: <FaChartLine className="text-purple-500" />,
      title: "Analytics Cookies",
      desc: "Help us understand which apps are trending and how users interact with the store so we can improve."
    },
    {
      icon: <FaCookieBite className="text-orange-500" />,
      title: "Preference Cookies",
      desc: "Remembers your settings like Dark Mode, language, and your 'Saved Apps' list."
    }
  ];

  return (
    <div className="bg-[#0b0d17] text-white min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-blue-600/10 rounded-3xl mb-6">
            <FaCookieBite className="text-5xl text-blue-500" />
          </div>
          <h1 className="text-5xl font-black mb-4">Cookie Policy</h1>
          <p className="text-white/50">Last Updated: January 2026</p>
        </div>

        {/* Introduction */}
        <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] mb-12">
          <h2 className="text-2xl font-bold mb-4">How we use cookies</h2>
          <p className="text-white/60 leading-relaxed">
            At App Zone, we believe in being clear about how we collect and use data. 
            This policy provides detailed information about how and when we use cookies 
            to ensure your app discovery experience is fast and secure.
          </p>
        </div>

        {/* Cookie Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cookieTypes.map((type, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition">
              <div className="text-3xl mb-4">{type.icon}</div>
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-sm text-white/40">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-left border-collapse bg-white/5 rounded-[2rem] overflow-hidden">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-6 text-sm font-bold uppercase tracking-widest text-blue-500">Cookie Name</th>
                <th className="p-6 text-sm font-bold uppercase tracking-widest text-blue-500">Purpose</th>
                <th className="p-6 text-sm font-bold uppercase tracking-widest text-blue-500">Duration</th>
              </tr>
            </thead>
            <tbody className="text-white/60 text-sm">
              <tr className="border-b border-white/5">
                <td className="p-6 font-mono">az_session</td>
                <td className="p-6">Keeps you logged into your account.</td>
                <td className="p-6">Session</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-6 font-mono">az_theme</td>
                <td className="p-6">Remembers your Dark/Light mode preference.</td>
                <td className="p-6">1 Year</td>
              </tr>
              <tr>
                <td className="p-6 font-mono">_ga</td>
                <td className="p-6">Google Analytics - Anonymous site traffic tracking.</td>
                <td className="p-6">2 Years</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Managing Cookies */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Managing your cookies</h2>
          <p className="text-white/50 leading-relaxed">
            Most browsers allow you to control cookies through their settings preferences. 
            However, if you limit the ability of websites to set cookies, you may worsen 
            your overall user experience, as it will no longer be personalized to you.
          </p>
          <div className="flex items-center gap-4 p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
            <FaShieldHalved className="text-2xl text-blue-500" />
            <p className="text-sm">We never sell your cookie data to third-party advertisers.</p>
          </div>
        </div>

        {/* Footer Brand */}
        <div className="mt-24 text-center opacity-20 flex justify-center items-center gap-2">
          App Z<BiWorld />ne — Privacy Matters.
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;