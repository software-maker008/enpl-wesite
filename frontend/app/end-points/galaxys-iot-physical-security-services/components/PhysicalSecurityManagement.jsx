"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, CheckCircle, Lock } from 'lucide-react';

export default function PhysicalSecurityManagement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.1) 1px, transparent 0)',
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
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
            <Shield size={16} className="mr-2" />
            PHYSICAL SECURITY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unified <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Security Management</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Converged Security Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                ENPL's converged security solutions empower your physical security teams with a unified platform to manage and optimise their operations. We provide comprehensive visibility, control, and automation across all your physical security devices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our solutions enable proactive monitoring and remediation, automate critical tasks, and enhance security measures across your entire infrastructure.
              </p>
              
              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <Lock size={16} className="text-red-600 mr-2" />
                  Security Features:
                </div>
                {[
                  "Surveillance Camera Management",
                  "Access Control Systems",
                  "Integrated Risk Management",
                  "24/7 Monitoring & Response"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Security Network */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* Central Security Hub */}
              <div className="w-full bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-6 mb-6 shadow-xl">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Shield size={32} />
                  <div>
                    <div className="text-sm font-semibold">Security Hub</div>
                    <div className="text-xs opacity-80">Command Center</div>
                  </div>
                </div>
              </div>

              {/* Security Devices Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg border-2 border-gray-400 flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💻</span>
                </div>
                <div className="h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg border-2 border-gray-500 flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🖥️</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg border-2 border-gray-400 flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📱</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg border-2 border-gray-400 flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📱</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg border-2 border-gray-400 flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📄</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg border-2 border-blue-400 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg border-2 border-red-400 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">📹</span>
                </div>
                <div className="h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg border-2 border-orange-400 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🚨</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
