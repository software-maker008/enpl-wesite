"use client";
import React from 'react';

export default function ITConsultingServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-2xl mr-2"></span>
            Our IT Consulting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial evaluation to sustained performance improvement, our consulting services cover every stage of your IT journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '⚙️',
              title: 'Infrastructure Optimization',
              description: 'Optimize your infrastructure for efficiency, scalability, and cost-effectiveness.',
              features: ['Structured Cabling & Rack Design Audit', 'Power & Cooling Optimization Guidance', 'Network Segmentation & Resource Planning', 'Lifecycle Replacement Planning']
            },
            {
              icon: '🌐',
              title: 'Network Assessment',
              description: 'Comprehensive network evaluation to identify optimization opportunities and improve performance.',
              features: ['LAN/WAN Audit & Optimization', 'Bandwidth Utilization Analysis', 'Routing & Switching Review', 'Wireless & Passive Infra Validation']
            },
            {
              icon: '📶',
              title: 'Wi-Fi Heatmapping & Site Survey',
              description: 'Professional wireless planning and analysis for optimal coverage and performance.',
              features: ['Predictive & Physical Survey', 'Access Point Planning & Signal Validation', 'Channel Interference & Capacity Review', 'Coverage Maps & Implementation Report']
            },
            {
              icon: '📊',
              title: 'Application Performance',
              description: 'Monitor and optimize application performance for better user experience and availability.',
              features: ['Server & App Monitoring', 'Log Analysis & Performance Metrics', 'User Experience Tracking', 'Availability & SLA Optimization']
            },
            {
              icon: '🧱',
              title: 'Disaster Recovery & Backup',
              description: 'Protect your business operations with comprehensive backup and recovery strategies.',
              features: ['Risk Assessment & Policy Planning', 'Data Protection & Retention Strategy', 'Cloud/Local Backup Solutions', 'Minimal Downtime Assurance']
            },
            {
              icon: '🔒',
              title: 'Security Assessment',
              description: 'Comprehensive security evaluation to protect your infrastructure and ensure compliance.',
              features: ['Vulnerability Assessment & Risk Analysis', 'Firewall & Network Policy Review', 'Security Implementation & Training', 'Compliance Readiness (ISO, SOC, GDPR)']
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
