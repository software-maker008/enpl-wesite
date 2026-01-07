"use client";
import React from 'react';

export default function CloudComputingServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Cloud & Computing <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to ongoing support, we provide end-to-end cloud computing solutions 
            that transform your infrastructure and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Comprehensive Cloud Solutions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our cloud computing services encompass every aspect of modern infrastructure, ensuring your business 
                has the computing power and flexibility needed to scale and innovate.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '🔍',
                  title: 'Infrastructure Assessment',
                  description: 'Comprehensive analysis of your current infrastructure and cloud migration requirements.'
                },
                {
                  icon: '📐',
                  title: 'Strategic Planning',
                  description: 'Custom cloud strategy aligned with your business objectives and growth plans.'
                },
                {
                  icon: '🚀',
                  title: 'Migration & Setup',
                  description: 'Professional deployment of cloud solutions with minimal business disruption.'
                },
                {
                  icon: '🔄',
                  title: 'Optimization & Support',
                  description: 'Continuous monitoring and optimization for peak cloud performance.'
                }
              ].map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Cloud Solutions?</h3>
              <div className="space-y-4">
                {[
                  'Industry-leading expertise in cloud technologies',
                  'Proven track record of successful deployments',
                  '24/7 monitoring and support services',
                  'Scalable solutions that grow with your business',
                  'Compliance with international standards',
                  'Cost-effective implementation strategies'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
