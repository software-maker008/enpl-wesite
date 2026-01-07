"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Bug, FolderLock, Network, Usb, Cloud, BarChart3 } from 'lucide-react';

export default function KeyFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Threat Detection & Prevention",
      description: "Proactive identification and blocking of malware, ransomware, and phishing attacks in real-time.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous surveillance of endpoint activities for suspicious behavior and immediate alerts.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Bug,
      title: "Vulnerability Management",
      description: "Identification and remediation of software vulnerabilities before they can be exploited.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FolderLock,
      title: "Data Loss Prevention (DLP)",
      description: "Protection of sensitive data from unauthorized access or transfer across all endpoints.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Network,
      title: "Firewall Management",
      description: "Configurable firewall rules to control network traffic and prevent unauthorized access.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Usb,
      title: "Device Control",
      description: "Management of external device access to prevent data breaches and malware introduction.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Securing endpoints accessing cloud resources and applications with advanced security protocols.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Comprehensive reports on security posture and incident response with actionable insights.",
      color: "from-pink-500 to-pink-600"
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
            <Shield size={16} className="mr-2" />
            KEY FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Endpoint Protection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced security features designed to protect your endpoints from all types of cyber threats
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full border border-gray-100">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(feature.icon, { className: "w-8 h-8 text-white" })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

