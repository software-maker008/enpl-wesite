"use client";
import React from 'react';

export default function TelephonyCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Telecom & Telephony <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive telecom and telephony solutions cover every aspect of modern communication infrastructure, 
            ensuring seamless integration between traditional and IP-based systems with advanced security and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '📞',
              title: 'Fixed Media Gateways',
              description: 'Vital components facilitating seamless integration of traditional PSTN and ISDN infrastructure with IP-based communication solutions.',
              features: ['PSTN Integration', 'ISDN Support', 'Circuit-switched Conversion', 'IP Packet Conversion']
            },
            {
              icon: '🌐',
              title: 'Multi-Network Integration',
              description: 'Seamless connectivity between PSTN, VoIP (SIP), and GSM/3G/4G networks for comprehensive communication coverage.',
              features: ['PSTN Connectivity', 'VoIP/SIP Support', 'GSM/3G/4G Integration', 'Network Bridging']
            },
            {
              icon: '🔗',
              title: 'Seamless Interoperability',
              description: 'Seamless integration with third-party PBXs, servers, and hardware systems to utilize existing infrastructure.',
              features: ['Third-party PBX Integration', 'Server Compatibility', 'Hardware Integration', 'Legacy System Support']
            },
            {
              icon: '📊',
              title: 'Dynamic Call Management',
              description: 'Implement features like Least Cost Routing (LCR), Time-based routing, and Number translation for efficient call management.',
              features: ['Least Cost Routing', 'Time-based Routing', 'Number Translation', 'Call Optimization']
            },
            {
              icon: '🛡️',
              title: 'Secure Communication',
              description: 'SRTP and TLS protocols for end-to-end encryption, protecting voice communication from unauthorized access.',
              features: ['SRTP Encryption', 'TLS Security', 'End-to-end Protection', 'Access Control']
            },
            {
              icon: '🎧',
              title: 'Customer Support Services',
              description: 'Comprehensive customer support services with advanced call center features and workforce management.',
              features: ['Call Center Solutions', 'Customer Service', 'Support Analytics', 'Workforce Management']
            }
          ].map((capability, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {capability.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {capability.description}
              </p>
              <ul className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
