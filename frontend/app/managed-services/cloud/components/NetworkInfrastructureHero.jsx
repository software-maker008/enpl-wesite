"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function NetworkInfrastructureHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-blue-900 via-sky-900 to-cyan-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-sky-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
              Network Infrastructure
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Network Infrastructure
                <span className="block bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              </div>
            
            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl text-sky-100 leading-relaxed">
                Comprehensive network infrastructure management services to ensure your networks are reliable, secure, and optimized for peak performance.
                From design to deployment and ongoing maintenance, we provide end-to-end solutions.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-blue-600 to-sky-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-sky-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                <span className="relative flex items-center space-x-3">
                  <span>Explore Solutions</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button className="group px-8 py-4 border-2 border-sky-400 text-sky-400 font-bold text-lg rounded-2xl hover:bg-sky-400 hover:text-white transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                <span className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300 text-sm">Networks Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Monitoring</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Network Capabilities Preview */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-sky-600 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-sky-200 to-cyan-200 blur-3xl" />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Why Choose Our Network Management?</h3>
                <div className="space-y-4">
                  {[
                    'Expert network design and architecture planning',
                    '24/7 monitoring and proactive issue resolution',
                    'Enterprise-grade security and compliance',
                    'Scalable solutions that grow with your business',
                    'Cost optimization and performance tuning',
                    'Comprehensive documentation and reporting'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
