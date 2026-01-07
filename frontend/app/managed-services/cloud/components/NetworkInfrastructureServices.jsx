"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function NetworkInfrastructureServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: "📊",
      title: "Performance Analysis",
      description: "Measure and analyze network performance metrics, such as network bandwidth, latency, packet loss, and throughput. Identify any performance issues or bottlenecks that may affect the network's efficiency and user experience. This information will be used to recommend changes to the network's configuration or hardware to improve performance.",
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-500"
    },
    {
      icon: "🛡️",
      title: "Security Assessment",
      description: "Scan your network for vulnerabilities and identify potential entry points for unauthorized access. Conduct penetration testing and vulnerability scanning to identify security gaps and weaknesses. Review network access controls and security configurations to ensure that they are up-to-date and effective. This information will be used to recommend changes to the network's security posture to improve its resilience to attacks.",
      bgColor: "bg-green-100",
      iconBg: "bg-green-500"
    },
    {
      icon: "🏆",
      title: "Quality of Service (QoS) Evaluation",
      description: "Assess the network's ability to prioritize and deliver different types of network traffic based on service levels. This is particularly important for voice and video traffic where delays or packet loss can significantly impact communication quality. Examine network configurations, traffic prioritization, and performance testing under load. Use this information to recommend changes for QoS improvement.",
      bgColor: "bg-yellow-100",
      iconBg: "bg-yellow-500"
    },
    {
      icon: "📋",
      title: "Documentation and Reporting",
      description: "Document the findings, recommendations, and any changes made to the network infrastructure. This documentation serves as a reference for troubleshooting, network management, and future planning. Provide a final report summarizing evaluation results, identified issues, and suggested improvements to stakeholders for informed decision-making.",
      bgColor: "bg-purple-100",
      iconBg: "bg-purple-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Our Network Infrastructure Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive assessment and optimization services to ensure your network infrastructure meets the highest standards of performance, security, and reliability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-3xl">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
