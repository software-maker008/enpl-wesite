"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function NetworkInfrastructureChallenges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Isometric Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Network Setup Illustration */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                {/* Person at Laptop */}
                <div className="w-48 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg border-2 border-gray-200 relative mb-4">
                  <div className="absolute bottom-4 left-4 w-16 h-12 bg-gray-300 rounded border border-gray-400 flex items-center justify-center">
                    <span className="text-xs">💻</span>
                  </div>
                  <div className="absolute bottom-4 left-24 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">👤</span>
                  </div>
                </div>

                {/* Server Racks */}
                <div className="flex items-end justify-center space-x-2 mb-4">
                  <div className="w-12 h-20 bg-gray-600 rounded-t-lg border border-gray-500"></div>
                  <div className="w-16 h-24 bg-gray-700 rounded-t-lg border border-gray-600"></div>
                  <div className="w-10 h-16 bg-gray-500 rounded-t-lg border border-gray-400"></div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <path d="M 80 120 Q 100 100 120 120" stroke="blue" strokeWidth="2" fill="none" opacity="0.8"/>
                  <path d="M 100 120 Q 120 140 140 160" stroke="blue" strokeWidth="2" fill="none" opacity="0.8"/>
                  <path d="M 60 160 Q 80 140 100 120" stroke="blue" strokeWidth="2" fill="none" opacity="0.8"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Challenges Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Organizations often face several challenges in Network Infrastructure Management, such as:
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Increasing complexity of networks:</span>
                    <span className="text-gray-600"> Networks are becoming increasingly complex, making it difficult to track assets and configurations.</span>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Growing demands for bandwidth:</span>
                    <span className="text-gray-600"> Increased use of bandwidth-intensive applications (e.g., video streaming, cloud computing) strains networks, leading to performance issues and outages.</span>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Increased threats to security:</span>
                    <span className="text-gray-600"> Networks are vulnerable to cyberattacks, requiring investment in security measures like firewalls and intrusion detection systems.</span>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Lack of resources:</span>
                    <span className="text-gray-600"> Many organizations lack dedicated resources for network infrastructure management, leading to problems with performance, security, and compliance.</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
