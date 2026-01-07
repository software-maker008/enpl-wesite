"use client";
import React from 'react';

export default function SoftwareAutomationServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Software & Automation <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to ongoing support, we provide comprehensive software development 
            and automation services that transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '💻',
              title: 'Custom Software Development',
              description: 'Tailored applications designed specifically for your business needs, workflows, and industry requirements.',
              features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
            },
            {
              icon: '🤖',
              title: 'Process Automation',
              description: 'Intelligent automation solutions that streamline repetitive tasks and improve operational efficiency.',
              features: ['Workflow Automation', 'RPA Solutions', 'Business Process Optimization', 'Smart Workflows']
            },
            {
              icon: '📱',
              title: 'Digital Transformation',
              description: 'End-to-end digital solutions that modernize your business operations and customer experience.',
              features: ['Legacy System Modernization', 'Cloud Migration', 'Digital Workflows', 'Customer Portals']
            },
            {
              icon: '🔧',
              title: 'System Integration',
              description: 'Seamless integration of new software with existing systems and third-party applications.',
              features: ['API Integration', 'Data Synchronization', 'Third-party Connectors', 'Middleware Solutions']
            },
            {
              icon: '📊',
              title: 'Business Intelligence',
              description: 'Advanced analytics and reporting solutions that provide insights for better decision-making.',
              features: ['Data Analytics', 'Custom Dashboards', 'Reporting Systems', 'KPI Monitoring']
            },
            {
              icon: '🛡️',
              title: 'Quality Assurance',
              description: 'Comprehensive testing and quality assurance to ensure reliable and secure software solutions.',
              features: ['Automated Testing', 'Security Audits', 'Performance Testing', 'User Acceptance Testing']
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
