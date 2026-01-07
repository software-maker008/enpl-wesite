"use client";
import React from 'react';

export default function CloudComputingUseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cloud & Computing <span className="text-blue-600">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our cloud computing solutions are transforming businesses across various industries 
            and creating new opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🏢',
              title: 'Enterprise Businesses',
              description: 'Scalable cloud infrastructure for large organizations with global operations.',
              benefits: ['Global Scalability', 'Cost Optimization', 'High Availability', 'Security Compliance']
            },
            {
              icon: '🏭',
              title: 'Manufacturing',
              description: 'Cloud-based manufacturing systems with IoT integration and real-time analytics.',
              benefits: ['IoT Integration', 'Real-time Analytics', 'Predictive Maintenance', 'Supply Chain Optimization']
            },
            {
              icon: '🏥',
              title: 'Healthcare',
              description: 'HIPAA-compliant cloud solutions for patient data and medical applications.',
              benefits: ['HIPAA Compliance', 'Patient Data Security', 'Medical Applications', 'Telemedicine Support']
            },
            {
              icon: '🏫',
              title: 'Education',
              description: 'Cloud-based learning platforms and educational technology infrastructure.',
              benefits: ['Learning Platforms', 'Student Management', 'Collaborative Tools', 'Remote Learning']
            },
            {
              icon: '🏪',
              title: 'E-commerce',
              description: 'Scalable e-commerce platforms with high-performance cloud infrastructure.',
              benefits: ['High Performance', 'Auto Scaling', 'Global CDN', 'Payment Security']
            },
            {
              icon: '🏗️',
              title: 'Startups & SMEs',
              description: 'Cost-effective cloud solutions for growing businesses and startups.',
              benefits: ['Cost Effective', 'Quick Deployment', 'Flexible Scaling', 'Professional Support']
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
