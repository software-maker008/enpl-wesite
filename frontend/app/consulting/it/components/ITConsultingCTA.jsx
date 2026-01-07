// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Phone, Mail, MapPin, Shield, CheckCircle, TrendingUp } from 'lucide-react';

// export default function ITConsultingCTA() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Help Desk",
//       subtitle: "24/7 Toll Free",
//       details: "# 1800 266 2515",
//       color: "from-red-500 to-red-600"
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       subtitle: "servicedesk@goapl.com",
//       details: "Get in touch via email",
//       color: "from-yellow-500 to-orange-500"
//     },
//     {
//       icon: MapPin,
//       title: "Address",
//       subtitle: "B Wing, 602, Lotus Corporate Park",
//       details: "Graham Firth Compound, Opp. Raheja Ridgewood, Off. Western Express Highway, Goregaon East, Mumbai - 400063, India",
//       color: "from-blue-500 to-blue-600"
//     }
//   ];

//   const features = [
//     {
//       icon: Shield,
//       title: "Security First",
//       description: "Comprehensive security assessments to protect your infrastructure"
//     },
//     {
//       icon: CheckCircle,
//       title: "Quality Assurance",
//       description: "Rigorous testing and validation of all recommendations"
//     },
//     {
//       icon: TrendingUp,
//       title: "Performance Focus",
//       description: "Optimization strategies for maximum efficiency gains"
//     }
//   ];

//   return (
//     <section ref={ref} className="py-20 bg-gradient-to-br from-purple-50 via-gray-50 to-blue-50 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Hero CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
//             Ready to Transform Your IT Infrastructure?
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Don't wait for issues to arise. Our comprehensive IT consulting services will identify opportunities for improvement and optimization before they become problems.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           {/* Left Side - Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="mb-8"
//             >
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//                 Get in Touch
//               </h3>
//               <p className="text-lg text-gray-600">
//                 Ready to start your IT consulting journey? Contact us today!
//               </p>
//             </motion.div>

//             {/* Contact Cards */}
//             <div className="space-y-6">
//               {contactInfo.map((contact, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                   transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                   className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
//                       {React.createElement(contact.icon, { size: 28, className: "text-white" })}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                         {contact.title}
//                       </h3>
//                       <p className="text-gray-600 mb-2">
//                         {contact.subtitle}
//                       </p>
//                       <p className="text-gray-800 font-medium">
//                         {contact.details}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Features */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="mt-8"
//             >
//               <div className="space-y-4">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
//                       {React.createElement(feature.icon, { size: 16, className: "text-white" })}
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">{feature.title}</h4>
//                       <p className="text-sm text-gray-600">{feature.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//             transition={{ duration: 0.8 }}
//             className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="mb-8"
//             >
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 Request IT Consultation
//               </h3>
//               <p className="text-gray-600">
//                 Fill out the form below and we'll get back to you within 24 hours.
//               </p>
//             </motion.div>

//             <form className="space-y-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//               >
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Name *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Enter your full name"
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//               >
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Enter your email address"
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//               >
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Enter your company name"
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//               >
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Enter your phone number"
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//               >
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   IT Consulting Requirements
//                 </label>
//                 <textarea
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
//                   placeholder="Tell us about your IT consulting needs..."
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: 1.0 }}
//               >
//                 <button
//                   type="submit"
//                   className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//                 >
//                   Request IT Consultation
//                 </button>
//               </motion.div>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react';

// export default function NetworkingCTA() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const ctaOptions = [
//     {
//       icon: Phone,
//       title: "Call Us Now",
//       description: "Speak directly with our networking experts",
//       action: "+1 (555) 123-4567",
//       delay: 0.1
//     },
//     {
//       icon: Mail,
//       title: "Email Consultation",
//       description: "Get a detailed proposal via email",
//       action: "network@company.com",
//       delay: 0.2
//     },
//     {
//       icon: MessageCircle,
//       title: "Live Chat",
//       description: "Chat with our technical team",
//       action: "Start Chat",
//       delay: 0.3
//     }
//   ];

//   return (
//     <section ref={ref} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
//         {/* Animated Background Shapes */}
//         <motion.div
//           animate={{ 
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 360]
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
//         ></motion.div>
//         <motion.div
//           animate={{ 
//             scale: [1.2, 1, 1.2],
//             rotate: [360, 180, 0]
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"
//         ></motion.div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Main CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Ready to Transform
//             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Your Network?
//             </span>
//           </h2>
//           <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
//             Join hundreds of enterprises that have already upgraded their networking 
//             infrastructure with our proven solutions. Get started today and experience 
//             the difference.
//           </p>
          
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
//           >
//             Get Your Free Network Assessment
//             <ArrowRight className="w-5 h-5" />
//           </motion.div>
//         </motion.div>

//         {/* CTA Options Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//         >
//           {ctaOptions.map((option, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.8, delay: option.delay }}
//               whileHover={{ y: -10 }}
//               className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
//             >
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                   <option.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-white mb-4">{option.title}</h3>
//                 <p className="text-blue-100 leading-relaxed mb-6">{option.description}</p>
//                 <div className="text-lg font-semibold text-cyan-300">{option.action}</div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Trust Indicators */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/20"
//         >
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
//             <p className="text-blue-100 max-w-2xl mx-auto">
//               Our networking solutions power some of the world's most demanding enterprises
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl font-bold text-blue-300 mb-2">100+</div>
//               <div className="text-blue-100">Enterprise Clients</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-blue-300 mb-2">99.9%</div>
//               <div className="text-blue-100">Client Retention</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-blue-300 mb-2">15+</div>
//               <div className="text-blue-100">Years Experience</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-blue-300 mb-2">24/7</div>
//               <div className="text-blue-100">Expert Support</div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Final CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="text-center"
//         >
//           <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">
//             <h3 className="text-3xl font-bold text-white mb-6">Don't Wait - Act Now</h3>
//             <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
//               Every day without optimized networking costs your business money and productivity. 
//               Start your transformation today.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
//               >
//                 <Zap className="w-5 h-5" />
//                 Start Free Trial
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 border-2 border-blue-400 text-blue-200 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300 flex items-center gap-2"
//               >
//                 <Users className="w-5 h-5" />
//                 Schedule Demo
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from 'react';
import Link from 'next/link';

export default function VideoSurveillanceCTA() {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl animate-pulse-slow" />
      </div>
      
      {/* Yellow Accent Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg" />
      
      <div className="relative z-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Subtitle */}
          <div className="mb-4">
            <h3 className="text-lg font-medium text-yellow-400 mb-2 tracking-wider uppercase">
              Ready to Secure Your Premises?
            </h3>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full" />
          </div>
          
          {/* Main Heading */}
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              LET'S BUILD THE FUTURE OF
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                BUSINESS SECURITY
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our expert team is ready to help you implement cutting-edge video surveillance solutions that will 
              revolutionize your security infrastructure and provide peace of mind.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <button className="group relative bg-white text-gray-900 px-8 py-3.5 rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-500 font-bold text-base border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-110 hover:-translate-y-1">
                {/* Button Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Button Content */}
                <span className="relative flex items-center space-x-3">
                  <span>Get Started Today</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
            
            <a href="tel:+917718811771">
              <button className="group px-8 py-3.5 border-2 border-white text-white font-bold text-base rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm">
                <span className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </span>
              </button>
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 pt-4 border-t border-white/20">
            <p className="text-gray-400 text-xs">
              Join hundreds of businesses that have already secured their premises with our video surveillance solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
