"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function NetworkInfrastructureOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 via-white to-sky-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 blur-3xl" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-sky-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Network Infrastructure <span className="text-sky-600">Management</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive network infrastructure management services are essential for organizations of all sizes, 
            ensuring that networks are reliable, secure, and optimized to meet your business needs with professional expertise.
          </p>
        </motion.div>

        {/* Premium Contact Form Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-500 to-sky-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
        >
         
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-sky-200 to-cyan-200 blur-3xl" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-sky-100 text-lg">Contact us today to discuss your network infrastructure needs and get a personalized solution</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="px-6 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-sky-300 focus:outline-none text-gray-900 font-medium shadow-lg"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-6 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-sky-300 focus:outline-none text-gray-900 font-medium shadow-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-6 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-sky-300 focus:outline-none text-gray-900 font-medium shadow-lg"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 shadow-2xl">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
