"use client";
import React from 'react';

export default function VideoSurveillanceCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            CMS & VMS <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced Central Management System (CMS) and Video Management System (VMS) provide comprehensive 
            video surveillance control, monitoring, and management capabilities for modern security infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🏢',
              title: 'Central Management System (CMS)',
              description: 'Comprehensive centralized control for managing multiple video surveillance servers and locations from a single interface.',
              features: ['Multi-location Management', 'Centralized Control', 'Server Monitoring', 'Unified Dashboard']
            },
            {
              icon: '📹',
              title: 'Video Management System (VMS)',
              description: 'Professional video surveillance interface with advanced recording, playback, and analytics capabilities.',
              features: ['Live Monitoring', 'Video Recording', 'Playback & Search', 'Professional Interface']
            },
            {
              icon: '🌐',
              title: 'Web & Mobile Access',
              description: 'User-friendly web interface and mobile applications accessible from anywhere in the world.',
              features: ['Web Interface', 'Mobile Apps', 'Remote Access', '24/7 Monitoring']
            },
            {
              icon: '📊',
              title: 'System Monitoring & Reporting',
              description: 'Continuous monitoring of video surveillance system status with comprehensive reporting capabilities.',
              features: ['Status Monitoring', 'Performance Reports', 'Alert Systems', 'Health Checks']
            },
            {
              icon: '👥',
              title: 'Unified User Management',
              description: 'Centralized user management with LDAP integration for secure access control across all systems.',
              features: ['User Management', 'LDAP Integration', 'Role-based Access', 'Security Controls']
            },
            {
              icon: '🔄',
              title: 'Direct Camera Connection',
              description: 'Connect cameras directly to CMS without requiring NVR, simplifying system architecture.',
              features: ['Direct Connection', 'Simplified Setup', 'Reduced Hardware', 'Cost Efficiency']
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
