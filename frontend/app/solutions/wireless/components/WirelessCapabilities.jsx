"use client";
import React from 'react';

export default function WirelessCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise WiFi <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive WiFi solutions from leading manufacturers, offering WiFi 5, WiFi 6, and WiFi 7 
            technologies tailored for different business environments and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🏢',
              title: 'NETGEAR Business WiFi',
              description: 'Best overall enterprise Wi-Fi solution with high-speed connectivity up to 6 Gbps and comprehensive management features.',
              features: ['WiFi 6 Technology', 'WPA3 Encryption', 'Remote Management', 'Advanced Analytics']
            },
            {
              icon: '🌐',
              title: 'Ubiquiti UniFi',
              description: 'Best for small to medium businesses with license-free software and extensive hardware selection.',
              features: ['License-free Software', 'Visual Management', 'Scalable Architecture', 'Cost-effective']
            },
            {
              icon: '🛡️',
              title: 'Sophos Wireless',
              description: 'Best for mixed device environments with adaptive nature and seamless integration capabilities.',
              features: ['Mixed Device Support', 'Centralized Management', 'Fast Transition', 'Security Integration']
            },
            {
              icon: '⚡',
              title: 'Cisco Meraki MR',
              description: 'Best for challenging enterprise environments with self-configuring deployment and advanced security.',
              features: ['Self-configuring', '802.11ax MU-MIMO', 'Advanced Security', 'AI/ML Analytics']
            },
            {
              icon: '🔄',
              title: 'HPE Aruba WLAN',
              description: 'Best for hybrid environments with Wi-Fi 6/6E support and AI-powered network operations.',
              features: ['WiFi 6/6E Support', 'AI-powered Operations', 'Cloud Management', 'IoT Ready']
            },
            {
              icon: '📊',
              title: 'WiFi Technology Standards',
              description: 'Comprehensive support for WiFi 5, WiFi 6, and WiFi 7 technologies across all solutions.',
              features: ['WiFi 5 (802.11ac)', 'WiFi 6 (802.11ax)', 'WiFi 7 (802.11be)', 'Future-proof Technology']
            }
          ].map((capability, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {capability.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {capability.description}
              </p>
              <ul className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
