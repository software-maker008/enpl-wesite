"use client";
import React from 'react';
import Link from 'next/link';

export default function NetworkingCTA() {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl animate-pulse-slow" />
      </div>
      
      {/* Yellow Accent Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg" />
      
      <div className="relative z-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Subtitle */}
          <div className="mb-3">
            <h3 className="text-sm md:text-base font-medium text-yellow-400 mb-1 tracking-wider uppercase">
              Ready to Upgrade Your Network Infrastructure?
            </h3>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full" />
          </div>
          
          {/* Main Heading */}
          <div className="mb-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
              LET'S IMPLEMENT PROFESSIONAL
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                NETWORK INFRASTRUCTURE
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <div className="mb-4">
            <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our expert team is ready to help you implement comprehensive network infrastructure solutions including 
              indoor and outdoor WiFi Access Points, network switches, and enterprise routers for optimal performance.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/contact">
              <button className="group relative bg-white text-gray-900 px-10 py-5 rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-500 font-bold text-lg border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-110 hover:-translate-y-1">
                {/* Button Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Button Content */}
                <span className="relative flex items-center space-x-3">
                  <span>Get Started Today</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
            
            <a href="tel:+917718811771">
              <button className="group px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                <span className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </span>
              </button>
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 pt-4 border-t border-white/20">
            <p className="text-gray-400 text-xs md:text-sm">
              Join hundreds of businesses that have already upgraded their network infrastructure with our professional solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
