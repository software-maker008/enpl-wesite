import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ConsultingPage() {
  const services = [
    {
      title: "Cloud Migration",
      description: "Expert guidance for seamless cloud migration journeys",
      href: "/consulting/cloud/migration",
      icon: "☁️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Strategy",
      description: "Comprehensive cloud assessment and strategic planning",
      href: "/consulting/cloud/strategy",
      icon: "📊",
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Assessment & Audits",
      description: "Comprehensive IT infrastructure assessment and optimization services",
      href: "/consulting/audits",
      icon: "🔍",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting and infrastructure optimization",
      href: "/consulting/it",
      icon: "💻",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Consulting",
      description: "Strategic AI implementation and optimization",
      href: "/consulting/ai-consulting",
      icon: "🤖",
      color: "from-pink-500 to-red-500"
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
              Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert guidance to transform your business with cutting-edge technology solutions
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Consulting Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide strategic consulting services to help your business leverage the latest technologies
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
