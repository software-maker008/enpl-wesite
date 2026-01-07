"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, CheckCircle, Activity } from 'lucide-react';

export default function IoTManagement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)',
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
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
            <Server size={16} className="mr-2" />
            IoT DEVICE MANAGEMENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">IoT & Edge Management</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - IoT Devices Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* Cloud Infrastructure */}
              <div className="w-full bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 mb-6 shadow-xl">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Server size={32} />
                  <div>
                    <div className="text-sm font-semibold">Cloud Platform</div>
                    <div className="text-xs opacity-80">Device Management</div>
                  </div>
                </div>
              </div>
              
              {/* Device Grid */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {/* Server Racks */}
                <div className="h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg border-2 border-gray-500 flex items-center justify-center shadow-md">
                  <div className="text-white text-xs font-bold">🖥️</div>
                </div>
                <div className="h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg border-2 border-gray-500 flex items-center justify-center shadow-md">
                  <div className="text-white text-xs font-bold">🖥️</div>
                </div>
                
                {/* Smart Devices Row 1 */}
                <div className="h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">📱</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">🎧</span>
                </div>
                
                {/* Smart Devices Row 2 */}
                <div className="h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">🎮</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">💡</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">🥽</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">📹</span>
                </div>
                
                {/* Smart Devices Row 3 */}
                <div className="h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">🌪️</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">🚗</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">☀️</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">🏠</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center justify-center mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <Activity size={16} className="text-green-600 mr-2" />
                <span className="text-sm font-semibold text-green-700">All Devices Connected</span>
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
                ENPL's IoT Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                ENPL offers a comprehensive suite of services to manage the entire lifecycle of your Internet of Things (IoT) devices. We provide end-to-end solutions that ensure your connected devices are always secure, optimised, and performing at their peak.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our services encompass everything from real-time monitoring and automated diagnostics to predictive maintenance and robust security measures.
              </p>
              
              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <Server size={16} className="text-indigo-600 mr-2" />
                  Key Capabilities:
                </div>
                {[
                  "Real-time Device Monitoring",
                  "Automated Diagnostics",
                  "Predictive Maintenance",
                  "Robust Security Measures"
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
