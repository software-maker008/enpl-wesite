"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Zap, CheckCircle } from 'lucide-react';

export default function Workstations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
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
            <Cpu size={16} className="mr-2" />
            HIGH-PERFORMANCE WORKSTATIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Workstations</span>
          </h2>
        </motion.div>

        {/* Workstations Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise Workstations
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Workstations are desktop PCs designed to handle demanding workflows such as data science, 3D design, video editing, and engineering. A workstation is more robust than the typical PC, with enhanced specs like a faster CPU and GPU, more memory, increased storage, software certification, and the ability to withstand constant usage.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Workstations often have a discrete GPU to offload visual tasks from the CPU and offer more configuration choices to match user needs and budget.
                </p>
                
                {/* Key Features */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <Zap size={16} className="text-blue-600 mr-2" />
                    Perfect For:
                  </div>
                  {[
                    "Data Science & Analytics",
                    "3D Design & CAD",
                    "Video Editing & Rendering",
                    "Engineering Workflows"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Workstation Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                {/* Monitor with Data Visualization */}
                <div className="w-80 h-48 bg-gradient-to-br from-gray-900 to-slate-800 rounded-2xl border-4 border-gray-700 mb-6 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-4 bg-black rounded-lg flex items-center justify-center">
                    <div className="text-white text-center w-full px-4">
                      {/* Data Visualization Mockup */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="h-12 bg-blue-500 rounded-lg shadow-lg"></div>
                        <div className="h-16 bg-green-500 rounded-lg shadow-lg"></div>
                        <div className="h-10 bg-purple-500 rounded-lg shadow-lg"></div>
                      </div>
                      <div className="text-sm text-blue-400 font-bold">72,845</div>
                      <div className="text-xs text-green-400">5,989,411,531</div>
                      <div className="text-xs text-gray-400 mt-1">Lenovo</div>
                    </div>
                  </div>
                </div>
                
                {/* Workstation Tower */}
                <div className="flex justify-center">
                  <div className="w-48 h-56 bg-gradient-to-br from-gray-800 to-slate-900 rounded-2xl border-4 border-gray-700 relative shadow-2xl">
                    <div className="absolute inset-2 bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-sm font-bold mb-2">ThinkStation</div>
                        <div className="w-20 h-1.5 bg-red-500 rounded-full mx-auto shadow-lg shadow-red-500/50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
