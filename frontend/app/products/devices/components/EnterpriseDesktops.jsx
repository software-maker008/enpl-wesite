"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function EnterpriseDesktops() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Best Laptops and Desktops reseller in India
          </h2>
        </motion.div>

        {/* Enterprise Desktops Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Enterprise Desktops
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Desktop Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Desktop Setup */}
                <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
                  {/* Monitor */}
                  <div className="w-64 h-40 bg-black rounded-lg border-2 border-gray-600 mb-4 relative">
                    <div className="absolute inset-2 bg-blue-500 rounded flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-sm font-bold">Windows 10</div>
                        <div className="text-xs mt-1">Desktop</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tower */}
                  <div className="w-32 h-40 bg-gray-800 rounded-lg border-2 border-gray-600 mx-auto">
                    <div className="absolute inset-1 bg-gray-700 rounded flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-xs font-bold">ThinkCentre</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  When to buy a standard PC:
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  When it comes to ordinary business tasks like running an Excel pivot table, word processing or fielding Zoom calls, most users will notice little difference between a workstation and an ordinary laptop. Also, a standard desktop or laptop can handle video streaming and even gaming just as well as a workstation in many cases.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
