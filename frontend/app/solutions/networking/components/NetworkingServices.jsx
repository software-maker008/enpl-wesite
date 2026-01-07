"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wifi, Shield, Zap, Globe, Server, Cpu, Router, Network, Database, Cloud } from 'lucide-react';

export default function NetworkingServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Wifi,
      title: "Indoor WiFi Access Points",
      description: "Professional indoor WiFi access points with WiFi 6/6E technology, advanced security features, and seamless roaming capabilities.",
      features: ["WiFi 6/6E Technology", "High-density support", "Seamless roaming", "Advanced security"],
      delay: 0.1
    },
    {
      icon: Globe,
      title: "Outdoor WiFi Access Points",
      description: "Weatherproof outdoor WiFi access points with extended range coverage, designed for challenging outdoor environments.",
      features: ["Weatherproof design", "Extended range", "Outdoor durability", "High performance"],
      delay: 0.2
    },
    {
      icon: Network,
      title: "Network Switches",
      description: "Layer 2 and Layer 3 managed network switches with PoE support, VLAN capabilities, and advanced management features.",
      features: ["PoE support", "VLAN support", "Layer 2/3 switching", "Centralized management"],
      delay: 0.3
    },
    {
      icon: Router,
      title: "Enterprise Routers",
      description: "High-performance routers with advanced security features, VPN support, QoS, and intelligent traffic management.",
      features: ["Advanced security", "VPN support", "QoS features", "Traffic management"],
      delay: 0.4
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive security features including firewalls, threat detection, access control, and network segmentation.",
      features: ["Firewall protection", "Threat detection", "Access control", "Network segmentation"],
      delay: 0.5
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Advanced QoS, load balancing, traffic optimization, and monitoring tools for maximum network performance.",
      features: ["QoS optimization", "Load balancing", "Traffic optimization", "Performance monitoring"],
      delay: 0.6
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
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
            Professional Network
            <span className="block text-blue-600">Infrastructure Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From indoor and outdoor WiFi Access Points to network switches and enterprise routers, 
            we provide comprehensive networking services that keep your business connected, secure, and competitive.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: service.delay }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Networks Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Expert Support</div>
            </div>
          </div>
        </motion.div>

        {/* Service Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Network Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Deployment</h4>
              <p className="text-sm text-gray-600">Quick implementation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise Security</h4>
              <p className="text-sm text-gray-600">Bank-level protection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Scalable Solutions</h4>
              <p className="text-sm text-gray-600">Grow with confidence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Technology</h4>
              <p className="text-sm text-gray-600">AI-powered insights</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Get Your Network Assessment
          </button>
        </motion.div>
      </div>
    </section>
  );
}
