"use client";

import React from 'react';
import WebGLBanner from './WebGLBanner';

const Banner = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Enhanced Background Patterns */}
      <div className="absolute inset-0 opacity-30">
        {/* Network-inspired geometric patterns */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Network connection lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Premium WebGL 3D Network Device Animation */}
        <div className="relative w-full h-[600px] lg:h-[700px] xl:h-[800px] group">
          <WebGLBanner />
          
          {/* Premium overlay effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Floating network indicators */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes network-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.3);
          }
        }
        .animate-network-glow {
          animation: network-glow 3s ease-in-out infinite;
        }
        
        /* Premium hover effects */
        .premium-banner-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .premium-banner-hover:hover {
          transform: scale(1.02);
          filter: brightness(1.1);
        }
      `}</style>
    </section>
  );
};

export default Banner;