"use client";
import React from 'react';

export default function VideoSurveillanceServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our CMS & VMS <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From CMS installation to VMS configuration, we provide comprehensive video surveillance management solutions 
            that transform your security infrastructure with centralized control and intelligent monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Comprehensive CMS & VMS Solutions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our CMS and VMS services provide centralized management and professional video surveillance capabilities, 
                ensuring your security infrastructure operates at peak efficiency with intelligent monitoring and control.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '🏢',
                  title: 'CMS Installation & Configuration',
                  description: 'Professional installation of Central Management System on dedicated servers with up to 5000 server connections.'
                },
                {
                  icon: '📹',
                  title: 'VMS Setup & Integration',
                  description: 'Complete Video Management System setup with professional TRASSIR interface and web/mobile access.'
                },
                {
                  icon: '🌐',
                  title: 'Cloud Access Setup',
                  description: 'Configure web and mobile interfaces for remote access from anywhere in the world.'
                },
                {
                  icon: '🔄',
                  title: 'System Monitoring & Support',
                  description: '24/7 monitoring, technical support, and system optimization for peak performance.'
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
              <h3 className="text-2xl font-bold mb-6">Why Choose Our CMS & VMS Solutions?</h3>
              <div className="space-y-4">
                {[
                  'Centralized management of multiple locations',
                  'Professional TRASSIR VMS interface',
                  'User-friendly web and mobile access',
                  'Free technical support included',
                  'Scalable from 300 to 5000+ servers',
                  'Direct camera connection capabilities'
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
