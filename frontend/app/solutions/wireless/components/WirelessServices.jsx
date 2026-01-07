"use client";
import React from 'react';

export default function WirelessServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our WiFi <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From WiFi assessment to implementation and ongoing support, we provide comprehensive WiFi services 
            using enterprise-grade solutions from leading manufacturers for optimal performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Comprehensive WiFi Solutions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our WiFi services encompass every aspect of enterprise wireless connectivity, ensuring your business 
                has the infrastructure needed to support modern applications and devices with optimal performance.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '🔍',
                  title: 'WiFi Assessment & Planning',
                  description: 'Comprehensive analysis of your current WiFi infrastructure and requirements for optimal solution selection.'
                },
                {
                  icon: '📐',
                  title: 'Solution Design & Selection',
                  description: 'Custom WiFi strategy with the right manufacturer solution (NETGEAR, Ubiquiti, Sophos, Cisco, HPE Aruba) for your needs.'
                },
                {
                  icon: '🚀',
                  title: 'WiFi Implementation',
                  description: 'Professional deployment of enterprise WiFi solutions with minimal business disruption.'
                },
                {
                  icon: '🔄',
                  title: 'Ongoing Support & Optimization',
                  description: 'Continuous monitoring, maintenance, and optimization for peak WiFi performance.'
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
              <h3 className="text-2xl font-bold mb-6">Why Choose Our WiFi Solutions?</h3>
              <div className="space-y-4">
                {[
                  'Leading manufacturer partnerships (NETGEAR, Ubiquiti, Sophos, Cisco, HPE Aruba)',
                  'WiFi 5, WiFi 6, and WiFi 7 technology expertise',
                  'Enterprise-grade security and management features',
                  'Scalable solutions for any business size',
                  '24/7 support and monitoring services',
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
