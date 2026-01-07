'use client';

import React, { useRef, useEffect, useState } from 'react';

const VideoBanner = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      const handleLoadStart = () => {
        setIsLoading(true);
        setError(null);
      };

      const handleCanPlay = () => {
        setIsLoading(false);
      };

      const handleError = () => {
        setError('Failed to load video');
        setIsLoading(false);
      };

      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      // Try to play the video
      video.play().catch(err => {
        console.log('Autoplay prevented:', err);
        setIsLoading(false);
      });

      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <section className="relative w-full h-[90vh] sm:h-[80vh] md:h-[80vh] lg:h-[89vh] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/30 to-purple-900/20 z-10" />
      
      {/* Video container */}
      <div className="relative w-full h-full">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 z-20">
            <div className="text-center">
              <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <p className="text-blue-600 font-semibold text-lg">Loading Video...</p>
              <p className="text-blue-500 text-sm mt-2">Preparing banner content</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 z-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-red-600 font-semibold text-lg">{error}</p>
              <p className="text-red-500 text-sm mt-2">Video not available</p>
            </div>
          </div>
        )}

        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/main-images/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

       {/* Content Overlay */}
       <div className="absolute inset-0 z-20 flex items-center justify-center">
         <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
           {/* Premium Main Heading */}
           <div className="relative mb-8">
             <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
               <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-shift">
                 Electrohelps
               </span>
               <br />
               <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient-shift-delayed">
                 Networks 
               </span>
             </h1>
             
             {/* Glowing text effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50 animate-pulse-slow" />
             
             {/* Premium underline */}
             <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-underline-glow" />
           </div>
           
           {/* Premium Subtitle */}
           <div className="relative mb-10">
             <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 tracking-wide">
               <span className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-clip-text text-transparent">
                 Your Technology Transformation Partner
               </span>
             </p>
             
             {/* Subtitle glow effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-2xl opacity-60" />
           </div>
           
           {/* Premium Description */}
           <div className="relative mb-12">
              <p className="text-lg sm:text-xl lg:text-2xl text-white mx-auto leading-relaxed font-medium">
               <span className="block max-w-4xl mx-auto mb-2">
                 <span className="text-white font-semibold">We help businesses</span> with 
                 <span className="text-white font-semibold"> IT transformation</span>, 
                 <span className="text-white font-semibold"> to stay secure</span>,
               </span>
               <span className="block max-w-xl mx-auto">
                 <span className="text-white font-semibold">Start getting the support you need. Let us handle IT for you.</span> 
               </span>
             </p>
             
             {/* Description background glow */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-xl opacity-40" />
           </div>
          
          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Get Started
            </button>
            <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
              Learn More
            </button>
          </div> */}
        </div>
      </div>


      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20">
        <div 
          className="flex flex-col items-center group cursor-pointer"
          onClick={() => {
            const nextSection = document.getElementById('quick-facts-section');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          {/* Animated Text */}
          <div className="relative mb-4">
            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
              Scroll to explore
            </span>
            {/* Text underline animation */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 ease-out" />
          </div>
          
          {/* Premium Scroll Wheel */}
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 w-8 h-12 border-2 border-white/20 rounded-full animate-pulse" />
            
            {/* Main scroll wheel */}
            <div className="relative w-8 h-12 border-2 border-white/40 rounded-full flex justify-center items-start pt-2 group-hover:border-white/60 transition-all duration-300">
              {/* Animated scroll dot */}
              <div className="relative">
                <div className="w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-scroll-dot shadow-lg" />
                {/* Glowing effect */}
                <div className="absolute inset-0 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-ping opacity-75" />
              </div>
            </div>
            
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 w-8 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </div>
          
          {/* Animated arrows pointing down */}
          <div className="mt-2 flex flex-col items-center space-y-1">
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-white/40 animate-bounce-arrow-1" />
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-white/30 animate-bounce-arrow-2" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Video banner animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
         /* Premium Gradient text animations */
         @keyframes gradientShift {
           0% {
             background-position: 0% 50%;
           }
           50% {
             background-position: 100% 50%;
           }
           100% {
             background-position: 0% 50%;
           }
         }
         
         @keyframes gradientShiftDelayed {
           0% {
             background-position: 100% 50%;
           }
           50% {
             background-position: 0% 50%;
           }
           100% {
             background-position: 100% 50%;
           }
         }
         
         .animate-gradient-shift {
           background-size: 200% 200%;
           animation: gradientShift 4s ease-in-out infinite;
         }
         
         .animate-gradient-shift-delayed {
           background-size: 200% 200%;
           animation: gradientShiftDelayed 4s ease-in-out infinite;
         }
         
         /* Premium underline glow animation */
         @keyframes underlineGlow {
           0%, 100% {
             box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
             transform: translateX(-50%) scaleX(1);
           }
           50% {
             box-shadow: 0 0 20px rgba(147, 51, 234, 0.8), 0 0 30px rgba(236, 72, 153, 0.6);
             transform: translateX(-50%) scaleX(1.1);
           }
         }
         
         .animate-underline-glow {
           animation: underlineGlow 3s ease-in-out infinite;
         }
         
         /* Premium pulse animation */
         @keyframes pulseSlow {
           0%, 100% {
             opacity: 0.3;
             transform: scale(1);
           }
           50% {
             opacity: 0.6;
             transform: scale(1.05);
           }
         }
         
         .animate-pulse-slow {
           animation: pulseSlow 4s ease-in-out infinite;
         }
        
        /* Button hover effects */
        .transform {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        .hover\\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Premium Scroll Indicator Animations */
        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-scroll-dot {
          animation: scrollDot 2s ease-in-out infinite;
        }
        
        
        /* Bouncing arrows animation */
        @keyframes bounceArrow1 {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-4px);
            opacity: 0.8;
          }
        }
        
        @keyframes bounceArrow2 {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-6px);
            opacity: 0.6;
          }
        }
        
        .animate-bounce-arrow-1 {
          animation: bounceArrow1 2s ease-in-out infinite;
        }
        
        .animate-bounce-arrow-2 {
          animation: bounceArrow2 2s ease-in-out infinite;
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default VideoBanner;
