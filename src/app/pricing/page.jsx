import React from "react";
import { FaCircleXmark, FaCrown, FaBolt, FaShieldHalved } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const PricingPage = () => {
  const plans = [
    {
      name: "Guest",
      price: "$0",
      desc: "Perfect for occasional downloads.",
      features: [
        { text: "Standard download speeds", included: true },
        { text: "Access to 100k+ Free Apps", included: true },
        { text: "Standard security scans", included: true },
        { text: "Ad-supported experience", included: false },
        { text: "Parallel downloads", included: false },
      ],
      button: "Current Plan",
      featured: false,
    },
    {
      name: "Premium Pro",
      price: "$9.99",
      period: "/month",
      desc: "The ultimate experience for power users.",
      features: [
        { text: "Unlimited 1Gbps speeds", included: true },
        { text: "Early access to new games", included: true },
        { text: "100% Ad-free browsing", included: true },
        { text: "Priority 24/7 Support", included: true },
        { text: "5 devices simultaneous login", included: true },
      ],
      button: "Upgrade to Pro",
      featured: true,
    },
    {
      name: "Family Pack",
      price: "$19.99",
      period: "/month",
      desc: "Share the power with your whole squad.",
      features: [
        { text: "Everything in Pro tier", included: true },
        { text: "Up to 10 family members", included: true },
        { text: "Parental control dashboard", included: true },
        { text: "Exclusive 'Gold' badges", included: true },
        { text: "Custom app request priority", included: true },
      ],
      button: "Get Family Pack",
      featured: false,
    },
  ];

  return (
    <div className="bg-[#0b0d17] text-white min-h-screen py-20 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-black mb-6">Simple, Transparent <br /><span className="text-blue-500">Pricing</span></h1>
        <p className="text-white/50 text-lg">Choose the plan that fits your downloading needs. No hidden fees, cancel anytime.</p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 hover:-translate-y-2 ${
              plan.featured 
              ? "bg-blue-600 border-blue-400 shadow-2xl shadow-blue-600/20 ring-4 ring-blue-600/20" 
              : "bg-white/5 border-white/10 hover:bg-white/10"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-6 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                <FaCrown /> MOST POPULAR
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`${plan.featured ? "text-blue-100" : "text-white/50"} text-sm`}>{plan.desc}</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-black">{plan.price}</span>
              <span className="text-lg opacity-60">{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm">
                  {feature.included ? (
                    <FaCheckCircle className={plan.featured ? "text-blue-200" : "text-blue-500"} />
                  ) : (
                    <FaCircleXmark className="opacity-20" />
                  )}
                  <span className={!feature.included ? "opacity-30 line-through" : ""}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
              plan.featured 
              ? "bg-white text-blue-600 hover:bg-zinc-100" 
              : "bg-white/10 text-white hover:bg-white/20"
            }`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="max-w-4xl mx-auto mt-24 flex flex-col md:flex-row items-center justify-around gap-8 border-t border-white/10 pt-12">
        <div className="flex items-center gap-3 text-white/50">
          <FaShieldHalved className="text-2xl" />
          <span>Secure SSL Encryption</span>
        </div>
        <div className="flex items-center gap-3 text-white/50">
          <FaBolt className="text-2xl" />
          <span>Instant Activation</span>
        </div>
        <div className="flex items-center gap-3 text-white/50">
          <FaCheckCircle className="text-2xl" />
          <span>7-Day Money Back</span>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;