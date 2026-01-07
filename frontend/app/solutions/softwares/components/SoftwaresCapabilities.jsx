"use client";
import React from 'react';

export default function SoftwaresCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Software <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Software Expertise for Modern Businesses. Our cutting-edge software capabilities span across enterprise systems, integrations, mobile platforms, and web technologies.
            We ensure your business operates efficiently, securely, and seamlessly — from backend infrastructure to user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '💼',
              title: 'Enterprise Applications',
              description: 'Custom-built enterprise software designed to streamline business processes and improve productivity.',
              features: ['Business Logic Automation', 'User & Role Management', 'Advanced Reporting Systems', 'ERP & CRM Integration', 'Workflow Management']
            },
            {
              icon: '🧩',
              title: 'Custom Development',
              description: 'Tailored application development built using the latest frameworks and industry best practices.',
              features: ['Modern Frameworks (React, NestJS, Node.js, .NET)', 'API-Driven Architecture', 'Code Quality Assurance', 'Performance Optimization', 'Scalable Infrastructure']
            },
            {
              icon: '🔧',
              title: 'System Integration',
              description: 'Seamless integration between legacy systems, modern APIs, and third-party platforms.',
              features: ['API Development & Management', 'Data Migration & Synchronization', 'Cloud & On-Premise Interoperability', 'System Compatibility Checks', 'Real-Time Sync']
            },
            {
              icon: '📱',
              title: 'Mobile Applications',
              description: 'Cross-platform mobile apps built with native performance and responsive design for enhanced user engagement.',
              features: ['Android & iOS App Development', 'Progressive Web Apps (PWAs)', 'UI/UX Design & Branding', 'Offline Functionality', 'Push Notifications & Analytics']
            },
            {
              icon: '🌐',
              title: 'Web Applications',
              description: 'Modern, responsive, and cloud-ready web applications that deliver speed, scalability, and great user experiences.',
              features: ['Responsive & Adaptive Design', 'Cloud Deployment (AWS / Azure / GCP)', 'SEO Optimization & Analytics', 'Multi-Tenant Architecture', 'Performance & Load Monitoring']
            },
            {
              icon: '🔒',
              title: 'Security & Testing',
              description: 'Comprehensive testing and cybersecurity practices to ensure robust, compliant, and risk-free deployments.',
              features: ['Security Audits & Vulnerability Scans', 'Penetration Testing', 'Code Review & Version Control', 'Quality Assurance (Manual & Automated)', 'Compliance with ISO 27001 / GDPR']
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
