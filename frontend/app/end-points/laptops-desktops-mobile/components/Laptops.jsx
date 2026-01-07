"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Laptop, Cpu, HardDrive, Zap, CheckCircle } from 'lucide-react';

export default function Laptops() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const laptopProducts = [
    {
      title: "Enterprise Laptops",
      image: "/electronic-devices images/laptop.png",
      description: "These low-cost laptops are relatively low-powered, but capable of general computing tasks such as web browsing, email and general word processing. They can handle most basic multimedia tasks (e.g. standard definition video streaming) and are best suited to regular office use.",
      features: ["Intel Core i3/i5", "8GB RAM", "256GB SSD", "14-15 inch Display"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "High End Laptops for Power Users",
      image: "/electronic-devices images/laptop1.png",
      description: "If you want something to give you the processing power of a desktop computer while being transportable with relative ease, look for a powerful (preferably latest-generation) processor and plenty of RAM (at least 16GB). Thanks to its 360-degree hinge, the 2-in-1 convertible laptops quickly switches between laptop, tablet, tent, and stand modes.",
      features: ["Intel Core i7/i9", "16-32GB RAM", "512GB-1TB SSD", "2-in-1 Convertible"],
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
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
            <Laptop size={16} className="mr-2" />
            LAPTOP DEVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enterprise <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Laptops</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional computing solutions designed for modern business needs
          </p>
        </motion.div>
        
        {/* Laptop Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {laptopProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              {/* Product Image Section */}
              <div className="relative bg-white p-8 overflow-hidden border-b border-gray-100">
                <div className="relative z-10 flex justify-center items-center h-64">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Floating Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${product.color} px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg`}>
                  Premium Quality
                </div>
              </div>
              
              {/* Product Details Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Zap size={16} className="text-blue-600 mr-2" />
                    Key Specifications:
                  </div>
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className={`w-full py-3 bg-gradient-to-r ${product.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
