"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function OnsiteSupportHero() {
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
      className="relative min-h-[89vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 py-12"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-32 text-6xl text-purple-300 opacity-30 animate-float-slow">
        🛠️
      </div>
      <div className="absolute top-48 right-48 text-5xl text-indigo-300 opacity-30 animate-float-slow animation-delay-1000">
        🔧
      </div>
      <div className="absolute bottom-32 left-1/3 text-4xl text-pink-300 opacity-30 animate-float-slow animation-delay-3000">
        ⚡
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Managed IT Services
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional technical support and maintenance services. Our expert engineers provide technical assistance and ensure your IT infrastructure operates at peak performance with minimal downtime.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <Link href="/contact">
              <button className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                <span className="relative flex items-center space-x-3">
                  <span>Know More</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-purple-200 text-sm md:text-base">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">&lt;2hrs</div>
              <div className="text-purple-200 text-sm md:text-base">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">10,000+</div>
              <div className="text-purple-200 text-sm md:text-base">Onsite Visits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
