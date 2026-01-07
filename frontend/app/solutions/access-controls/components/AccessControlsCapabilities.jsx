"use client";
import React from 'react';

export default function AccessControlsCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Access Controls <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive access control solutions provide secure, intelligent, and scalable 
            security systems that protect your premises and personnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🔐',
              title: 'Biometric Authentication',
              description: 'Advanced fingerprint, facial recognition, and iris scanning for secure access control.',
              features: ['Fingerprint Recognition', 'Facial Recognition', 'Iris Scanning', 'Multi-factor Auth']
            },
            {
              icon: '🚪',
              title: 'Smart Lock Systems',
              description: 'Intelligent electronic locks with remote control and access management capabilities.',
              features: ['Electronic Locks', 'Remote Control', 'Access Management', 'Audit Trails']
            },
            {
              icon: '👤',
              title: 'Visitor Management',
              description: 'Comprehensive visitor registration, tracking, and temporary access solutions.',
              features: ['Visitor Registration', 'Temporary Access', 'Escort Management', 'Check-in/out']
            },
            {
              icon: '📱',
              title: 'Mobile Access',
              description: 'Smartphone-based access control with NFC and Bluetooth technology.',
              features: ['Mobile Apps', 'NFC Technology', 'Bluetooth Access', 'Digital Keys']
            },
            {
              icon: '🔄',
              title: 'Integration Systems',
              description: 'Seamless integration with CCTV, alarm systems, and building management.',
              features: ['CCTV Integration', 'Alarm Systems', 'Building Management', 'Centralized Control']
            },
            {
              icon: '🛡️',
              title: 'Security & Compliance',
              description: 'Enterprise-grade security with compliance standards and audit capabilities.',
              features: ['Data Encryption', 'Compliance Standards', 'Audit Logs', 'Access Reports']
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
