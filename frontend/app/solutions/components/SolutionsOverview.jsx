'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const SolutionsOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const solutionCategories = [
    {
      title: 'Monitoring Solutions',
      description: 'Comprehensive IT infrastructure monitoring with Zabbix',
      icon: '📊',
      color: 'from-blue-500 to-blue-600',
      href: '/solutions/monitoring',
      features: ['Real-time monitoring', 'Custom dashboards', 'Advanced alerting']
    },
    {
      title: 'Security Solutions',
      description: 'Enterprise-grade cybersecurity and threat protection',
      icon: '🔒',
      color: 'from-red-500 to-red-600',
      href: '/solutions/security',
      features: ['Endpoint protection', 'Network security', 'Threat detection']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      icon: '☁️',
      color: 'from-purple-500 to-purple-600',
      href: '/solutions/cloud',
      features: ['Cloud migration', 'Multi-cloud management', 'DevOps automation']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics',
      icon: '🤖',
      color: 'from-green-500 to-green-600',
      href: '/solutions/ai',
      features: ['Predictive analytics', 'Process automation', 'Data insights']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:25px_25px] animate-grid-flow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Comprehensive Solution Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our full range of enterprise solutions designed to transform your business infrastructure 
            and accelerate digital transformation
          </p>
        </div>

        {/* Solution Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutionCategories.map((category, index) => (
            <Link href={category.href} key={category.title}>
              <div
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-100 hover:border-gray-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-all duration-700`} />
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${category.color.split('-')[1]}-300 transition-all duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-3xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 animate-float-slow`}>
                      {category.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div 
                        key={feature}
                        className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} animate-pulse`} />
                        <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-end">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Solutions */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of experts can design and implement tailored solutions that perfectly match your unique business requirements and infrastructure needs.
            </p>
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold overflow-hidden">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Discuss Your Requirements
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(25px, 25px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SolutionsOverview;
