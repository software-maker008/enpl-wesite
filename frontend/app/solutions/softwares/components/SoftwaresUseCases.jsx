"use client";
import React from 'react';

export default function SoftwaresUseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Software <span className="text-blue-600">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our software solutions are transforming businesses across various industries 
            and creating new opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🏢',
              title: 'Enterprise Management',
              description: 'Custom ERP and business management systems for large organizations.',
              benefits: ['Process Automation', 'Data Integration', 'Reporting Systems', 'Workflow Management']
            },
            {
              icon: '🏪',
              title: 'E-commerce Platforms',
              description: 'Custom online shopping platforms with advanced features and integrations.',
              benefits: ['Payment Processing', 'Inventory Management', 'Customer Analytics', 'Mobile Apps']
            },
            {
              icon: '🏥',
              title: 'Healthcare Systems',
              description: 'HIPAA-compliant healthcare management and patient care applications.',
              benefits: ['Patient Records', 'Appointment Scheduling', 'Billing Systems', 'Telemedicine']
            },
            {
              icon: '🏫',
              title: 'Educational Technology',
              description: 'Learning management systems and educational software solutions.',
              benefits: ['Course Management', 'Student Tracking', 'Assessment Tools', 'Collaboration']
            },
            {
              icon: '🏭',
              title: 'Manufacturing Software',
              description: 'Production planning and quality control software for manufacturing.',
              benefits: ['Production Planning', 'Quality Control', 'Inventory Management', 'Analytics']
            },
            {
              icon: '🏗️',
              title: 'Project Management',
              description: 'Custom project management and collaboration tools for teams.',
              benefits: ['Task Management', 'Team Collaboration', 'Resource Planning', 'Progress Tracking']
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
