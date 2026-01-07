"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Tablet, Monitor, CheckCircle, Star } from 'lucide-react';

export default function Tablets() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
            <Tablet size={16} className="mr-2" />
            TABLET DEVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tablets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Versatile computing solutions for productivity and creativity
          </p>
        </motion.div>
        
        {/* Tablet Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Versatile Tablet Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ever since Apple unveiled the original iPad back in 2010, the world of tablets changed. We have a range of tablets, some tablets that are great content consumption devices and some which are great at productivity. We have tablets that run on the Windows OS, Android and Apple's own iPad OS.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Choosing a tablet in India isn't as easy as choosing a brand and a model number. Each tablet brings something unique to the table. An iPad or Samsung Tab A series for example is a great content consumption device while the iPad Pro or the Tab S series is great for content creators as well.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Multiple OS Options",
                "Content Creation",
                "Productivity Tools",
                "Premium Brands"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center text-gray-700 bg-white p-4 rounded-xl shadow-md">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Tablet Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <div className="flex justify-center items-center">
                  <img 
                    src="/electronic-devices images/tablet.png" 
                    alt="Tablet Pro" 
                    className="w-64 h-80 object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center shadow-lg">
                  <Star size={14} className="mr-1" fill="currentColor" />
                  Premium
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Apple Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-3xl p-12 text-white text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <Monitor size={16} className="mr-2" />
              APPLE ECOSYSTEM
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              The Power of Apple Products to Work for Your Business
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              Apple devices come with a bundle of benefits in your business. Along with digitally transforming your business, Apple devices are secured by design, affordable, help you reduce your IT expenses and can help improve employee productivity - even when they are working remotely.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
