"use client";
import React from 'react';

export default function CloudComputingCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cloud & Computing <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive cloud computing solutions cover every aspect of modern infrastructure, 
            ensuring your business has the computing power and flexibility needed to scale and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '☁️',
              title: 'Cloud Infrastructure',
              description: 'Scalable cloud infrastructure with auto-scaling and load balancing capabilities.',
              features: ['Auto Scaling', 'Load Balancing', 'High Availability', 'Global Distribution']
            },
            {
              icon: '💻',
              title: 'Virtual Machines',
              description: 'High-performance virtual machines with customizable configurations and management.',
              features: ['Custom Configurations', 'Resource Management', 'Performance Monitoring', 'Backup & Recovery']
            },
            {
              icon: '🚀',
              title: 'Auto Scaling',
              description: 'Intelligent auto-scaling based on demand and performance metrics.',
              features: ['Demand-based Scaling', 'Performance Metrics', 'Cost Optimization', 'Predictive Scaling']
            },
            {
              icon: '🔒',
              title: 'Security & Compliance',
              description: 'Enterprise-grade security with encryption, authentication, and compliance standards.',
              features: ['Data Encryption', 'Identity Management', 'Compliance Standards', 'Threat Detection']
            },
            {
              icon: '💾',
              title: 'Data Management',
              description: 'Comprehensive data storage, backup, and management solutions for business continuity.',
              features: ['Data Backup', 'Storage Solutions', 'Data Recovery', 'Database Management']
            },
            {
              icon: '📊',
              title: 'Monitoring & Analytics',
              description: 'Comprehensive monitoring and analytics for performance optimization.',
              features: ['Real-time Monitoring', 'Performance Analytics', 'Cost Tracking', 'Alert Systems']
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
