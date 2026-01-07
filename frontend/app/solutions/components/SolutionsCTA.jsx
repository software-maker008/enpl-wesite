'use client';
import React, { useEffect, useRef, useState } from 'react';

const SolutionsCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%)] bg-[length:50px_50px] animate-grid-flow" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/10 rounded-full animate-float-slow blur-xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full animate-float-slow delay-1000 blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-400/10 rounded-full animate-float-slow delay-2000 blur-xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
              Infrastructure?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of enterprises that trust our solutions to drive growth, 
            enhance security, and accelerate digital transformation. Let's build your 
            future together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold text-lg overflow-hidden min-w-[250px]">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Start Your Journey
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            
            <button className="group relative border-2 border-white/30 text-white px-10 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-semibold text-lg min-w-[250px] backdrop-blur-sm">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Schedule a Consultation
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: '🚀',
                title: 'Quick Deployment',
                description: 'Get up and running in days, not months'
              },
              {
                icon: '💎',
                title: 'Premium Support',
                description: '24/7 expert assistance when you need it'
              },
              {
                icon: '🔒',
                title: 'Enterprise Security',
                description: 'Bank-grade protection for your data'
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <div className="space-y-3 text-blue-100">
                <p>📧 solutions@enpl.com</p>
                <p>📞 +1 (800) 266-2515</p>
                <p>🌐 www.enpl.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Office Location</h3>
              <p className="text-blue-100">
                B Wing, 602, Lotus Corporate Park<br />
                Graham Firth Compound, Off. Express Highway<br />
                Goregaon East, Mumbai - 400063, India
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 35s linear infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default SolutionsCTA;
