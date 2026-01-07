"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network, Shield, Zap, Globe, Server, Cpu, Wifi, Router } from 'lucide-react';

export default function NetworkingOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Wifi,
      title: "Indoor WiFi Access Points",
      description: "High-performance indoor WiFi access points with WiFi 6/6E technology for optimal coverage and capacity in office environments.",
      delay: 0.1
    },
    {
      icon: Globe,
      title: "Outdoor WiFi Access Points",
      description: "Weatherproof outdoor WiFi access points with extended range coverage for outdoor environments and challenging locations.",
      delay: 0.2
    },
    {
      icon: Network,
      title: "Network Switches",
      description: "Layer 2 and Layer 3 managed network switches with PoE support for scalable and secure network infrastructure.",
      delay: 0.3
    },
    {
      icon: Router,
      title: "Enterprise Routers",
      description: "High-performance routers with advanced security features, VPN support, and intelligent traffic management.",
      delay: 0.4
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive security features including firewalls, VLAN support, and advanced threat protection for secure networking.",
      delay: 0.5
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Advanced QoS, load balancing, and traffic optimization for maximum network performance and reliability.",
      delay: 0.6
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Network
            <span className="block text-blue-600">Infrastructure Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive networking solutions provide indoor and outdoor WiFi Access Points, 
            network switches, and routers designed to deliver enterprise-grade performance, 
            security, and reliability for modern business environments.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Network Architecture Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Network Infrastructure Components</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures optimal performance, security, and scalability with industry-leading products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">WiFi Access Points</h4>
              <p className="text-sm text-gray-600">Indoor & Outdoor coverage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Network Switches</h4>
              <p className="text-sm text-gray-600">Layer 2 & Layer 3</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Router className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise Routers</h4>
              <p className="text-sm text-gray-600">High-performance routing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Security Features</h4>
              <p className="text-sm text-gray-600">Advanced protection</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Explore Our Network Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
