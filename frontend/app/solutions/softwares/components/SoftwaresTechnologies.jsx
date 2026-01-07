"use client";
import React from 'react';

export default function SoftwaresTechnologies() {
  const coreTechnologies = [
    {
      icon: '🌐',
      title: 'Web Technologies',
      description: 'We build fast, secure, and scalable web applications using industry-leading frameworks. From dynamic frontends to high-performance backend systems, we deliver responsive and user-friendly solutions optimized for all devices.',
      specs: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'NestJS', 'Express.js', 'GraphQL'],
      expertise: 'Expertise in: React.js, Next.js, Node.js, TypeScript, NestJS, Express.js, GraphQL',
      specialties: 'Specialties: Responsive UI/UX, RESTful APIs, Server-Side Rendering (SSR), Progressive Web Apps (PWA)'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'We design and develop cross-platform mobile apps that deliver smooth performance, engaging interfaces, and native capabilities. Whether for Android or iOS, our apps are optimized for speed, usability, and security.',
      specs: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Ionic'],
      frameworks: 'Frameworks: React Native, Flutter, Kotlin, Swift, Ionic',
      capabilities: 'Capabilities: Offline Mode, Real-Time Sync, Push Notifications, Device Integration (Camera, GPS, NFC)'
    },
    {
      icon: '☁️',
      title: 'Cloud Integration',
      description: 'Our experts design and deploy cloud-native applications that scale efficiently and operate reliably in multi-cloud environments. We specialize in cloud migration, serverless architecture, and automated deployments.',
      specs: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines'],
      platforms: 'Platforms: AWS, Azure, Google Cloud, DigitalOcean',
      tools: 'Tools: Docker, Kubernetes, Terraform, CI/CD Pipelines',
      features: 'Features: Auto Scaling, Load Balancing, Cloud Security, API Gateway Setup'
    }
  ];

  const advancedFeatures = [
    {
      icon: '🔒',
      title: 'Security & Testing',
      description: 'We implement enterprise-grade security measures and automated testing at every stage of development to ensure your systems remain resilient against vulnerabilities.',
      features: [
        'Security Audits & Penetration Testing',
        'Static & Dynamic Code Analysis',
        'Vulnerability Management',
        'Quality Assurance (Manual & Automated)',
        'Compliance with ISO 27001 / GDPR'
      ]
    },
    {
      icon: '📊',
      title: 'Analytics & Monitoring',
      description: 'Comprehensive performance tracking and user analytics to help businesses make data-driven decisions.',
      features: [
        'Real-Time Application Monitoring',
        'Error Tracking & Alerting',
        'User Analytics & Heatmaps',
        'Performance Benchmarking',
        'Predictive Insights with AI'
      ]
    },
    {
      icon: '🔗',
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise software, APIs, and third-party applications to ensure smooth interoperability.',
      features: [
        'API Development & Management',
        'Data Migration & Transformation',
        'Workflow Automation',
        'Real-Time Data Sync',
        'ERP/CRM Integration (SAP, Salesforce, Zoho, Odoo)'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Software <span className="text-blue-600">Technologies</span>
          </h2>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto space-y-2">
            <p className="font-semibold">
              Empowering Innovation with Modern Tools & Proven Frameworks
            </p>
            <p>
              We leverage the latest software technologies, frameworks, and cloud infrastructures to deliver reliable, scalable, and future-ready digital solutions.
              Our expertise covers the full technology spectrum—from web and mobile development to automation, analytics, and enterprise integration.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <h3 className="text-3xl font-bold text-gray-900">
              Core Technologies
            </h3>
            <h3 className="text-3xl font-bold text-gray-900">
              Advanced Features
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreTechnologies.map((tech, index) => (
              <React.Fragment key={`tech-${index}`}>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h4>
                      <p className="text-gray-600 mb-4 flex-grow">{tech.description}</p>
                      {tech.expertise && (
                        <p className="text-sm text-gray-700 mb-2 font-medium">{tech.expertise}</p>
                      )}
                      {tech.specialties && (
                        <p className="text-sm text-gray-700 mb-3">{tech.specialties}</p>
                      )}
                      {tech.frameworks && (
                        <p className="text-sm text-gray-700 mb-2 font-medium">{tech.frameworks}</p>
                      )}
                      {tech.capabilities && (
                        <p className="text-sm text-gray-700 mb-3">{tech.capabilities}</p>
                      )}
                      {tech.platforms && (
                        <p className="text-sm text-gray-700 mb-2 font-medium">{tech.platforms}</p>
                      )}
                      {tech.tools && (
                        <p className="text-sm text-gray-700 mb-2">{tech.tools}</p>
                      )}
                      {tech.features && (
                        <p className="text-sm text-gray-700 mb-3">{tech.features}</p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {tech.specs.map((spec, specIndex) => (
                          <span key={specIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{advancedFeatures[index].icon}</span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{advancedFeatures[index].title}</h4>
                      <p className="text-gray-600 mb-4 flex-grow">{advancedFeatures[index].description}</p>
                      <ul className="space-y-1">
                        {advancedFeatures[index].features.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
