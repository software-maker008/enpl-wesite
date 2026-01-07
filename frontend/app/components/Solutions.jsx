'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';

const solutions = [
  {
    title: 'Wireless',
    icon: '/solutions/wifi.png',
    link: '/solutions/wireless',
    services: [
      'Wireless LAN (Indoor/Outdoor Wi-Fi)',
      'Wireless Mesh Networks',
      'Hotspot & Captive Portal Solutions',
      'Managed Wi-Fi for Enterprises',
      'WiFi Solutions for Industrial IoT'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    iconBg: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Networking',
    icon: '/solutions/networking.png',
    link: '/solutions/networking',
    services: [
      'Routing & Switching (LAN/WAN)',
      'Firewall & UTM Solutions',
      'WAN Optimization & Load Balancing',
      'Virtual Private Networks (VPNs)',
      'Network Monitoring & Management (NMS)',
      'Network Access Control (NAC)',
      'Software Defined Networking (SDN)'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    iconBg: 'from-purple-400 to-purple-500'
  },
  {
    title: 'Telephony',
    icon: '/solutions/mobile.png',
    link: '/solutions/telephony',
    services: [
      'IP Telephony & VoIP Solutions',
      'On-Premise & Cloud PBX',
      'Unified Communications (UC)',
      'SIP Trunking & Gateway Integration',
      'Video Conferencing Solutions',
      'IVR Systems & Auto Attendant'
    ],
  color: 'from-blue-500 to-blue-600',
  bgColor: 'from-blue-50 to-blue-100',
  iconBg: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Video Surveillance',
    icon: '/solutions/cctv.png',
    link: '/solutions/video-surveillance',
    services: [
      'CCTV (Analog & IP) Solutions',
      'Video Analytics & AI-Powered Monitoring',
      'Remote Monitoring & Cloud Storage',
      'Integrated Security Solutions',
      'Access Control & Intrusion Integration'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    iconBg: 'from-green-400 to-green-500'
  },
  {
    title: 'Access Control',
    icon: '/solutions/password-code.png',
    link: '/solutions/access-controls',
    services: [
      'Biometric Authentication Systems',
      'RFID & Smart Card Solutions',
      'Face Recognition Terminals',
      'Multi-Door Access Control Panels',
      'Elevator & Parking Access Solutions',
      'Time & Attendance Systems',
      'Visitor Management Solutions',
      'Integration with HR/Payroll Systems'
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
    iconBg: 'from-indigo-400 to-indigo-500'
  },
  {
    title: 'Cloud & Computing',
    icon: '/solutions/cloud-server.png',
    link: '/solutions/cloud-computing',
    services: [
      'Cloud Infrastructure (IaaS, PaaS, SaaS)',
      'Virtualization & Hyperconverged Solutions',
      'Cloud Migration & Optimization',
      'Hybrid & Multi-Cloud Architecture',
      'Backup & Disaster Recovery (DRaaS)',
      'High-Performance Servers & Storage',
      'Managed Cloud Services'
    ],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'from-cyan-50 to-cyan-100',
    iconBg: 'from-cyan-400 to-cyan-500'
  },
  {
    title: 'Softwares',
    icon: '/solutions/app-development.png',
    link: '/solutions/softwares',
    services: [
      'ERP & CRM Solutions',
      'Inventory & Supply Chain Management',
      'HR & Payroll Software',
      'Wi-Fi & Network Management Portals',
      'Security & Surveillance Software',
      'Shipping & Logistics Applications',
      'Mobile & Web App Development',
      'Custom Software Development'
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    iconBg: 'from-orange-400 to-orange-500'
  },
  {
    title: 'Computers & Peripherals',
    icon: '/solutions/computers.png',
    link: '/end-points/laptops-desktops-mobile',
    services: [
      'Laptops & Desktop Computers',
      'Workstations & Servers',
      'High-Performance Computing Solutions',
      'Computer Accessories & Peripherals',
      'Storage Devices & Backup Solutions',
      'Networking Equipment & Cables',
      'Professional Audio/Video Equipment',
    ],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100',
    iconBg: 'from-emerald-400 to-emerald-500'
  },
  {
    title: 'Industrial Automation',
    icon: '/solutions/automation.png',
    link: '/solutions/industrial-automation',
    services: [
      'PLC & SCADA Systems',
      'Industrial IoT (IIoT) Solutions',
      'Robotics & Motion Control',
      'Process Automation & Control',
      'Machine Vision & Quality Control',
      'Energy Management Systems',
      'Predictive Maintenance Solutions',
      'Smart Factory Integration'
    ],
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100',
    iconBg: 'from-red-400 to-red-500'
  },
    // {
    //   title: 'Cloud Migration',
    //   icon: '/main-images/migration-icon.png',
    //   services: [
    //     'Assessment',
    //     'Planning',
    //     'Execution',
    //     'Seamless Adoption',
    //     'Post-Migration Support'
    //   ],
    //   color: 'from-teal-500 to-teal-600',
    //   bgColor: 'from-teal-50 to-teal-100',
    //   iconBg: 'from-teal-400 to-teal-500'
    // }
];

const Solutions = () => {
  const swiperRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Handle mouse enter - pause autoplay
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  // Handle mouse leave - resume autoplay
  const handleMouseLeave = () => {
    setIsPaused(false);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-8">
      <div className="w-full px-0">
        <div className="text-center mb-4 px-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up text-glow premium-hover">
            Best in class Solutions and Services for your business
          </h2>
          <p className="text-base md:text-lg text-gray-600 animate-fade-in-up delay-200">
            Explore what else we can do for you
          </p>
        </div>
        
        <div 
          className="relative mb-4 pb-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            onSwiper={swiper => (swiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
               480: { slidesPerView: 1, spaceBetween: 0 },
               640: { slidesPerView: 2, spaceBetween: 20 },
               768: { slidesPerView: 2, spaceBetween: 24 },
               1024: { slidesPerView: 3, spaceBetween: 24 },
               1280: { slidesPerView: 4, spaceBetween: 24 },
               1536: { slidesPerView: 5, spaceBetween: 24 },
             }}
            autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.solutions-swiper-pagination' }}
            modules={[Autoplay, Pagination]}
            className="w-full pb-8"
          >
                         {solutions.map((sol, i) => (
               <SwiperSlide key={sol.title} className="mx-0 sm:mx-1 mb-8">
                <Link href="/solutions">
                  <div
                    className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 h-[340px] sm:h-[530px] md:h-[580px] w-full transition-all duration-700 animate-sol-fade-in-up overflow-hidden hover:z-20 cursor-pointer premium-card"
                    style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                  >
                  {/* Subtle glass highlight on hover (premium look) */}
                  <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/5 backdrop-blur-sm pointer-events-none transition-all duration-500" />

                  {/* Soft border + vignette */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 pointer-events-none transition-all duration-500" />

                  {/* Faint particle accents (desaturated, low opacity) */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                    <div className="particle" style={{ top: '6%', right: '4%', width: 10, height: 10 }} />
                    <div className="particle" style={{ bottom: '8%', left: '6%', width: 6, height: 6 }} />
                    <div className="particle" style={{ top: '48%', right: '12%', width: 8, height: 8 }} />
                  </div>

                  {/* Icon Container - elevated ring + lift on hover */}
                  <div className="relative z-10 mb-4 sm:mb-6 md:mb-8">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto flex items-center justify-center rounded-xl sm:rounded-2xl bg-white shadow-md ring-0 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl transition-all duration-500`}>
                      <img
                        src={sol.icon}
                        alt={sol.title}
                        className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Title with sliding underline */}
                  <div className="relative z-10 mb-3 sm:mb-4 md:mb-6">
                    <h3 className={`text-base sm:text-lg md:text-xl font-bold text-center text-gray-800 transition-transform duration-300 text-glow`}>
                      {sol.title}
                      <span className="block h-0.5 bg-gradient-to-r from-black/10 to-black/20 w-10 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-24" />
                    </h3>
                  </div>

                  {/* Services List - refined bullets and subtle reveal */}
                  <div className="relative z-10 space-y-1.5 sm:space-y-2 md:space-y-3">
                    {sol.services.map((service, serviceIndex) => (
                      <div
                        key={service}
                        className="flex items-start space-x-3 transition-all duration-350 transform group-hover:translate-x-1"
                        style={{ transitionDelay: `${serviceIndex * 40}ms` }}
                      >
                        <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-gray-300" />
                        <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 font-medium leading-tight">
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
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Enhanced Pagination */}
          <div className="solutions-swiper-pagination flex justify-center mt-12 mb-4" />
        </div>
        
        {/* CTA Button */}
        {/* <div className="flex justify-center mt-16">
          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden">
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">View all features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div> */}
      </div>
      
      <style jsx global>{`
        @keyframes sol-fade-in-up {
          0% { opacity: 0; transform: translateY(60px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-sol-fade-in-up {
          animation: sol-fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.35 }
          50% { transform: translateY(-6px) rotate(180deg) scale(1.05); opacity: 0.65 }
        }
        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.25 }
          50% { transform: translateY(-4px) scale(1.03); opacity: 0.55 }
        }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3 }
          50% { transform: translateY(-8px) scale(1.08); opacity: 0.6 }
        }
        .animate-float-3 { animation: float-3 6s ease-in-out infinite; }

        @keyframes float-slow { 0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)} }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

        @keyframes pulse-slow { 0%,100%{opacity:0.7;transform:scale(1)}50%{opacity:1;transform:scale(1.06)} }
        .animate-pulse-slow { animation: pulse-slow 3.5s ease-in-out infinite; }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
  .solutions-swiper-pagination { position: static !important; margin-top: 2rem !important; margin-bottom: 4rem !important; }
        .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: #dbeafe;
          opacity: 1;
          margin: 0 8px !important;
          transition: all 0.3s ease;
          border-radius: 50%;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
        }
        
        /* Enhanced hover effects (premium glass + lift) */
        .premium-card:hover { transform: translateY(-10px) scale(1.02); }

        /* particle style */
        .particle {
          position: absolute;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), rgba(255,255,255,0.35));
          border-radius: 9999px;
          opacity: 0.12;
          filter: blur(6px);
          transform: translateZ(0);
        }

        /* sheen animation */
        .animate-shine { animation: shine 1.2s ease-in-out forwards; }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 0.45 }
          100% { transform: translateX(140%) skewX(-12deg); opacity: 0; }
        }

        /* subtle transitions override for premium feel */
        * { transition-timing-function: cubic-bezier(0.2,0.9,0.3,1); }
        
        /* Gradient text support */
        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default Solutions; 