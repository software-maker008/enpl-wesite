"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Laptops() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Laptops Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Laptops
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enterprise Laptops */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              {/* Laptop Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-32 bg-gray-300 rounded-lg transform rotate-12 shadow-lg">
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-xs">Lenovo</div>
                        <div className="text-xs mt-1">ThinkPad</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Enterprise Laptops
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                These low-cost laptops are relatively low-powered, but capable of general computing tasks such as web browsing, email and general word processing. They can handle most basic multimedia tasks (e.g. standard definition video streaming) and are best suited to regular office use.
              </p>
            </motion.div>

            {/* High End Laptops */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              {/* Laptop Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-32 bg-gray-300 rounded-lg transform -rotate-12 shadow-lg">
                    <div className="absolute inset-2 bg-gradient-to-br from-red-500 to-orange-500 rounded flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-xs">2-in-1</div>
                        <div className="text-xs mt-1">Convertible</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                High End Laptops for Power Users
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                If you want something to give you the processing power of a desktop computer while being transportable with relative ease, look for a powerful (preferably latest-generation) processor and plenty of RAM (at least 16GB). Thanks to its 360-degree hinge, the 2-in-1 convertible laptops quickly switches between laptop, tablet, tent, and stand modes. No matter where your "desk" might be, we've got a mode to accommodate your style. Plus, switch from keyboard to pen mode in seconds, when you want to sketch, sign documents, or take notes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
