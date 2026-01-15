import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "SaaS Founder",
      text: "The quality of the source code here is unmatched. I saved over 200 hours of development time using their EcoTrack template.",
      img: "https://i.pravatar.cc/150?u=alex",
      size: "large",
    },
    {
      name: "Sarah Chen",
      role: "Mobile Developer",
      text: "Verified apps and instant downloads. Exactly what I needed.",
      img: "https://i.pravatar.cc/150?u=sarah",
      size: "small",
    },
    {
      name: "James Wilson",
      role: "Project Manager",
      text: "Support is incredibly responsive. They helped me with a custom integration within hours.",
      img: "https://i.pravatar.cc/150?u=james",
      size: "small",
    },
  ];

  return (
    <section className="bg-[#0b0d17] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Loved by Developers</h2>
          <p className="text-white/50 text-lg">Join 10,000+ creators building with our premium apps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-between hover:bg-white/[0.05] transition-all duration-300 group ${
                review.size === "large" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div>
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
                </div>
                <FaQuoteLeft className="text-purple-500/30 text-4xl mb-4" />
                <p className="text-white/80 text-lg italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-purple-500/50"
                />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-white/40 text-sm">{review.role}</p>
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