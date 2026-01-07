'use client';
import React, { useState } from 'react';

const ConsultingServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const consultingServices = [
    {
      id: 'strategy',
      title: 'Strategic Planning',
      icon: '/icons/consulting-services/planning.png',
      services: [
        'Digital Transformation Strategy',
        'Technology Roadmap Planning',
        'Business Process Optimization',
        'Change Management',
        'Risk Assessment & Mitigation'
      ]
    },
    {
      id: 'implementation',
      title: 'Implementation & Support',
      icon: '/icons/consulting-services/support.png',
      services: [
    'Software License & Compliance Management',
    'Infrastructure Consolidation and Optimization',
    'Application Performance Management',
    'DR Strategy Consultancy',
        'Data Centre Optimization',
        'Virtualization Solutions'
      ]
    },
    {
      id: 'assessment',
      title: 'Assessment & Audits',
      icon: '/icons/consulting-services/audit.png',
      services: [
        'Capacity & Availability Assessment & Planning',
        'Security Assessment',
        'Network Assessment',
        'Infrastructure Audit',
        'Performance Analysis'
      ]
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 pb-8">
      <div className="w-full px-0 py-2">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up text-glow premium-hover">
            Consulting Services
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up delay-200">
            Transform your business with our expert consulting services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {consultingServices.slice(0, 2).map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 h-[280px] sm:h-[420px] md:h-[450px] w-full transition-all duration-700 animate-sol-fade-in-up overflow-hidden hover:z-20 cursor-pointer premium-card`}
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
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title with sliding underline */}
              <div className="relative z-10 mb-3 sm:mb-4 md:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-gray-800 transition-transform duration-300 text-glow">
                  {service.title}
                  <span className="block h-0.5 bg-gradient-to-r from-black/10 to-black/20 w-10 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-24" />
                </h3>
              </div>

              {/* Services List - refined bullets and subtle reveal */}
              <div className="relative z-10 space-y-1.5 sm:space-y-2 md:space-y-3">
                {service.services.map((item, itemIndex) => (
                  <div
                    key={item}
                    className="flex items-start space-x-3 transition-all duration-350 transform group-hover:translate-x-1"
                    style={{ transitionDelay: `${itemIndex * 40}ms` }}
                  >
                    <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-gray-300" />
                    <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 font-medium leading-tight">
                      {item}
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

          {/* Show third card inline in grid only for lg and above */}
          <div
            className="hidden lg:block group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 h-[280px] sm:h-[420px] md:h-[450px] w-full transition-all duration-700 animate-sol-fade-in-up overflow-hidden hover:z-20 cursor-pointer premium-card"
            style={{ animationDelay: `${0.2 + 2 * 0.15}s` }}
            onMouseEnter={() => setHoveredCard(2)}
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
                  src={consultingServices[2].icon}
                  alt={consultingServices[2].title}
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Title */}
            <div className="relative z-10 mb-3 sm:mb-4 md:mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-gray-800 transition-transform duration-300 text-glow">
                {consultingServices[2].title}
                <span className="block h-0.5 bg-gradient-to-r from-black/10 to-black/20 w-10 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-24" />
              </h3>
            </div>
            {/* Services List */}
            <div className="relative z-10 space-y-1.5 sm:space-y-2 md:space-y-3">
              {consultingServices[2].services.map((item, itemIndex) => (
                <div
                  key={item}
                  className="flex items-start space-x-3 transition-all duration-350 transform group-hover:translate-x-1"
                  style={{ transitionDelay: `${itemIndex * 40}ms` }}
                >
                  <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-gray-300" />
                  <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 font-medium leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            {/* Subtle hover sheen */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700">
              <div className="absolute -left-24 top-0 w-40 h-full transform -skew-x-12 bg-gradient-to-r from-white/12 via-white/6 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
            </div>
          </div>
        </div>
        {/* Center third card only for md (tablet). Hide on lg+ and show on mobile as block */}
        <div className="block md:flex lg:hidden justify-center px-4 mt-8">
          <div
            className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 h-[280px] sm:h-[420px] md:h-[450px] w-full md:max-w-[calc(50%-1rem)] transition-all duration-700 animate-sol-fade-in-up overflow-hidden hover:z-20 cursor-pointer premium-card"
            style={{ animationDelay: `${0.2 + 2 * 0.15}s` }}
            onMouseEnter={() => setHoveredCard(2)}
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
                  src={consultingServices[2].icon}
                  alt={consultingServices[2].title}
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Title */}
            <div className="relative z-10 mb-3 sm:mb-4 md:mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-gray-800 transition-transform duration-300 text-glow">
                {consultingServices[2].title}
                <span className="block h-0.5 bg-gradient-to-r from-black/10 to-black/20 w-10 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-24" />
              </h3>
            </div>
            {/* Services List */}
            <div className="relative z-10 space-y-1.5 sm:space-y-2 md:space-y-3">
              {consultingServices[2].services.map((item, itemIndex) => (
                <div
                  key={item}
                  className="flex items-start space-x-3 transition-all duration-350 transform group-hover:translate-x-1"
                  style={{ transitionDelay: `${itemIndex * 40}ms` }}
                >
                  <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-gray-300" />
                  <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 font-medium leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            {/* Subtle hover sheen */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700">
              <div className="absolute -left-24 top-0 w-40 h-full transform -skew-x-12 bg-gradient-to-r from-white/12 via-white/6 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
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

export default ConsultingServices; 