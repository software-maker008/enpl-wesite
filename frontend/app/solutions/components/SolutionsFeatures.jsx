'use client';
import React, { useEffect, useRef, useState } from 'react';

const SolutionsFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols and compliance standards to protect your data and infrastructure.',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100'
    },
    {
      icon: '📈',
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, from startup to enterprise, without performance degradation.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Optimized for speed and efficiency, ensuring minimal latency and maximum uptime.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: '🔄',
      title: '24/7 Support',
      description: 'Round-the-clock expert support and monitoring to keep your systems running smoothly.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Multi-region deployment options for optimal performance and compliance worldwide.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      icon: '🤝',
      title: 'Expert Consultation',
      description: 'Access to industry experts and certified professionals for strategic guidance.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100'
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
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:35px_35px] animate-grid-flow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Why Choose Our Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the key advantages that make our enterprise solutions the preferred choice for forward-thinking organizations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${feature.color.split('-')[1]}-300 group-hover:shadow-2xl transition-all duration-500`} />
              
              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-float-1" />
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-float-2" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 animate-float-slow`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex justify-end">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl`} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '100+', label: 'Enterprise Clients' },
                { number: '99.9%', label: 'Uptime SLA' },
                { number: '24/7', label: 'Support Coverage' },
                { number: '15+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center transform hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(35px, 35px); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-8px) rotate(180deg) scale(1.2); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-6px) rotate(-180deg) scale(1.1); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 25s linear infinite;
        }
        
        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SolutionsFeatures;
