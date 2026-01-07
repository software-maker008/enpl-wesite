"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Smartphone, Laptop, Server, Cloud } from 'lucide-react';
import Link from 'next/link';

export default function EndpointProtectionOverview() {
  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 px-4 md:px-8"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-900 break-words leading-tight">
              ENDPOINT PROTECTION
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Protect your digital perimeter with our comprehensive endpoint protection solutions. 
              Safeguard your devices, data, and users from evolving cyber threats including malware, 
              ransomware, phishing attacks, and unauthorized access.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {['Malware Protection', 'Real-time Monitoring', 'Threat Detection', 'Data Encryption'].map((feature, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-50 rounded-full border border-gray-300 text-sm font-medium text-gray-700"
                >
                  {feature}
                </div>
              ))}
            </div>

            <Link href="/contact">
              <button className="mt-20 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                GET APPOINTMENT
              </button>
            </Link>
          </motion.div>

          {/* Right Side - Visual Network */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gray-50 border border-gray-200">
              {/* Central Shield */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Shield size={60} className="text-white" />
                </div>
              </div>

              {/* Network Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="15%" y2="70%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
              </svg>

              {/* Devices */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-[25%] left-[15%]"
              >
                <div className="w-16 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 shadow-xl">
                  <Laptop className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-[20%] right-[15%]"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-3 shadow-xl">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-[20%] left-[10%]"
              >
                <div className="w-20 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-3 shadow-xl">
                  <Server className="w-14 h-10 text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-[15%] right-[20%]"
              >
                <div className="w-16 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-3 shadow-xl">
                  <Cloud className="w-10 h-8 text-white" />
                </div>
              </motion.div>

              {/* Security Icons */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-[30%] left-[30%]"
              >
                <Lock size={20} className="text-yellow-400" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute top-[40%] right-[35%]"
              >
                <Shield size={20} className="text-green-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

