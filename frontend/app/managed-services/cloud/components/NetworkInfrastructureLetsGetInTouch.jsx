'use client';

import React from 'react';

const NetworkInfrastructureLetsGetInTouch = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-sky-900 text-white py-10 md:py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 blur-3xl animate-pulse-slow" />
      </div>
      
      {/* Yellow Accent Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg" />
      
      <div className="relative z-10 px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <div className="mb-3">
            <h3 className="text-sm md:text-base font-medium text-yellow-400 mb-2 tracking-wider uppercase">
              Let's Get in Touch
            </h3>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full" />
          </div>
          
          {/* Main Heading */}
          <div className="mb-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
              LET'S TALK ABOUT YOUR
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                NETWORK INFRASTRUCTURE NEEDS
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our team of expert engineers will provide comprehensive network infrastructure solutions to meet your every business requirement.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="group relative bg-white text-gray-900 px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-500 font-bold text-base md:text-lg border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-105 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <span className="relative flex items-center space-x-3">
                    <span>Contact Us</span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </a>
              <a 
                href="tel:+917718811771"
                className="group relative inline-flex items-center"
              >
                <button className="group relative border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-500 font-bold text-base md:text-lg transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative flex items-center space-x-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Now</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkInfrastructureLetsGetInTouch;
