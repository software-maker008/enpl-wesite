"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Wrench, Server, Network, Users, Database, CheckCircle, Clock } from 'lucide-react';

export default function OnsiteSupportServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "Hardware Installation",
      description: "Professional installation and setup of servers, workstations, networking equipment, and other IT hardware components at your location.",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      title: "Network Setup",
      description: "Complete network infrastructure setup including cabling, switch configuration, router setup, and wireless network deployment.",
      icon: Network,
      color: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      title: "Maintenance & Repair",
      description: "Regular maintenance visits, hardware repairs, software troubleshooting, and system optimization performed on-site by certified technicians.",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      delay: 0.3
    },
    {
      title: "Emergency Support",
      description: "24/7 emergency onsite support for critical system failures, network outages, and urgent technical issues requiring immediate attention.",
      icon: Clock,
      color: "from-red-500 to-orange-500",
      delay: 0.4
    },
    {
      title: "Training & Consultation",
      description: "On-site training sessions for your staff on new systems, software, and best practices for IT infrastructure management.",
      icon: Users,
      color: "from-indigo-500 to-blue-500",
      delay: 0.5
    },
    {
      title: "Infrastructure Audit",
      description: "Comprehensive on-site assessment of your IT infrastructure, security systems, and recommendations for improvements and optimization.",
      icon: Database,
      color: "from-teal-500 to-green-500",
      delay: 0.6
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 blur-3xl" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-float-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
       <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional technical support delivered remotely and directly to your location by certified engineers with comprehensive expertise and modern tools.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {React.createElement(service.icon, { size: 32, className: "text-white" })}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Coverage Areas */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Service Coverage Areas
          </h3>
          
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden"> */}
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-indigo-200 blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <MapPin size={28} className="text-white" />
                <h4 className="text-2xl font-bold">Available in All Metro Cities</h4>
              </div> */}
              
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Pune", "Ahmedabad"].map((city, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    <span className="text-white font-medium">{city}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
