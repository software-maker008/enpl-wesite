"use client";
import React from 'react';

export default function SoftwareAutomationOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Software & Automation <span className="text-blue-600">Overview</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We specialize in creating intelligent software solutions and automation systems that transform 
            how businesses operate, improving efficiency, reducing costs, and driving innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Comprehensive Software & Automation Solutions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expertise spans across custom software development, process automation, and digital transformation. 
                We help businesses leverage technology to achieve operational excellence and competitive advantage.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '💻',
                  title: 'Custom Software Development',
                  description: 'Tailored applications designed specifically for your business needs and workflows.'
                },
                {
                  icon: '🤖',
                  title: 'Process Automation',
                  description: 'Intelligent automation solutions that streamline repetitive tasks and improve efficiency.'
                },
                {
                  icon: '📱',
                  title: 'Digital Transformation',
                  description: 'End-to-end digital solutions that modernize your business operations and customer experience.'
                },
                {
                  icon: '🔧',
                  title: 'System Integration',
                  description: 'Seamless integration of new software with existing systems and third-party applications.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
              <div className="space-y-4">
                {[
                  'Discovery & Requirements Analysis',
                  'Strategic Planning & Architecture Design',
                  'Agile Development & Testing',
                  'Deployment & Training',
                  'Ongoing Support & Optimization',
                  'Continuous Improvement & Updates'
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>{step}</span>
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
