"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Shield, CheckCircle, TrendingUp, Clock, Wrench } from 'lucide-react';

export default function OnsiteSupportCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      description: "+91 98765 43210",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Service Requests",
      description: "onsite@ENPL.com",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      description: "All Metro Cities in India",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const features = [
    "Professional Certified Engineers",
    "Specialized Tools & Equipment",
    "24/7 Emergency Response",
    "Guaranteed Issue Resolution",
    "Comprehensive Documentation",
    "Follow-up Support"
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Schedule Onsite Support</h2>
              <p className="text-green-100 mb-8">
                Need immediate technical assistance at your location? Schedule an onsite visit today!
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Contact Person"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Service Address"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>

                <div>
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option value="" className="text-gray-800">Select Service Type</option>
                    <option value="emergency" className="text-gray-800">Emergency Support</option>
                    <option value="maintenance" className="text-gray-800">Preventive Maintenance</option>
                    <option value="installation" className="text-gray-800">Hardware Installation</option>
                    <option value="network" className="text-gray-800">Network Setup</option>
                    <option value="training" className="text-gray-800">Staff Training</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    placeholder="Describe your technical issue or service requirement..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Schedule Visit
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Contact Info & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get Onsite Support</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}>
                      {React.createElement(info.icon, { size: 24, className: "text-white" })}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-green-100">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div>
              <h3 className="text-2xl font-bold mb-6">What We Provide</h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                    <span className="text-green-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Response Time Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock size={24} className="text-yellow-400" />
                <h4 className="font-semibold">Response Time Guarantee</h4>
              </div>
              <p className="text-green-100 text-sm">
                Emergency support: 2-4 hours<br/>
                Regular maintenance: 24-48 hours<br/>
                Scheduled visits: As per appointment
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
