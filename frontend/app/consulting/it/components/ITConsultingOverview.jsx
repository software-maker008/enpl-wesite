"use client";
import React from 'react';

export default function ITConsultingOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-2xl mr-2"></span>
            IT Consulting Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We specialize in infrastructure consulting, compliance management, wireless planning, and performance optimization, helping enterprises implement efficient, reliable, and future-ready IT ecosystems.             Our consulting practice covers key areas to help you achieve operational excellence and reduce technology overheads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: '🏗️',
              title: 'Passive Infrastructure Consulting',
              description: 'Design and assess structured cabling, fiber backbones, rack layouts, and power management systems for reliable network infrastructure.'
            },
            {
              icon: '⚡',
              title: 'Infrastructure Consolidation & Optimization',
              description: 'Rationalize and modernize your IT infrastructure—covering networks, servers, and software—to improve efficiency and lower costs.'
            },
            {
              icon: '📶',
              title: 'Wi-Fi Heatmapping & Coverage Analysis',
              description: 'Conduct professional heatmap analysis for Wi-Fi performance planning, ensuring optimal signal strength and coverage before deployment.'
            },
            {
              icon: '🔍',
              title: 'Pre-installation Site Survey',
              description: 'On-site analysis for environmental, electrical, and layout planning—ensuring correct access point placement and structured network readiness.'
            },
            {
              icon: '🔄',
              title: 'Disaster Recovery & Backup Planning',
              description: 'Design robust recovery strategies and backup policies to protect critical business operations.'
            },
            {
              icon:'💻',
              title:'IT Software Consulting',
              description:'We provide comprehensive software consulting services to help you optimize your software infrastructure and improve your business operations.'
            }
          ].map((feature, index) => (
            <div 
                  key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{feature.icon}</span>
                    </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h4>
                      <p className="text-gray-600 leading-relaxed">
                {feature.description}
                      </p>
                    </div>
          ))}
        </div>
      </div>
    </section>
  );
}
