"use client";
import React from 'react';

export default function ITConsultingBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-2xl mr-2"></span>
            Benefits of IT Consulting Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our consulting services enable smarter, leaner, and more resilient IT environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Increased Efficiency',
              description: 'Faster processing, streamlined workflows, and 24/7 optimized operations.',
              benefits: []
            },
            {
              icon: '💰',
              title: 'Cost Reduction',
              description: 'Lower IT expenses with improved utilization and maintenance planning.',
              benefits: []
            },
            {
              icon: '📈',
              title: 'Business Growth',
              description: 'Scalable IT foundations to support expansion and performance.',
              benefits: []
            },
            {
              icon: '🎯',
              title: 'Improved Accuracy',
              description: 'Consistent network and infrastructure outcomes through data-driven decisions.',
              benefits: []
            },
            {
              icon: '🔐',
              title: 'Enhanced Security',
              description: 'Stronger defenses via preventive assessment and compliance frameworks.',
              benefits: []
            },
            {
              icon: '🚀',
              title: 'Competitive Advantage',
              description: 'Stay ahead through innovation, reliable connectivity, and proactive consulting.',
              benefits: []
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {benefit.description}
              </p>
              {benefit.benefits && benefit.benefits.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide text-center">KEY BENEFITS:</h4>
                  <ul className="space-y-1">
                    {benefit.benefits.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
        </div>
              )}
            </div>
          ))}
          </div>
      </div>
    </section>
  );
}
