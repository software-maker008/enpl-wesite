"use client";
import React from 'react';

export default function VideoSurveillanceUseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            CMS & VMS <span className="text-blue-600">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our Central Management System (CMS) and Video Management System (VMS) solutions 
            are transforming security across various industries with centralized control and intelligent monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🏢',
              title: 'Multi-Location Enterprises',
              description: 'Centralized management of video surveillance across multiple office locations with unified CMS control.',
              benefits: ['Centralized Control', 'Multi-site Monitoring', 'Unified Dashboard', 'Cost Reduction']
            },
            {
              icon: '🏭',
              title: 'Large-Scale Manufacturing',
              description: 'Professional VMS with CMS integration for comprehensive production floor monitoring and safety compliance.',
              benefits: ['Production Monitoring', 'Safety Compliance', 'Centralized Management', 'Real-time Alerts']
            },
            {
              icon: '🏥',
              title: 'Healthcare Facilities',
              description: 'HIPAA-compliant CMS and VMS solutions for patient safety and facility security across multiple buildings.',
              benefits: ['Patient Safety', 'HIPAA Compliance', 'Multi-building Control', 'Emergency Response']
            },
            {
              icon: '🏫',
              title: 'Educational Campuses',
              description: 'Campus-wide video surveillance management with CMS for centralized control of multiple buildings.',
              benefits: ['Campus Security', 'Centralized Control', 'Student Safety', 'Emergency Management']
            },
            {
              icon: '🏪',
              title: 'Retail Chains',
              description: 'Chain-wide surveillance management with CMS for loss prevention and customer safety across all locations.',
              benefits: ['Loss Prevention', 'Chain Management', 'Customer Safety', 'Centralized Monitoring']
            },
            {
              icon: '🏗️',
              title: 'Construction Projects',
              description: 'Temporary CMS setup for construction site security with mobile VMS access for project managers.',
              benefits: ['Site Security', 'Mobile Access', 'Project Monitoring', 'Equipment Protection']
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
