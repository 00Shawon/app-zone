import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "Power User",
      text: "I've tried dozens of third-party stores, but this is the only one that actually delivers high-speed downloads without a million pop-up ads. Clean and simple.",
      img: "https://i.pravatar.cc/150?u=alex",
      size: "large",
    },
    {
      name: "Sarah Chen",
      role: "Graphic Designer",
      text: "The curation is amazing. I found three productivity tools I use daily that I never would have seen on the official stores.",
      img: "https://i.pravatar.cc/150?u=sarah",
      size: "small",
    },
    {
      name: "James Wilson",
      role: "Casual Gamer",
      text: "Safe, fast, and reliable. Finally, a place where I can download apps without worrying about security.",
      img: "https://i.pravatar.cc/150?u=james",
      size: "small",
    },
  ];

  return (
    <section className="bg-[#0b0d17] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Compact Heading */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-bold mb-3">User Feedback</h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
            Join thousands of satisfied users who have switched to a faster, 
            safer way to manage their apps.
          </p>
        </div>

        {/* Tight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className={`p-7 rounded-[2rem] border border-white/5 bg-white/[0.02] flex flex-col justify-between hover:border-white/10 transition-all duration-300 group ${
                review.size === "large" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div>
                <div className="flex gap-1 text-yellow-500/80 mb-4">
                  {[...Array(5)].map((_, i) => <FaStar key={i} size={12} />)}
                </div>
                
                <FaQuoteLeft className="text-blue-500/20 text-2xl mb-3" />
                
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all border border-white/10"
                />
                <div>
                  <h4 className="text-white text-sm font-bold">{review.name}</h4>
                  <p className="text-white/30 text-[11px] font-medium uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;