"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Apple, CheckCircle } from 'lucide-react';

export default function AppleProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const appleProducts = [
    {
      title: "Mac",
      image: "/electronic-devices images/laptop.png",
      description: "Employees do their best when they have the best devices to work. Mac can be more affordable with less cost of ownership as compared to other devices.",
      features: ["Lower TCO", "Enterprise Integration", "Premium Performance", "Secure by Design"]
    },
    {
      title: "iPhone",
      image: "/electronic-devices images/laptop1.png",
      description: "Give the power of remote working and flexibility to your employees with Apple iPhones. Collaborate with your team on Keynote presentations.",
      features: ["Remote Work Ready", "Seamless Collaboration", "Business Apps", "Enterprise Security"]
    },
    {
      title: "iPad",
      image: "/electronic-devices images/tablet.png",
      description: "Apple iPads are designed for powerful performance that can outperform most other laptops in the market.",
      features: ["Industry-Leading Performance", "Multi-Industry Use", "App Ecosystem", "Portable Power"]
    },
    {
      title: "Apple Watch",
      image: "/electronic-devices images/laptop.png",
      description: "Your employees will always stay connected with Apple watch. Handle notifications with a single tap.",
      features: ["Always Connected", "Quick Notifications", "Health Tracking", "Productivity Apps"]
    }
  ];

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
            <Apple size={16} className="mr-2" />
            APPLE ECOSYSTEM
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apple <span className="bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium devices designed for enterprise productivity and collaboration
          </p>
        </motion.div>

        {/* Apple Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {appleProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Product Image Section */}
              <div className="bg-white p-8 border-b border-gray-100">
                <div className="flex justify-center items-center h-48">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="max-w-full max-h-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Product Details Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {product.description}
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-700 bg-slate-50 p-3 rounded-lg">
                      <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
