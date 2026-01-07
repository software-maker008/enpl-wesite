"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wifi, Shield, Zap, Globe, Server, Cpu, Router, Network, Database, Cloud, BarChart3, Users } from 'lucide-react';

export default function NetworkingSolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const solutions = [
    {
      icon: Wifi,
      title: "Indoor WiFi Access Points",
      description: "High-performance indoor WiFi access points with WiFi 6/6E technology, advanced security features, and seamless roaming capabilities.",
      benefits: ["WiFi 6/6E Technology", "High-density support", "Seamless roaming", "Advanced security"],
      delay: 0.1
    },
    {
      icon: Globe,
      title: "Outdoor WiFi Access Points",
      description: "Weatherproof outdoor WiFi access points with extended range coverage, designed for challenging outdoor environments.",
      benefits: ["Weatherproof design", "Extended range", "Outdoor durability", "High performance"],
      delay: 0.2
    },
    {
      icon: Network,
      title: "Network Switches",
      description: "Layer 2 and Layer 3 managed network switches with PoE support, VLAN capabilities, and advanced management features.",
      benefits: ["PoE support", "VLAN support", "Layer 2/3 switching", "Centralized management"],
      delay: 0.3
    },
    {
      icon: Router,
      title: "Enterprise Routers",
      description: "High-performance routers with advanced security features, VPN support, QoS, and intelligent traffic management.",
      benefits: ["Advanced security", "VPN support", "QoS features", "Traffic management"],
      delay: 0.4
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive security features including firewalls, threat detection, access control, and network segmentation.",
      benefits: ["Firewall protection", "Threat detection", "Access control", "Network segmentation"],
      delay: 0.5
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Advanced QoS, load balancing, traffic optimization, and monitoring tools for maximum network performance.",
      benefits: ["QoS optimization", "Load balancing", "Traffic optimization", "Performance monitoring"],
      delay: 0.6
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-20"
        ></motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-100 rounded-full opacity-20"
        ></motion.div>
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
            Professional Network
            <span className="block text-blue-600">Infrastructure Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive range of networking products includes indoor and outdoor WiFi Access Points, 
            network switches, and enterprise routers designed for reliable, secure, and high-performance networking.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: solution.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                  
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Network Infrastructure</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built on industry-leading technology and proven expertise in networking infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Performance</h4>
              <p className="text-gray-600">Tested in enterprise environments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-gray-600">24/7 technical assistance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Implementation</h4>
              <p className="text-gray-600">Quick deployment and setup</p>
            </div>
          </div>
        </motion.div>


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Request Solution Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
