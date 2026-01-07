import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function SupportServicesPage() {
  const services = [
    {
      title: "Remote Support",
      description: "24/7 remote technical assistance and troubleshooting",
      href: "/managed-services/support/remote",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Onsite Support",
      description: "Professional on-site technical support and maintenance",
      href: "/managed-services/support/onsite",
      icon: "👨‍💼",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: "🔄",
      title: "24/7 Availability",
      description: "Round-the-clock support to ensure your business never stops"
    },
    {
      icon: "⚡",
      title: "Fast Response",
      description: "Quick response times with guaranteed SLA commitments"
    },
    {
      icon: "🛡️",
      title: "Expert Team",
      description: "Certified IT professionals with years of experience"
    },
    {
      icon: "📱",
      title: "Multiple Channels",
      description: "Support via phone, email, chat, and remote access"
    },
    {
      icon: "📊",
      title: "Proactive Monitoring",
      description: "Preventive maintenance to avoid issues before they occur"
    },
    {
      icon: "🔧",
      title: "Comprehensive Solutions",
      description: "End-to-end support for all your IT infrastructure needs"
    }
  ];

  const benefits = [
    "Reduced downtime and improved productivity",
    "Cost-effective IT support solutions",
    "Scalable support as your business grows",
    "Regular system health checks and maintenance",
    "Compliance with industry standards",
    "Peace of mind knowing your IT is in expert hands"
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 blur-3xl" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float-slow" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '4s' }} />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Support Services
                </div>
                
                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Professional IT
                    <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      Support Services
                    </span>
                  </h1>
                </div>
                
                {/* Description */}
                <div className="space-y-6">
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Keep your business running smoothly with our comprehensive IT support services. 
                    From remote troubleshooting to on-site maintenance, we deliver solutions that minimize downtime and maximize productivity.
                  </p>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                      <span className="relative flex items-center space-x-3">
                        <span>Get Support Consultation</span>
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </Link>
                  
                  <a href="tel:+917718811771">
                    <button className="group px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold text-lg rounded-2xl hover:bg-blue-400 hover:text-white transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                      <span className="flex items-center space-x-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Call Now</span>
                      </span>
                    </button>
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">&lt;15min</div>
                    <div className="text-gray-300 text-sm">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
                    <div className="text-gray-300 text-sm">Issues Resolved</div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Support Capabilities Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-200 to-indigo-200 blur-3xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6">Why Choose Our Support Services?</h3>
                    <div className="space-y-4">
                      {[
                        '24/7 availability with guaranteed SLA commitments',
                        'Fast response times with certified IT professionals',
                        'Multiple support channels (phone, email, chat, remote)',
                        'Proactive monitoring and preventive maintenance',
                        'Comprehensive solutions for all IT infrastructure needs',
                        'Scalable support that grows with your business'
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive IT Support Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our support services provide businesses with reliable, professional IT assistance 
                to ensure optimal performance of their technology infrastructure. From remote 
                troubleshooting to on-site maintenance, we deliver solutions that minimize 
                downtime and maximize productivity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With our experienced team of certified professionals and proven methodologies, 
                we help organizations maintain their competitive edge through reliable IT 
                support and proactive maintenance services.
              </p>
            </div>
          </div>
        </section>

        {/* Support Capabilities Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Support Service <span className="text-blue-600">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT support solutions to keep your business running smoothly with professional assistance and proactive maintenance.
              </p>
            </div>

            {/* Support Capabilities Preview Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: '🔄', label: '24/7 Availability', color: 'from-blue-400 to-blue-600' },
                { icon: '⚡', label: 'Fast Response', color: 'from-indigo-400 to-indigo-600' },
                { icon: '🛡️', label: 'Expert Team', color: 'from-purple-400 to-purple-600' },
                { icon: '📱', label: 'Multiple Channels', color: 'from-cyan-400 to-cyan-600' }
              ].map((capability, index) => (
                <div 
                  key={index}
                  className={`group p-6 rounded-2xl bg-gradient-to-br ${capability.color} text-white text-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <div className="font-semibold text-sm">{capability.label}</div>
                </div>
              ))}
            </div>

            {/* Detailed Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Support Service Types
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the support service that best fits your business requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Benefits of Our Support Services
                </h2>
                <p className="text-lg text-gray-600">
                  Experience the advantages of professional IT support
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Professional IT Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us help you maintain a reliable and efficient IT infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                  Get Started Today
                </button>
              </Link>
              <a href="tel:+917718811771">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
