"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, CheckCircle, Lightbulb } from 'lucide-react';

export default function SmartBuildingSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
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
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            <Home size={16} className="mr-2" />
            SMART BUILDING SOLUTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Intelligent <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Smart Buildings</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Smart Home Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* Living Room Scene */}
              <div className="w-full aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl border-2 border-gray-200 relative overflow-hidden p-6">
                {/* Devices */}
                <div className="absolute top-4 left-4 w-20 h-12 bg-gray-800 rounded-lg border-2 border-gray-600 shadow-lg"></div>
                <div className="absolute bottom-6 left-8 w-24 h-10 bg-gray-600 rounded-xl border-2 border-gray-500 shadow-lg"></div>
                <div className="absolute bottom-6 right-8 w-16 h-8 bg-gray-500 rounded-lg border-2 border-gray-400 shadow-lg"></div>
                
                {/* Smart Icons */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">📶</span>
                </div>
                <div className="absolute top-12 right-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">💡</span>
                </div>
                <div className="absolute top-22 right-4 w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">⚙️</span>
                </div>
                <div className="absolute bottom-20 right-10 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">🔒</span>
                </div>
                <div className="absolute bottom-12 right-6 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">📹</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Smart Building Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Transform your buildings and campuses into intelligent, responsive environments with ENPL's smart building solutions. We offer a comprehensive suite of services that optimise building operations, enhance occupant experiences, and improve energy efficiency.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our solutions address the unique challenges of managing diverse IoT devices in modern workspaces, ensuring seamless connectivity, optimal performance, and enhanced security.
              </p>
              
              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <Lightbulb size={16} className="text-blue-600 mr-2" />
                  Key Benefits:
                </div>
                {[
                  "Optimized Space Utilization",
                  "Reduced Energy Consumption",
                  "Automated Building Management",
                  "Enhanced Occupant Experience"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
