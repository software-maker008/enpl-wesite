"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AppleProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Apple Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mac Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              {/* Mac Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-32 bg-gray-300 rounded-lg shadow-lg">
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-xs">MacBook Pro</div>
                        <div className="text-xs mt-1">Dashboard</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Mac
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                Employees do their best when they have the best devices to work. Mac can be more affordable with less cost of ownership as compared to other devices. It is also compatible with your organization's existing ecosystem and can help you reduce your IT expenses.
              </p>
            </motion.div>

            {/* iPhone Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              {/* iPhone Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-40 bg-gray-300 rounded-lg shadow-lg">
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-green-500 rounded flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-xs">iPhone</div>
                        <div className="text-xs mt-1">Office</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                iPhone
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                Give the power of remote working and flexibility to your employees with Apple iPhones. Collaborate with your team on Keynote presentations, stay connected with FaceTime, Messages, and Mail.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Apple Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* iPad Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            {/* iPad Image */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-48 h-64 bg-gray-300 rounded-lg shadow-lg">
                  <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-xs">iPad Pro</div>
                      <div className="text-xs mt-1">Productivity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              iPad
            </h4>
            
            <p className="text-gray-600 leading-relaxed">
              Apple iPads are designed for powerful performance that can outperform most other laptops in the market. iPads are used by many industries in India like pharma, auto, healthcare, retail, manufacturing and many more because of their unmatched performance and applications' compatibility.
            </p>
          </motion.div>

          {/* Apple Watch Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            {/* Apple Watch Image */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gray-300 rounded-full shadow-lg">
                  <div className="absolute inset-2 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-xs">Apple</div>
                      <div className="text-xs mt-1">Watch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Apple Watch
            </h4>
            
            <p className="text-gray-600 leading-relaxed">
              Your employees will always stay connected with Apple watch. They can handle notifications with a single tap, reply to emails/messages and get the most out of apps for work and their health.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
