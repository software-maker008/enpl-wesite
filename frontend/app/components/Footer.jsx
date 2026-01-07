'use client';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMediaIcons = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: '#'
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl animate-pulse-slow" />
      </div>
      
      <div className="relative z-10 px-4 py-12">
        {/* Main Footer Content - 6 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* ABOUT US */}
          <div className="animate-fade-in-up">
            <h3 className="text-lg font-semibold mb-4 text-white">ABOUT US</h3>
            <div className="space-y-2 text-white/80">
              <p>Electrohelps Networks is a leading technology solutions provider, specializing in IT services, consulting, and custom software development.</p>
            </div>
          </div>

          {/* OUR ADDRESS */}
          <div className="animate-fade-in-up">
            <h3 className="text-lg font-semibold mb-4 text-white">OUR ADDRESS</h3>
            <div className="space-y-2 text-white/80">
              <p>1203/04, Ghanshyam Enclave.</p>
              <p>Nr. Laljipada Police Chowki</p>
              <p>New Link Road, Kandivali West</p>
              <p>Mumbai MH 400067</p>
              <p>India</p>
            </div>
          </div>

          {/* OUR CONTACTS */}
          {/* <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">OUR CONTACTS</h3>
            <div className="space-y-2 text-white/80">
              <p>SALES</p>
              <p className="text-xl font-bold text-blue-300">771-8811-771</p>
            </div>
            <div className="space-y-2 mt-2 text-white/80">
              <p>SUPPORT</p>
              <p className="text-xl font-bold text-blue-300">771-8811-747</p>
              <p className="text-xl font-bold text-blue-300">771-8823-606</p>
            </div>
          </div> */}

           {/* OUR SOLUTIONS */}
           {/* <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">OUR SOLUTIONS</h3>
            <div className="space-y-2 text-white/80">
              <div className="block">
                <a href="/solutions" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">Wireless</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="/solutions" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                 <span className="relative z-10">Networking</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="/solutions" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">Telephony</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="/solutions" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">Video Surveillance(CCTV)</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="/solutions" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">Access Control</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="/solutions" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">Cloud & Computing</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="/solutions" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">Softwares</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>
          </div> */}

          {/* OUR SOFTWARES */}
          {/* <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">OUR SOFTWARES</h3>
            <div className="space-y-2 text-white/80">
              <div className="block">
                <a href="https://openwi.in/" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">Open WI</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="#" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10"></span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="#" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10"></span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>
          </div> */}

          {/* QUICK LINKS */}
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">QUICK LINKS</h3>
            <div className="space-y-2 text-white/80">
              <div className="block">
                <a href="/" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">Home</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="/about" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">About Us</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="/solutions" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">Solutions</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="/contact" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10">Contact</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">GET IN TOUCH</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:02240244440" className="text-sm hover:text-purple-300 transition-colors duration-300 cursor-pointer">022-4024-4440</a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">sales@ehsnetworks.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">support@ehsnetworks.in</span>
              </div>
            </div>
          </div>

          

          {/* LINKS */}
          {/* <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">LINKS</h3>
            <div className="space-y-2 text-white/80">
              <div className="block">
                <a href="#" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10"></span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="block">
                <a href="#" className="inline-block text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative cursor-pointer group">
                  <span className="relative z-10"></span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>  */}
          
          {/* SOCIAL MEDIA */}
          {/* <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">SOCIAL MEDIA:</h3>
            <div className="flex space-x-4">
              {socialMediaIcons.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer relative"
                >
                  <div className="hover:animate-bounce transition-transform duration-300">
                    {social.icon}
                  </div>
              
                  <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-500 blur-sm" />
                </a>
              ))}
            </div>
          </div> */}
        </div> 

        {/* Bottom Section - Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0 animate-fade-in-up">
            <div className="relative">
              <img
                src="/icons/Enpl-logo.jpeg"
                alt="ENPL Logo"
                className="w-14 h-14 drop-shadow-lg rounded-full border-2 border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 animate-float-slow"
                style={{ boxShadow: '0 4px 16px 0 rgba(255,255,255,0.1)' }}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-500 blur-sm" />
            </div>
            
            <div>
              <h2 className="text-  xl font-bold text-white mb-1 hover:text-blue-200 transition-colors duration-300">
                Electrohelps Networks
              </h2>
              <p className="text-sm text-white/80 hover:text-white/90 transition-colors duration-300">
                Solution | Cloud | Consult | Assist
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-white/60 text-sm animate-fade-in-up">
            © {currentYear} Electrohelps Networks Pvt Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-4px) rotate(180deg) scale(1.1); }
        }
        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-3px) rotate(-180deg) scale(1.05); }
        }
        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-4px,0); }
          70% { transform: translate3d(0,-2px,0); }
          90% { transform: translate3d(0,-1px,0); }
        }
        .animate-bounce {
          animation: bounce 1s;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 
