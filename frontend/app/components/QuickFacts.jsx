'use client';

import React, { useState } from 'react';

const QuickFacts = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const serviceCards = [];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-8">
      <div className="w-full px-0">

        {serviceCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-16">
            {serviceCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 h-[380px] sm:h-[420px] md:h-[450px] w-full transition-all duration-700 animate-sol-fade-in-up overflow-hidden hover:z-20 cursor-pointer premium-card"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Subtle glass highlight on hover (premium look) */}
              <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/5 backdrop-blur-sm pointer-events-none transition-all duration-500" />

              {/* Soft border + vignette */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 pointer-events-none transition-all duration-500" />

              {/* Faint particle accents (desaturated, low opacity) */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                <div className="particle" style={{ top: '6%', right: '4%', width: 10, height: 10 }} />
                <div className="particle" style={{ bottom: '8%', left: '6%', width: 6, height: 6 }} />
                <div className="particle" style={{ top: '48%', right: '12%', width: 8, height: 8 }} />
            </div>

              {/* Icon Container - elevated ring + lift on hover */}
              <div className="relative z-10 mb-4 sm:mb-6 md:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto flex items-center justify-center rounded-xl sm:rounded-2xl bg-white shadow-md ring-0 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title with sliding underline */}
              <div className="relative z-10 mb-3 sm:mb-4 md:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-gray-800 transition-transform duration-300 text-glow">
                  {card.title}
                  <span className="block h-0.5 bg-gradient-to-r from-black/10 to-black/20 w-10 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-24" />
                </h3>
              </div>

              {/* Description */}
              <div className="relative z-10 mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
                  {card.description}
                </p>
                    </div>

              {/* Features List - refined bullets and subtle reveal */}
              <div className="relative z-10 space-y-1.5 sm:space-y-2 md:space-y-3">
                {card.features.map((feature, featureIndex) => (
                  <div
                    key={feature}
                    className="flex items-start space-x-3 transition-all duration-350 transform group-hover:translate-x-1"
                    style={{ transitionDelay: `${featureIndex * 40}ms` }}
                  >
                    <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-gray-300" />
                    <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 font-medium leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtle hover sheen */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                <div className="absolute -left-24 top-0 w-40 h-full transform -skew-x-12 bg-gradient-to-r from-white/12 via-white/6 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Enhanced Description Section */}
        <div className="px-2 sm:px-4">
          <div className="max-w-[98%] sm:max-w-[95%] mx-auto">
            {/* Main Description Card - Clean & Materialistic Design */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 overflow-hidden">
              <div className="relative z-10">
                {/* Main Branding Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up text-glow premium-hover inline-block">
                    ENPL - Your Technology <span className="text-blue-600">Transformation Partner</span>
                  </h2>
                </div>

                {/* Sub Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Comprehensive IT Excellence
                  </h3>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Main Content - Single Column Layout */}
                <div className="w-full px-4 sm:px-6">
                  <div className="text-center mb-8">
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                      We provide a comprehensive range of <span className="text-blue-600 font-semibold">Information Technology services</span> designed to maximize business productivity and drive digital transformation.
                    </p>
                  </div>
                  
                  {/* Feature Highlights - Full Width Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 mt-8">
                    {[
                      { icon: '🎯', title: 'Strategic Consultancy', desc: 'Expert guidance for your IT strategy' },
                      { icon: '⚡', title: 'Expert Implementation', desc: 'Professional deployment services' },
                      { icon: '☁️', title: 'Cloud Infrastructure', desc: 'Cutting-edge cloud solutions' },
                      { icon: '🔧', title: 'Custom Solutions', desc: 'Tailored to your business needs' }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="text-center p-6 sm:p-7 lg:p-8 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-all duration-300 group/item"
                      >
                        <div className="text-5xl mb-5 group-hover/item:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg sm:text-xl">
                          {item.title}
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                  {/* Bottom Description */}
                  <div className="mt-8 text-center">
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      From strategic consultancy to expert implementation, outsourcing solutions to cutting-edge cloud infrastructure, we deliver <span className="font-semibold text-gray-800">end-to-end IT excellence</span>. Our customized IT solutions adapt and grow with your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes sol-fade-in-up {
          0% { opacity: 0; transform: translateY(60px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-sol-fade-in-up {
          animation: sol-fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in-up.delay-300 {
          animation-delay: 0.3s;
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.35 }
          50% { transform: translateY(-6px) rotate(180deg) scale(1.05); opacity: 0.65 }
        }
        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.25 }
          50% { transform: translateY(-4px) scale(1.03); opacity: 0.55 }
        }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3 }
          50% { transform: translateY(-8px) scale(1.08); opacity: 0.6 }
        }
        .animate-float-3 { animation: float-3 6s ease-in-out infinite; }

        @keyframes float-slow { 0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)} }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

        @keyframes pulse-slow { 0%,100%{opacity:0.7;transform:scale(1)}50%{opacity:1;transform:scale(1.06)} }
        .animate-pulse-slow { animation: pulse-slow 3.5s ease-in-out infinite; }
        
        /* Enhanced hover effects (premium glass + lift) */
        .premium-card:hover { transform: translateY(-10px) scale(1.02); }

        /* particle style */
        .particle {
          position: absolute;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), rgba(255,255,255,0.35));
          border-radius: 9999px;
          opacity: 0.12;
          filter: blur(6px);
          transform: translateZ(0);
        }

        /* sheen animation */
        .animate-shine { animation: shine 1.2s ease-in-out forwards; }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 0.45 }
          100% { transform: translateX(140%) skewX(-12deg); opacity: 0; }
        }

        /* subtle transitions override for premium feel */
        * { transition-timing-function: cubic-bezier(0.2,0.9,0.3,1); }
        
        /* Gradient text support */
        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default QuickFacts; 