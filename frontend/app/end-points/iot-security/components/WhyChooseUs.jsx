"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, Clock, Users, CheckCircle, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    {
      title: "Expertise & Experience",
      icon: Award,
      points: [
        "Years of experience in cybersecurity",
        "Certified security professionals",
        "Proven track record of protecting businesses"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Comprehensive Solutions",
      icon: Layers,
      points: [
        "Tailored security strategies",
        "Integration with existing IT infrastructure",
        "Scalable solutions for growing businesses"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "24/7 Support",
      icon: Clock,
      points: [
        "Round-the-clock monitoring",
        "Rapid incident response",
        "Dedicated support team"
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  const benefits = [
    "Complete Endpoint Security Overview",
    "Protection from Malicious Software",
    "Secure Access Control",
    "Professional Support When Needed",
    "Real-Time Threat Detection & Response",
    "Automated Security Updates & Patches",
  ];

  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose Our Endpoint Protection?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect your business from evolving cyber threats
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Advantages Grid */}
          <div className="space-y-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(advantage.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{advantage.title}</h3>
                    <ul className="space-y-2">
                      {advantage.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Business Advantages</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-gray-200"
                >
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <span className="font-medium text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

