"use client";
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import Clients from '../components/Clients';
import LetsGetInTouch from '../components/LetsGetInTouch';
import Link from 'next/link';

const solutions = [
    {
    title: 'Wireless Solutions',
      icon: '/solutions/wifi.png',
    link: '/solutions/wireless',
    description: 'Reliable, high-speed wireless connectivity for enterprise and industrial applications.',
    services: [
      'Wireless LAN (Indoor/Outdoor Wi-Fi)',
      'Wireless Mesh & Hotspot Solutions',
      'Captive Portal & Voucher-based Access',
      'Managed Wi-Fi for Businesses',
      'Industrial IoT Wi-Fi Deployments'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    iconBg: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Networking',
      icon: '/solutions/networking.png',
    link: '/solutions/networking',
    description: 'End-to-end enterprise network design, management, and optimization.',
    services: [
      'Routing & Switching (LAN/WAN)',
      'Firewall, IDS & UTM Solutions',
      'WAN Optimization & Load Balancing',
      'VPN (Site-to-Site & Remote Access)',
      'Network Monitoring (NMS)',
      'Software-Defined Networking (SDN)',
      'Zero-Trust Network Access (ZTNA)'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    iconBg: 'from-purple-400 to-purple-500'
  },
  {
    title: 'Telephony',
      icon: '/solutions/mobile.png',
    link: '/solutions/telephony',
    description: 'Unified communication systems for modern enterprises.',
    services: [
      'IP PBX & VoIP Solutions',
      'On-Premises & Cloud PBX',
      'SIP Trunking & Gateway Integration',
      'Video & Audio Conferencing',
      'IVR & Auto-Attendant Systems',
      'Call Recording & Reporting Analytics'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    iconBg: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Video Surveillance',
      icon: '/solutions/cctv.png',
    link: '/solutions/video-surveillance',
    description: 'AI-powered video monitoring and analytics for safety and intelligence.',
    services: [
      'Analog & IP CCTV Solutions',
      'Video Analytics with AI/ML',
      'Cloud-Based Remote Monitoring',
      'NVR/DVR Configuration & Backup',
      'Integrated Access & Alarm Control',
      'Smart Perimeter Security'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    iconBg: 'from-green-400 to-green-500'
  },
  {
    title: 'Access Control',
      icon: '/solutions/password-code.png',
    link: '/solutions/access-controls',
    description: 'Intelligent security and attendance automation for enterprises.',
    services: [
      'RFID & Smart Card Systems',
      'Biometric Authentication (Face, Fingerprint, Palm)',
      'Elevator & Parking Access Control',
      'Visitor Management Systems',
      'Time & Attendance Tracking',
      'HR/Payroll Integration'
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
    iconBg: 'from-indigo-400 to-indigo-500'
  },
  {
    title: 'Cloud & Computing',
      icon: '/solutions/cloud-server.png',
    link: '/solutions/cloud-computing',
    description: 'Enterprise-grade cloud infrastructure and virtualization services.',
    services: [
      'Cloud Infrastructure (IaaS, PaaS, SaaS)',
      'Virtualization & High-Performance Servers',
      'Cloud Migration & Optimization',
      'Backup & Disaster Recovery',
      'Hybrid & Multi-Cloud Deployments',
      'Managed Cloud Services'
    ],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'from-cyan-50 to-cyan-100',
    iconBg: 'from-cyan-400 to-cyan-500'
  },
  {
    title: 'Software Solutions',
      icon: '/solutions/app-development.png',
    link: '/solutions/softwares',
    description: 'Custom business software to streamline operations and drive growth.',
    services: [
      'ERP & CRM Software',
      'HRMS & Payroll Management',
      'Inventory & Supply Chain Solutions',
      'Web & Mobile App Development',
      'Security & Compliance Software',
      'Custom SaaS Solutions'
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    iconBg: 'from-orange-400 to-orange-500'
  },
  {
    title: 'Computers & Peripherals',
    icon: '/solutions/computers.png',
    link: '/end-points/laptops-desktops-mobile',
    description: 'Reliable, high-performance hardware for professional environments.',
    services: [
      'Laptops, Desktops & Workstations',
      'Enterprise Servers & Storage Solutions',
      'Networking Equipment & Cables',
      'Printers, UPS & Accessories',
      'Professional Audio/Video Systems',
      'IT Infrastructure Setup & AMC'
    ],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100',
    iconBg: 'from-emerald-400 to-emerald-500'
  },
];

export default function SolutionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Banner - Premium Style */}
      <section 
        ref={heroRef}
        className="relative min-h-[89vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-12"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow animation-delay-4000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>

        {/* Floating Icons */}
        <div className="absolute top-32 left-32 text-6xl text-blue-300 opacity-30 animate-float-slow">
          ⚡
        </div>
        <div className="absolute top-48 right-48 text-5xl text-purple-300 opacity-30 animate-float-slow animation-delay-1000">
          🌐
        </div>
        <div className="absolute bottom-32 left-1/3 text-4xl text-indigo-300 opacity-30 animate-float-slow animation-delay-3000">
          📡
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                IT Solutions
              </span>
          </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-4xl mx-auto leading-relaxed font-semibold">
              Innovative Infrastructure. Smarter Networks. Reliable Performance.
            </p>
            
            <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with comprehensive technology solutions designed for scalability, performance, and reliability.
              From wireless networking and telephony to cloud infrastructure, cybersecurity, and enterprise software,
              we deliver end-to-end solutions that keep your business connected, secure, and future-ready.
            </p>

          </div>
        </div>
      </section>

      {/* Solutions Cards Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 animate-fade-in-up">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Best-in-Class Solutions and Services for Your Business
            </h2>
            <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up delay-200">
              Explore the full suite of technology solutions designed to simplify operations and enhance productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {solutions.map((sol, i) => (
                <div key={sol.title} className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl px-6 md:px-8 py-6 md:py-8 transition-all duration-700 animate-sol-fade-in-up overflow-hidden hover:z-20 cursor-pointer premium-card h-full">
                  {/* Subtle glass highlight on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/5 backdrop-blur-sm pointer-events-none transition-all duration-500" />

                  {/* Soft border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 pointer-events-none transition-all duration-500" />

                  {/* Faint particle accents */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                  <div className="particle" style={{ top: '6%', right: '4%', width: 10, height: 10 }} />
                  <div className="particle" style={{ bottom: '8%', left: '6%', width: 6, height: 6 }} />
                  <div className="particle" style={{ top: '48%', right: '12%', width: 8, height: 8 }} />
                </div>

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-white shadow-md ring-0 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl transition-all duration-500`}>
                      <img
                        src={sol.icon}
                        alt={sol.title}
                        className="w-12 h-12 object-contain transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                      />
                  </div>
                </div>

                  {/* Title */}
                  <div className="relative z-10 mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-center text-gray-800 transition-transform duration-300">
                      {sol.title}
                    <span className="block h-0.5 bg-gradient-to-r from-black/10 to-black/20 w-10 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-24" />
                  </h3>
                </div>

                  {/* Services List */}
                  <div className="relative z-10 space-y-2">
                    {sol.services.map((service, serviceIndex) => (
                      <div
                        key={service}
                        className="flex items-start space-x-3 transition-all duration-350 transform group-hover:translate-x-1"
                        style={{ transitionDelay: `${serviceIndex * 40}ms` }}
                      >
                        <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-gray-300" />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium leading-tight">
                          {service}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Subtle hover sheen */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                  <div className="absolute -left-24 top-0 w-40 h-full transform -skew-x-12 bg-gradient-to-r from-white/12 via-white/6 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Partners />
        </div>
        
      {/* Clients Section */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Clients />
            </div>
            
      {/* Let's Get in Touch Section */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <LetsGetInTouch />
            </div>

      <Footer />
      
      <style jsx global>{`
        @keyframes sol-fade-in-up {
          0% { opacity: 0; transform: translateY(60px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-sol-fade-in-up {
          animation: sol-fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes float-slow { 
          0%,100%{transform:translateY(0)} 
          50%{transform:translateY(-3px)} 
        }
        .animate-float-slow { 
          animation: float-slow 6s ease-in-out infinite; 
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        /* Enhanced animation for delayed fade-in-up */
        @keyframes fade-in-up-delayed {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .particle {
          position: absolute;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), rgba(255,255,255,0.35));
          border-radius: 9999px;
          opacity: 0.12;
          filter: blur(6px);
          transform: translateZ(0);
        }

        .animate-shine { 
          animation: shine 1.2s ease-in-out forwards; 
        }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 0.45 }
          100% { transform: translateX(140%) skewX(-12deg); opacity: 0; }
        }

        .group:hover { 
          /* no-op: avoid global group hover side effects */
        }
        .premium-card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        /* Premium gradient animation */
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        /* Floating elements animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Pulse glow animation */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.6); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Slide in from right */
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </>
  );
}
