"use client";
import React from 'react';

export default function SoftwaresServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Software <span className="text-blue-600">Services</span>
          </h2>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto space-y-2">
            <p className="font-semibold">
              From Idea to Execution — Complete Software Development Expertise
            </p>
            <p>
              From initial consultation to post-deployment support, Electrohelps Networks delivers end-to-end software development solutions that transform your business operations, improve efficiency, and drive measurable growth.              Our software services cover every stage of modern application development — from ideation to implementation — ensuring that your business has the technology foundation needed to scale with confidence.

            </p>
          </div>
        </div>

        <div className="space-y-12">
          {/* <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Software Solutions
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our software services cover every stage of modern application development — from ideation to implementation — ensuring that your business has the technology foundation needed to scale with confidence.
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Requirements Analysis',
                description: 'Detailed assessment of your business needs to identify technical goals, system architecture, and functionality requirements.',
                features: [
                  'Process mapping and requirement documentation',
                  'Feasibility and risk assessment',
                  'Stakeholder analysis'
                ]
              },
              {
                icon: '🧭',
                title: 'Design & Planning',
                description: 'Strategic blueprinting for software design and architecture aligned with your business objectives.',
                features: [
                  'UI/UX design and prototyping',
                  'System architecture & database modeling',
                  'Agile sprint planning'
                ]
              },
              {
                icon: '⚙️',
                title: 'Development & Testing',
                description: 'Robust, scalable, and secure application development using the latest frameworks and testing methodologies.',
                features: [
                  'Full-stack development (Frontend, Backend, APIs)',
                  'Unit, integration & performance testing',
                  'Continuous Integration / Deployment (CI/CD)'
                ]
              },
              {
                icon: '🚀',
                title: 'Deployment & Support',
                description: 'Seamless deployment across environments with reliable post-launch maintenance and technical assistance.',
                features: [
                  'Cloud deployment (AWS / Azure / GCP)',
                  'System monitoring and version control',
                  '24×7 maintenance and feature updates'
                ]
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.features && (
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
