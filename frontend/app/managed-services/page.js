import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ManagedServicesPage() {
  const services = [
    {
      title: "Support Services",
      description: "Comprehensive IT support including remote and onsite assistance",
      href: "/managed-services/support",
      icon: "🛠️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Infrastructure Management",
      description: "End-to-end IT infrastructure management and optimization",
      href: "/managed-services/infrastructure",
      icon: "🏗️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Network Management",
      description: "Professional network administration and security management",
      href: "/managed-services/cloud/network",
      icon: "🌐",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Services",
      description: "Comprehensive cybersecurity and threat protection",
      href: "/managed-services/security",
      icon: "🔒",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Services",
      description: "Cloud infrastructure management and optimization services",
      href: "/managed-services/cloud-services",
      icon: "☁️",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Remote Managed Services",
      description: "Professional remote IT management and monitoring services",
      href: "/managed-services/cloud/remote",
      icon: "🖥️",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Managed Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT management solutions to keep your business running smoothly
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Managed Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide end-to-end IT management services to ensure your technology infrastructure operates at peak performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </main>
      <Footer />
    </>
  );
}
