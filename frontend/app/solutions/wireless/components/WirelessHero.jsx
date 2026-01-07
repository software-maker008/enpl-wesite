"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function WirelessHero() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Wireless Icons */}
      <div className="absolute top-32 left-32 text-6xl text-blue-300 opacity-30 animate-float-slow">
        📶
      </div>
      <div className="absolute top-48 right-48 text-5xl text-purple-300 opacity-30 animate-float-slow animation-delay-1000">
        🌐
      </div>
      <div className="absolute bottom-32 left-1/3 text-4xl text-indigo-300 opacity-30 animate-float-slow animation-delay-3000">
        ⚡
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              WiFi
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business connectivity with advanced WiFi solutions. From WiFi 5 to WiFi 7, 
            we provide enterprise-grade WiFi services from leading manufacturers including NETGEAR, Ubiquiti, 
            Sophos, Cisco Meraki, and HPE Aruba for optimal performance and reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
              Learn More
            </button>
          </div>

          {/* WiFi Capabilities Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: '📶', label: 'WiFi 5', color: 'from-blue-400 to-blue-600' },
              { icon: '🌐', label: 'WiFi 6', color: 'from-purple-400 to-purple-600' },
              { icon: '⚡', label: 'WiFi 7', color: 'from-indigo-400 to-indigo-600' },
              { icon: '🏢', label: 'Enterprise', color: 'from-cyan-400 to-cyan-600' }
            ].map((capability, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${capability.color} text-white text-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {capability.icon}
                </div>
                <div className="font-semibold text-sm">{capability.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
