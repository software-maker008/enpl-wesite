"use client";
import React from 'react';

export default function WirelessUseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            WiFi <span className="text-blue-600">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our enterprise WiFi solutions are transforming businesses across various industries 
            with reliable, high-performance wireless connectivity for modern applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🏢',
              title: 'Enterprise Offices',
              description: 'High-density WiFi solutions for corporate offices with seamless roaming and enterprise security.',
              benefits: ['Seamless Roaming', 'High Density', 'Enterprise Security', 'Guest Access']
            },
            {
              icon: '🏭',
              title: 'Manufacturing Facilities',
              description: 'Robust WiFi networks for industrial environments with IoT device connectivity and real-time monitoring.',
              benefits: ['Industrial Grade', 'IoT Connectivity', 'Real-time Monitoring', 'Reliable Coverage']
            },
            {
              icon: '🏥',
              title: 'Healthcare Facilities',
              description: 'HIPAA-compliant WiFi solutions for hospitals with medical device connectivity and patient monitoring.',
              benefits: ['HIPAA Compliance', 'Medical Device Support', 'Patient Monitoring', 'Emergency Systems']
            },
            {
              icon: '🏫',
              title: 'Educational Institutions',
              description: 'Campus-wide WiFi solutions for schools and universities with student device management and content filtering.',
              benefits: ['Campus Coverage', 'Device Management', 'Content Filtering', 'Student Access']
            },
            {
              icon: '🏪',
              title: 'Retail Environments',
              description: 'Customer-focused WiFi solutions for retail stores with analytics, guest access, and POS integration.',
              benefits: ['Customer Analytics', 'Guest WiFi', 'POS Integration', 'Inventory Management']
            },
            {
              icon: '🏗️',
              title: 'Construction Sites',
              description: 'Temporary WiFi solutions for construction projects with mobile access and project management tools.',
              benefits: ['Temporary Setup', 'Mobile Access', 'Project Management', 'Team Communication']
            }
          ].map((useCase, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Benefits:</h4>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {benefit}
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
