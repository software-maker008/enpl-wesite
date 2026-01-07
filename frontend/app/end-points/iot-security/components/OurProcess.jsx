"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, Eye, TrendingUp, CheckCircle } from 'lucide-react';

export default function OurProcess() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Assessment",
      description: "Thorough analysis of your current security posture and vulnerabilities.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      icon: Settings,
      title: "Implementation",
      description: "Deployment of robust endpoint protection solutions tailored to your needs.",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      icon: Eye,
      title: "Monitoring & Management",
      description: "Continuous real-time monitoring for threats and suspicious activities.",
      color: "from-green-500 to-green-600"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Reporting & Optimization",
      description: "Regular updates, fine-tuning, and reporting to enhance security posture.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
            <Settings size={16} className="mr-2" />
            OUR APPROACH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Approach to Endpoint Security
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive four-step process to secure and protect your endpoints
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full border border-gray-100">
                {/* Number */}
                <div className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-4`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {React.createElement(step.icon, { className: "w-10 h-10 text-white" })}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

