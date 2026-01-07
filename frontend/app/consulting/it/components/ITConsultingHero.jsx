"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ITConsultingHero() {
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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 py-9"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-32 text-6xl text-blue-300 opacity-30 animate-float-slow">
        💼
      </div>
      <div className="absolute top-48 right-48 text-5xl text-cyan-300 opacity-30 animate-float-slow animation-delay-1000">
        📊
      </div>
      <div className="absolute bottom-32 left-1/3 text-4xl text-indigo-300 opacity-30 animate-float-slow animation-delay-3000">
        🎯
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              IT Consulting Services
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto leading-relaxed">
            We provide strategic IT consulting designed to help your organization optimize infrastructure, enhance connectivity, and accelerate digital transformation.
            Our experts bridge the gap between technology and business needs—ensuring seamless performance, security, and scalability.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-8">
            <Link href="/contact">
              <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                <span className="relative flex items-center space-x-3">
                  <span>Get IT Consultation</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center gap-20 pt-4">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-blue-200 text-sm md:text-base">IT Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-blue-200 text-sm md:text-base">IT Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
