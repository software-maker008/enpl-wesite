"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Workstations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Workstations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
            Workstations
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Workstations are desktop PCs designed to handle demanding workflows such as data science, 3D design, video editing, and engineering. A workstation is more robust than the typical PC, with enhanced specs like a faster CPU and GPU, more memory, increased storage, software certification, and the ability to withstand constant usage.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Workstations often have a discrete GPU to offload visual tasks from the CPU and offer more configuration choices to match user needs and budget.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  While traditionally available in tower chassis, workstations now come in a wide variety of form factors such as Tower, Small Form Factor Desktop, and Mini as well as mobile workstations.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Workstation Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Workstation Setup */}
                <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
                  {/* Monitor with Data Visualization */}
                  <div className="w-64 h-40 bg-black rounded-lg border-2 border-gray-600 mb-4 relative">
                    <div className="absolute inset-2 bg-gray-900 rounded flex items-center justify-center">
                      <div className="text-white text-center w-full">
                        {/* Data Visualization Mockup */}
                        <div className="grid grid-cols-3 gap-1 mb-2">
                          <div className="h-8 bg-blue-500 rounded"></div>
                          <div className="h-12 bg-green-500 rounded"></div>
                          <div className="h-6 bg-purple-500 rounded"></div>
                        </div>
                        <div className="text-xs text-blue-400 font-bold">72,845</div>
                        <div className="text-xs text-green-400">5,989,411,531</div>
                        <div className="text-xs text-gray-400 mt-1">Lenovo</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Workstation Tower */}
                  <div className="w-40 h-48 bg-gray-800 rounded-lg border-2 border-gray-600 mx-auto relative">
                    <div className="absolute inset-1 bg-gray-700 rounded flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-xs font-bold">ThinkStation</div>
                        <div className="w-16 h-1 bg-red-500 rounded-full mt-2 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
