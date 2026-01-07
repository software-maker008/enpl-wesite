"use client";
import React from 'react';

export default function TelephonyTechnologies() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Telecom & Telephony <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage advanced telecom technologies and protocols to deliver comprehensive solutions 
            that meet the most demanding business communication and customer support requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Telecom Core Technologies
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: '📞',
                  title: 'PSTN & ISDN Integration',
                  description: 'Traditional circuit-switched networks integrated with modern IP-based communication systems.',
                  specs: ['PSTN Connectivity', 'ISDN Support', 'Circuit-switched Conversion', 'Legacy Integration']
                },
                {
                  icon: '🌐',
                  title: 'VoIP & SIP Protocols',
                  description: 'Voice over IP and Session Initiation Protocol for modern communication infrastructure.',
                  specs: ['SIP Protocol', 'VoIP Technology', 'HD Audio Quality', 'Multi-codec Support']
                },
                {
                  icon: '🛡️',
                  title: 'Security Protocols',
                  description: 'Advanced security measures including SRTP and TLS for secure communication.',
                  specs: ['SRTP Encryption', 'TLS Security', 'Authentication', 'Access Control']
                }
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h4>
                      <p className="text-gray-600 mb-4">{tech.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tech.specs.map((spec, specIndex) => (
                          <span key={specIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Advanced Telecom Features
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: '📊',
                  title: 'Call Management',
                  description: 'Advanced call routing and management features for optimal communication efficiency.',
                  features: ['Least Cost Routing', 'Time-based Routing', 'Number Translation', 'Call Analytics']
                },
                {
                  icon: '🔄',
                  title: 'Multi-Network Integration',
                  description: 'Seamless integration between PSTN, VoIP, and GSM/3G/4G networks.',
                  features: ['PSTN Connectivity', 'VoIP/SIP Support', 'GSM/3G/4G Integration', 'Network Bridging']
                },
                {
                  icon: '🎧',
                  title: 'Customer Support Features',
                  description: 'Comprehensive customer support and call center management capabilities.',
                  features: ['Call Center Solutions', 'Customer Service', 'Support Analytics', 'Workforce Management']
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-1">
                        {feature.features.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
