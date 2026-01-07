"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, Shield, TrendingUp, Zap, CheckCircle, Clock, Wrench } from 'lucide-react';

export default function OnsiteSupportBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    {
      icon: MapPin,
      title: "Local Presence",
      description: "Immediate response with engineers available in your area",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Hands-on Support",
      description: "Direct physical access to resolve complex hardware issues",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Verified solutions with thorough testing and documentation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Preventive Maintenance",
      description: "Regular visits to prevent issues before they occur",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Fast Resolution",
      description: "Quick problem identification and resolution on-site",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Wrench,
      title: "Expert Knowledge",
      description: "Certified technicians with specialized equipment",
      color: "from-teal-500 to-green-500"
    }
  ];

  const stats = [
    { number: "2-4hrs", label: "Response Time" },
    { number: "100%", label: "Issue Resolution" },
    { number: "24/7", label: "Emergency Support" },
    { number: "5+", label: "Cities Covered" }
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Benefits of Support Service
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the advantages of having our expert technicians always available to minimize IT related issues.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {React.createElement(benefit.icon, { size: 28, className: "text-white" })}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Onsite Support Performance
            </h3>
            <p className="text-gray-600">
              Numbers that demonstrate our commitment to excellence in onsite services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Service Guarantee */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle size={32} className="text-green-200" />
              <h3 className="text-2xl font-bold">Service Guarantee</h3>
            </div>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              We guarantee that all onsite support issues will be resolved during our visit, or we'll return at no additional cost until the problem is completely solved.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
