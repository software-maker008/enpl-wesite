"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, DollarSign, Clock, Shield, Users, Zap, BarChart3, Target } from 'lucide-react';

export default function NetworkingBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Faster network speeds and reliable connectivity boost employee productivity by up to 40%.",
      metric: "40%",
      metricLabel: "Productivity Boost",
      delay: 0.1
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Optimized network infrastructure reduces operational costs and improves ROI significantly.",
      metric: "35%",
      metricLabel: "Cost Savings",
      delay: 0.2
    },
    {
      icon: Clock,
      title: "Faster Response Times",
      description: "Reduced latency and improved bandwidth ensure critical applications respond instantly.",
      metric: "60%",
      metricLabel: "Faster Response",
      delay: 0.3
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced security measures protect against cyber threats and ensure compliance.",
      metric: "99.9%",
      metricLabel: "Security Rate",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Seamless connectivity and consistent performance improve customer and employee satisfaction.",
      metric: "95%",
      metricLabel: "User Satisfaction",
      delay: 0.5
    },
    {
      icon: Zap,
      title: "Scalable Growth",
      description: "Flexible architecture supports business growth without major infrastructure changes.",
      metric: "10x",
      metricLabel: "Scalability",
      delay: 0.6
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tangible
            <span className="block text-blue-600">Business Benefits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our networking solutions deliver measurable improvements that directly impact 
            your bottom line and operational efficiency.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: benefit.delay }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{benefit.metric}</div>
                  <div className="text-sm text-gray-600 font-medium">{benefit.metricLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Calculate Your Network ROI</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              See how our networking solutions can transform your business performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$50K+</div>
              <div className="text-blue-100">Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3-6</div>
              <div className="text-blue-100">Month Payback</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-blue-100">ROI Average</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Uptime</div>
            </div>
          </div>
        </motion.div> */}

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Success Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Goal Achievement</h4>
              <p className="text-sm text-gray-600">Exceed expectations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance Gains</h4>
              <p className="text-sm text-gray-600">Measurable improvements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Growth Support</h4>
              <p className="text-sm text-gray-600">Scalable solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Risk Mitigation</h4>
              <p className="text-sm text-gray-600">Proactive protection</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Get Your ROI Analysis
          </button>
        </motion.div>
      </div>
    </section>
  );
}
