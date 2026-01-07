"use client";
import React from 'react';

export default function TelephonyServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Telecom & Telephony <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From telecom infrastructure setup to customer support services, we provide comprehensive solutions 
            that transform your business communication infrastructure with reliability and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Comprehensive Telecom Solutions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our telecom and telephony services encompass every aspect of modern communication infrastructure, ensuring your business 
                has the reliable connectivity needed to support customer interactions and internal operations.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '🔍',
                  title: 'Telecom Infrastructure Assessment',
                  description: 'Comprehensive analysis of your current telecom infrastructure and communication requirements.'
                },
                {
                  icon: '📐',
                  title: 'Gateway Installation & Configuration',
                  description: 'Professional installation of fixed media gateways with PSTN, ISDN, and VoIP integration.'
                },
                {
                  icon: '🚀',
                  title: 'Customer Support Setup',
                  description: 'Implementation of customer support services with call center solutions and workforce management.'
                },
                {
                  icon: '🔄',
                  title: 'Ongoing Support & Maintenance',
                  description: 'Continuous monitoring, maintenance, and optimization for peak telecom performance.'
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
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Telecom Solutions?</h3>
              <div className="space-y-4">
                {[
                  'Expertise in PSTN, ISDN, and VoIP technologies',
                  'Seamless integration with existing infrastructure',
                  'Advanced security with SRTP and TLS protocols',
                  '24/7 customer support and monitoring services',
                  'Cost-effective Least Cost Routing solutions',
                  'Reliable redundancy and failover mechanisms'
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
