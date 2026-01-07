"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Cpu, CheckCircle } from 'lucide-react';

export default function EnterpriseDesktops() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(71, 85, 105, 0.1) 1px, transparent 0)',
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
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-semibold mb-4">
            <Monitor size={16} className="mr-2" />
            DESKTOP COMPUTERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enterprise <span className="bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent">Desktops</span>
          </h2>
        </motion.div>

        {/* Enterprise Desktops Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Desktop Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              {/* Monitor */}
              <div className="mb-6 flex justify-center">
                <img 
                  src="/electronic-devices images/desktop.png" 
                  alt="Desktop Monitor" 
                  className="w-full max-w-sm h-48 object-contain drop-shadow-lg"
                />
              </div>
              
              {/* Tower */}
              <div className="flex justify-center">
                <img 
                  src="/electronic-devices images/desktop1.png" 
                  alt="Desktop Tower" 
                  className="w-40 h-48 object-contain drop-shadow-lg"
                />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  When to buy a standard PC:
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  When it comes to ordinary business tasks like running an Excel pivot table, word processing or fielding Zoom calls, most users will notice little difference between a workstation and an ordinary laptop. Also, a standard desktop or laptop can handle video streaming and even gaming just as well as a workstation in many cases.
                </p>
                
                {/* Key Features */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <Cpu size={16} className="text-slate-600 mr-2" />
                    Ideal For:
                  </div>
                  {[
                    "Office Productivity",
                    "Video Conferencing",
                    "Content Consumption",
                    "Standard Business Tasks"
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
      </div>
    </section>
  );
}
