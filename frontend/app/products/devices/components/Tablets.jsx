"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Tablets() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Tablets Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
            Tablets
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
                  Ever since Apple unveiled the original iPad back in 2010, the world of tablets changed. We have a range of tablets, some tablets that are great content consumption devices and some which are great at productivity. We have tablets that run on the Windows OS, Android and Apple's own iPad OS.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Choosing a tablet in India isn't as easy as choosing a brand and a model number. Each tablet brings something unique to the table. An iPad or Samsung ENPL Tab A series for example is a great content consumption device while the iPad Pro or the ENPL Tab S series is great for content creators as well. The Microsoft Surface Go is for those that need a portable windows experience and the Surface Pro is for those that want Windows in a tablet form factor. There are a slew of Android tablets from Lenovo, available in different form factors.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Tablet Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Tablet Setup */}
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  {/* Tablet */}
                  <div className="w-48 h-64 bg-gray-800 rounded-lg border-2 border-gray-600 mb-4 relative">
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-orange-500 rounded flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-xs">Tablet</div>
                        <div className="text-xs mt-1">Pro</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stylus */}
                  <div className="w-2 h-16 bg-rose-400 rounded-full mx-auto mb-4 transform rotate-45"></div>
                  
                  {/* Keyboard */}
                  <div className="w-48 h-8 bg-gray-800 rounded-lg border-2 border-gray-600"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Apple Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            The Power of Apple Products to Work for Your Business
          </h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Apple devices come with a bundle of benefits in your business. Along with digitally transforming your business, Apple devices are secured by design, affordable, help you reduce your IT expenses and can help improve employee productivity - even when they are working remotely.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
