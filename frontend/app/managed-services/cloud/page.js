import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function CloudServicesPage() {
  const services = [
    {
      title: "Network Infrastructure Management",
      description: "Professional network administration and security management",
      href: "/managed-services/cloud/network",
      icon: "🌐",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Remote Managed Services",
      description: "Professional remote IT management and monitoring services",
      href: "/managed-services/cloud/remote",
      icon: "🖥️",
      color: "from-green-500 to-teal-500"
    }
  ];

  const features = [
    {
      icon: "☁️",
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal disruption"
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Enterprise-grade security and regulatory compliance management"
    },
    {
      icon: "📊",
      title: "Performance Monitoring",
      description: "24/7 monitoring and optimization of cloud infrastructure"
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      description: "Strategic cost management and resource optimization"
    },
    {
      icon: "🔄",
      title: "Backup & Recovery",
      description: "Comprehensive disaster recovery and business continuity"
    },
    {
      icon: "🚀",
      title: "Scalability",
      description: "Flexible scaling to meet your business growth needs"
    }
  ];

  const benefits = [
    "Reduced infrastructure costs and improved ROI",
    "Enhanced security and compliance standards",
    "Increased operational efficiency and productivity",
    "Scalable solutions that grow with your business",
    "24/7 monitoring and proactive issue resolution",
    "Access to latest cloud technologies and innovations"
  ];

  const cloudPlatforms = [
    {
      name: "AWS",
      description: "Amazon Web Services",
      icon: "☁️"
    },
    {
      name: "Azure",
      description: "Microsoft Azure",
      icon: "🔷"
    },
    {
      name: "Google Cloud",
      description: "Google Cloud Platform",
      icon: "🔵"
    },
    {
      name: "Private Cloud",
      description: "On-premises cloud solutions",
      icon: "🏢"
    }
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
              Cloud Services
                </div>
                
                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Cloud Infrastructure
                    <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      Management
                    </span>
            </h1>
                </div>
                
                {/* Description */}
                <div className="space-y-6">
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Transform your business with comprehensive cloud infrastructure management and optimization services. 
                    From migration to ongoing management, we provide end-to-end cloud solutions tailored to your specific needs.
                  </p>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                      <span className="relative flex items-center space-x-3">
                        <span>Get Cloud Consultation</span>
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
                    <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                    <div className="text-gray-300 text-sm">Cloud Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">99.9%</div>
                    <div className="text-gray-300 text-sm">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Support</div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Cloud Capabilities Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-200 to-indigo-200 blur-3xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6">Why Choose Our Cloud Services?</h3>
                    <div className="space-y-4">
                      {[
                        'Expertise across major cloud platforms (AWS, Azure, Google Cloud)',
                        'Seamless migration with minimal business disruption',
                        '24/7 monitoring and proactive issue resolution',
                        'Cost optimization and resource management',
                        'Enterprise-grade security and compliance',
                        'Scalable solutions that grow with your business'
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
                Transform Your Business with Cloud Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our cloud services help businesses leverage the power of cloud computing 
                to improve efficiency, reduce costs, and scale operations seamlessly. 
                From migration to ongoing management, we provide end-to-end cloud 
                solutions tailored to your specific needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise across major cloud platforms and a focus on security, 
                performance, and cost optimization, we ensure your cloud journey is 
                smooth and successful.
              </p>
            </div>
          </div>
        </section>

        {/* Cloud Capabilities Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cloud Service <span className="text-blue-600">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cloud solutions to drive your business forward with enterprise-grade infrastructure and management.
              </p>
            </div>

            {/* Cloud Capabilities Preview Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: '☁️', label: 'Cloud Migration', color: 'from-blue-400 to-blue-600' },
                { icon: '🔒', label: 'Security & Compliance', color: 'from-indigo-400 to-indigo-600' },
                { icon: '📊', label: 'Performance Monitoring', color: 'from-purple-400 to-purple-600' },
                { icon: '💰', label: 'Cost Optimization', color: 'from-cyan-400 to-cyan-600' }
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

        {/* Cloud Platforms Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cloud Platforms We Support
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expertise across major cloud providers and private cloud solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {platform.description}
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
                Our Cloud Service Types
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the cloud service that best fits your business requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Benefits of Our Cloud Services
                </h2>
                <p className="text-lg text-gray-600">
                  Experience the advantages of professional cloud management
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-1">
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
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Cloud?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let us help you leverage the power of cloud computing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300">
                  Get Started Today
                </button>
              </Link>
              <a href="tel:+917718811771">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300">
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
