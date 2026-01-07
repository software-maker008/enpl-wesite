"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function SoftwaresHero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[89vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-12"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Software Icons */}
      <div className="absolute top-32 left-32 text-6xl text-blue-300 opacity-30 animate-float-slow">
        💻
      </div>
      <div className="absolute top-48 right-48 text-5xl text-purple-300 opacity-30 animate-float-slow animation-delay-1000">
        📱
      </div>
      <div className="absolute bottom-32 left-1/3 text-4xl text-indigo-300 opacity-30 animate-float-slow animation-delay-3000">
        ⚙️
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-6 max-w-4xl mx-auto leading-relaxed font-semibold">
            Innovative Software. Simplified Business.
          </p>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empower your business with custom-built software solutions designed to optimize operations and accelerate growth.
            From enterprise applications to mobile platforms, we deliver reliable, scalable, and secure software that adapts to your business goals.
          </p>


          {/* Software Capabilities Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: '💼', label: 'Enterprise Applications', description: 'End-to-end business management systems for large-scale operations.', color: 'from-blue-400 to-blue-600' },
              { icon: '🧩', label: 'Custom Development', description: 'Tailored software designed specifically for your workflow and goals.', color: 'from-purple-400 to-purple-600' },
              { icon: '🔧', label: 'System Integration', description: 'Seamless connectivity between platforms for unified data management.', color: 'from-indigo-400 to-indigo-600' },
              { icon: '📱', label: 'Mobile Applications', description: 'Intuitive apps for Android and iOS to enhance accessibility and engagement.', color: 'from-cyan-400 to-cyan-600' }
            ].map((capability, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${capability.color} text-white text-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {capability.icon}
                </div>
                <div className="font-semibold text-sm mb-2">{capability.label}</div>
                <div className="text-xs opacity-90 leading-tight">{capability.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
