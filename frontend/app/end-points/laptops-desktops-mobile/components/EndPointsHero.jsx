"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Smartphone, Shield, Zap, Award } from 'lucide-react';
import Link from 'next/link';

export default function EndPointsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 blur-3xl" />
      </div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating Product Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 opacity-20"
      >
        <Monitor size={60} className="text-blue-400" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 opacity-20"
      >
        <Laptop size={50} className="text-indigo-400" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 left-1/4 opacity-20"
      >
        <Smartphone size={40} className="text-purple-400" />
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Enterprise Servers, Workstations & Laptops
              </span>
              <br />
              <span className="text-white"></span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto leading-relaxed font-semibold"
            >
              Trusted IT Hardware Partner for Business Performance & Security
            </motion.p>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Electrohelps Networks is India's trusted enterprise IT hardware and endpoint reseller. We deliver high-performance servers, professional workstations, and business-grade laptops designed to improve efficiency, enhance data security, and support digital growth.
            </motion.p>
            
            {/* CTA Buttons */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center justify-center space-x-3">
                  <span>Explore Products</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <Link href="/contact">
                <button className="group px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold text-lg rounded-2xl hover:bg-blue-400 hover:text-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                  <span className="flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Contact Sales</span>
                  </span>
                </button>
              </Link>
            </motion.div> */}
          </div>
          
          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Built-in protection and encryption features for secure business operations."
              },
              {
                icon: Zap,
                title: "High Performance",
                description: "Optimized with the latest Intel® and AMD processors for maximum productivity and reliability."
              },
              {
                icon: Award,
                title: "Certified Quality",
                description: "Authorized partner for premium brands with complete warranty and post-sales support."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="group p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
