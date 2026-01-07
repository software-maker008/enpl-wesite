'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const SolutionsHero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    [titleRef.current, subtitleRef.current, ctaRef.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-float-slow blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-float-slow delay-1000 blur-xl" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 animate-float-slow delay-2000 blur-xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-flow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 opacity-0 transform translate-y-20 transition-all duration-1000 ease-out"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Enterprise Solutions
          </span>
          <br />
          <span className="text-gray-800">
            That Drive Growth
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto opacity-0 transform translate-y-20 transition-all duration-1000 ease-out delay-300"
        >
          Discover our comprehensive suite of cutting-edge solutions designed to transform your business infrastructure, 
          enhance security, and accelerate digital transformation with enterprise-grade reliability.
        </p>

        {/* CTA Buttons */}
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 transform translate-y-20 transition-all duration-1000 ease-out delay-600"
        >
          <Link href="/solutions/monitoring">
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden min-w-[200px]">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Explore Monitoring Solutions
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </Link>
          
          <button className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-500 font-semibold text-lg min-w-[200px]">
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
              View All Solutions
            </span>
          </button>
        </div>

        {/* Solution Categories Preview */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: 'Monitoring', icon: '📊', color: 'from-blue-500 to-blue-600' },
            { name: 'Security', icon: '🔒', color: 'from-red-500 to-red-600' },
            { name: 'Cloud', icon: '☁️', color: 'from-purple-500 to-purple-600' },
            { name: 'AI/ML', icon: '🤖', color: 'from-green-500 to-green-600' }
          ].map((category, index) => (
            <div
              key={category.name}
              className="group cursor-pointer transform hover:scale-110 transition-all duration-500"
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
        
        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default SolutionsHero;
