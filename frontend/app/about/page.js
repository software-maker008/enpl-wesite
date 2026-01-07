'use client';

import Link from "next/link";
import Header from "../components/Header"
import Footer from "../components/Footer"
import LetsGetInTouch from "../components/LetsGetInTouch"
import { useScrollAnimation } from "../lib/useScrollAnimation";

export default function AboutUs() {
  const isVisible = useScrollAnimation();

  return (
    <>
      <Header />
      
      {/* Hero Banner Section */}
      <section 
        id="hero-banner"
        data-animate="fade-in-up"
        className={`relative min-h-[89vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-12 transition-all duration-1000 ${
          isVisible['hero-banner'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
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
        <div className="absolute top-32 left-32 text-6xl text-blue-300 opacity-30 animate-float-slow">💼</div>
        <div className="absolute top-48 right-48 text-5xl text-purple-300 opacity-30 animate-float-slow animation-delay-1000">📊</div>
        <div className="absolute bottom-32 left-1/3 text-4xl text-indigo-300 opacity-30 animate-float-slow animation-delay-3000">🎯</div>
        
        <div className="relative z-10 px-6 max-w-6xl mx-auto text-center">
          <div className="transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">About Us</span>
            </h1>
            <div className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto space-y-6">
              <p className="animate-fade-in-up delay-200">
                Our expertise and domain knowledge of various businesses helped us deliver solutions with the precision to more than 
                <span className="text-yellow-300 font-bold animate-pulse-slow"> 100+ companies </span>
                across different verticals in India.
              </p>
              <p className="animate-fade-in-up delay-400">
                ENPL's clientele includes the leading enterprises in India from sectors like 
                <span className="text-cyan-300 font-semibold animate-pulse-slow"> Banking, Finance, Insurance, </span>
                <span className="text-pink-300 font-semibold animate-pulse-slow"> Manufacturing, Retail, </span>
                <span className="text-green-300 font-semibold animate-pulse-slow"> Telecommunications, IT/ITES, </span>
                <span className="text-orange-300 font-semibold animate-pulse-slow"> Entertainment, Healthcare, Government </span>
                etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section 
        id="who-we-are"
        data-animate="fade-in-up"
        className={`w-full bg-white py-20 transition-all duration-1000 ${
          isVisible['who-we-are'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Text Content */}
              <div className="space-y-8 animate-fade-in-left">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">
                    WHO WE ARE
                  </h3>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    We focus on bringing value and solve business challenges through the delivery of modern IT services and solutions
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p className="animate-fade-in-up delay-200">
                    <span className="text-blue-600 font-semibold">ENPL</span> provides a range of Information Technology services designed for business productivity. From consultancy to expert installation, outsourcing and implementation to cloud Solutions.
                  </p>
                  <p className="animate-fade-in-up delay-400">
                    In order to help companies with their IT solutions. Our initial focus was providing complete information technology solutions for companies. In response to customer needs - and in order to fully cover the range of IT services - our offer quickly expanded with customised IT solutions.
                  </p>
                </div>
              </div>
              
              {/* Right Side - Company Information & Stats */}
              <div className="animate-fade-in-right">
                <div className="relative">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse-slow" />
                  
                  {/* Main information container */}
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-700 h-96">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />
                    
                    {/* Company Stats Grid */}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Main Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {/* Years of Experience */}
                        <div className="group/stat bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 animate-float-up" style={{ animationDelay: '0.1s' }}>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover/stat:scale-125 group-hover/stat:rotate-12 transition-all duration-500 animate-bounce-gentle">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="text-2xl font-bold mb-1 animate-count-up group-hover/stat:text-3xl transition-all duration-500">10+</div>
                            <div className="text-xs text-blue-100 group-hover/stat:text-sm transition-all duration-300">Years of Excellence</div>
                          </div>
                        </div>
                        
                        {/* Clients Served */}
                        <div className="group/stat bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-4 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 animate-float-up" style={{ animationDelay: '0.2s' }}>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover/stat:scale-125 group-hover/stat:rotate-12 transition-all duration-500 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div className="text-2xl font-bold mb-1 animate-count-up group-hover/stat:text-3xl transition-all duration-500">100+</div>
                            <div className="text-xs text-purple-100 group-hover/stat:text-sm transition-all duration-300">Companies Served</div>
                          </div>
                        </div>
                        
                        {/* Team Size */}
                        <div className="group/stat bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-4 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 animate-float-up" style={{ animationDelay: '0.3s' }}>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover/stat:scale-125 group-hover/stat:rotate-12 transition-all duration-500 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                              </svg>
                            </div>
                            <div className="text-2xl font-bold mb-1 animate-count-up group-hover/stat:text-3xl transition-all duration-500">100+</div>
                            <div className="text-xs text-green-100 group-hover/stat:text-sm transition-all duration-300">Projects Done</div>
                          </div>
                        </div>
                        
                        {/* Success Rate */}
                        <div className="group/stat bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-4 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 animate-float-up" style={{ animationDelay: '0.4s' }}>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover/stat:scale-125 group-hover/stat:rotate-12 transition-all duration-500 animate-bounce-gentle" style={{ animationDelay: '1.5s' }}>
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="text-2xl font-bold mb-1 animate-count-up group-hover/stat:text-3xl transition-all duration-500">98%</div>
                            <div className="text-xs text-orange-100 group-hover/stat:text-sm transition-all duration-300">Client Satisfaction</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating accent elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About ENPL Company Section */}
      <section 
        id="about-enpl"
        data-animate="fade-in-up"
        className={`w-full bg-gradient-to-r from-blue-50 via-white to-purple-50 py-20 transition-all duration-1000 ${
          isVisible['about-enpl'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-16 animate-fade-in-up">
              About Electrohelps Networks Private Limited
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 animate-fade-in-left">
                  <p>
                    <span className="text-blue-600 font-semibold">Electrohelps Networks Pvt. Ltd</span> is a leading technology solutions provider and helps organizations to digitally transform their business.
                  </p>
                  <p>
                    Over the past <span className="text-red-500 font-bold text-xl animate-pulse-slow">11 years</span>, we have strived to help our customers meet the most difficult challenges by providing innovative solutions that integrate cutting edge technologies.
                  </p>
                </div>
                <div className="space-y-6 animate-fade-in-right">
                  <p>
                    We have been constantly upgrading our portfolio of solutions and skills to keep up with the fast-changing digital world.
                  </p>
                  <p>
                    Our vast experience across various industries, large investments in developing skills and solutions, ability to execute complex transactions and
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold text-xl animate-pulse-slow"> professionals </span>
                    put us in the best position to deliver transformational solutions to our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission and Values Section */}
      <section 
        id="vision-mission-values"
        data-animate="fade-in-up"
        className={`w-full bg-white py-20 transition-all duration-1000 ${
          isVisible['vision-mission-values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16 animate-fade-in-up">
              VISION, MISSION AND VALUES
            </h2>
            
            <div className="space-y-16">
              {/* Vision & Mission Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-up delay-200">
                {/* Vision Card */}
                <div className="group">
                  <div className="relative">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500" />
                    
                    {/* Main card */}
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
            </div>
            
                      <h3 className="text-2xl font-bold text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                        OUR VISION
            </h3>
            
                      <p className="text-lg text-gray-700 leading-relaxed">
                        To become world class IT consultant company to provide Consultancy, Managed and Support service to our clients and become an asset to our communities. We are dedicated to become the most popular name when it comes to IT industries no matter what the project is.
                      </p>
                  </div>
                    </div>
                  </div>

                {/* Mission Card */}
                <div className="group">
                  <div className="relative">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500" />
                    
                    {/* Main card */}
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                  </div>

                      <h3 className="text-2xl font-bold text-purple-600 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                        OUR MISSION
                      </h3>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Our mission is to understand the unique needs of each client and offer the most comprehensive Solution, Expertise, and Services using highly motivated, highly skilled team to help our clients for Performance Improvement and Capability Development.
                    </p>
                  </div>
                    </div>
                  </div>
                </div>

              {/* Core Values Grid */}
              <div className="animate-fade-in-up delay-400">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">
                  CORE VALUES
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Courtesy */}
                  <div className="group">
                    <div className="relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500" />
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-green-600 mb-3 group-hover:text-green-700 transition-colors duration-300">
                          COURTESY
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Treat others with as much respect as you would expect to receive. We understand that being part of a ENPL Team can be stressful but we guarantee that our representatives will show respect and act with dignity and courtesy at all times.
                        </p>
            </div>
          </div>
        </div>

                  {/* Integrity */}
                  <div className="group">
                    <div className="relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500" />
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                          INTEGRITY
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Integrity is honesty and honesty is a valuable trait. But we not only advocate honesty towards others, but to also be honest to ourselves. Being honest with ourselves is a truly powerful tool because it allows us to take responsibility for everything that happens which means we are now in control of what happens next.
                        </p>
                  </div>
                    </div>
                  </div>

                  {/* Reliability */}
                  <div className="group">
                    <div className="relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500" />
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                  </div>
                        <h4 className="text-lg font-bold text-purple-600 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                          RELIABILITY
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          We believe a reputation is built on being reliable. We don't over promise clients and candidates and deliver on what we set out to do. We have high expectations of our role and believe that being reliable, honest and professional allows the formation of lasting business relationships.
                    </p>
                  </div>
                </div>
                  </div>

                  {/* Ambition */}
                  <div className="group">
                    <div className="relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500" />
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-orange-600 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                          AMBITION
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          We believe that our ambition only benefits both our clients and candidates. We strives to be the best within the industry and continue to raise standards in both the delivery of service and permanent staff. We feel this is reflected internally with the level, attributes and ability of staff we hire.
                        </p>
            </div>
          </div>
        </div>

                  {/* Quality of Service */}
                  <div className="group">
                    <div className="relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500" />
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-red-600 mb-3 group-hover:text-red-700 transition-colors duration-300">
                          QUALITY OF SERVICE
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Dedication to quality is what sets us apart from our competitors. We prides itself on the levels of service we give to clients and candidates at all stage of working. We believe that the level of service is at the core of our business ethos.
                        </p>
                  </div>
                    </div>
                  </div>

                  {/* Teamwork */}
                  <div className="group">
                    <div className="relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500" />
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                          </svg>
                  </div>
                        <h4 className="text-lg font-bold text-pink-600 mb-3 group-hover:text-pink-700 transition-colors duration-300">
                          TEAMWORK
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          We believe that the greatest advantage of teamwork is that it achieves what individuals can't, through the medium of simple cooperation.
                    </p>
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        id="cta-section"
        data-animate="fade-in-up"
        className={`transition-all duration-1000 ${
          isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <LetsGetInTouch />
      </section>

      <Footer />
      
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in-up.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fade-in-up.delay-600 {
          animation-delay: 0.6s;
        }
        
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        @keyframes count-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-count-up {
          animation: count-up 1s ease-out forwards;
        }
        
        @keyframes float-up {
          0% { opacity: 0; transform: translateY(30px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-float-up {
          animation: float-up 0.8s ease-out forwards;
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(147, 51, 234, 0.4); }
        }
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        
        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
        }
        .animate-float-particle-1 {
          animation: float-particle-1 6s ease-in-out infinite;
        }
        
        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-8px) rotate(-180deg); opacity: 1; }
        }
        .animate-float-particle-2 {
          animation: float-particle-2 7s ease-in-out infinite;
        }
        
        @keyframes float-particle-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-12px) rotate(90deg); opacity: 1; }
        }
        .animate-float-particle-3 {
          animation: float-particle-3 8s ease-in-out infinite;
        }
        
        @keyframes float-particle-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-6px) rotate(-90deg); opacity: 1; }
        }
        .animate-float-particle-4 {
          animation: float-particle-4 9s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes spin-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        
        @keyframes progress-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-progress-bar {
          animation: progress-bar 2s ease-out forwards;
        }
      `}</style>
    </>
  );
} 