"use client";
import React from 'react';

export default function VideoSurveillanceTechnologies() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            CMS & VMS <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage advanced CMS and VMS technologies to deliver comprehensive video surveillance management 
            solutions that meet the most demanding security and operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              CMS & VMS Core Technologies
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: '🏢',
                  title: 'Central Management System (CMS)',
                  description: 'Advanced CMS technology for centralized control of multiple video surveillance servers and locations.',
                  specs: ['Multi-server Management', 'Centralized Control', 'Unified Dashboard', 'Scalable Architecture']
                },
                {
                  icon: '📹',
                  title: 'Video Management System (VMS)',
                  description: 'Professional VMS with TRASSIR interface for comprehensive video surveillance management.',
                  specs: ['TRASSIR Interface', 'Live Monitoring', 'Video Recording', 'Professional Tools']
                },
                {
                  icon: '🌐',
                  title: 'Web & Mobile Access',
                  description: 'User-friendly web interface and mobile applications for remote access and monitoring.',
                  specs: ['Web Interface', 'Mobile Apps', 'Remote Access', '24/7 Monitoring']
                }
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h4>
                      <p className="text-gray-600 mb-4">{tech.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tech.specs.map((spec, specIndex) => (
                          <span key={specIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Advanced CMS & VMS Features
            </h3>
            <div className="space-y-6">
              {[
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
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-1">
                        {feature.features.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
