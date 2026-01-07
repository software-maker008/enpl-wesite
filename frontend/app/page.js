'use client';

import Header from "./components/Header"
import VideoBanner from "./components/VideoBanner"
import QuickFacts from "./components/QuickFacts"
import Solutions from "./components/Solutions"
import ConsultingServices from "./components/ConsultingServices"
import Partners from "./components/Partners"
import Clients from "./components/Clients"
import Footer from "./components/Footer"
import LetsGetInTouch from "./components/LetsGetInTouch"
import { useScrollAnimation } from "./lib/useScrollAnimation";
import { useEffect } from "react";

export default function Home() {
  const isVisible = useScrollAnimation();

  // Ensure the page always starts at the top so the video banner is fully visible after refresh
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      try { window.history.scrollRestoration = 'manual'; } catch {}
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <Header />
      
      {/* Video Banner Section */}
      <section 
        id="banner-section"
        data-animate="premium-fade-in"
        className={`animate-on-scroll transition-all duration-1500 ease-out ${
          isVisible['banner-section'] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <VideoBanner />
      </section>
      
      {/* Quick Facts Section */}
      <section 
        id="quick-facts-section"
        data-animate="premium-slide-up"
        className={`animate-on-scroll ${
          isVisible['quick-facts-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <QuickFacts />
      </section>
      
      {/* Solutions Section */}
      <section 
        id="solutions-section"
        data-animate="premium-scale-in"
        className={`animate-on-scroll ${
          isVisible['solutions-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Solutions />
      </section>
      
      {/* Consulting Services Section */}
      <section 
        id="consulting-services-section"
        data-animate="premium-fade-in-left"
        className={`animate-on-scroll ${
          isVisible['consulting-services-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ConsultingServices />
      </section>
      
      {/* Partners Section */}
      <section 
        id="partners-section"
        data-animate="premium-bounce-in"
        className={`animate-on-scroll ${
          isVisible['partners-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Partners />
      </section>
      
      {/* Clients Section */}
      <section 
        id="clients-section"
        data-animate="premium-bounce-in"
        className={`animate-on-scroll ${
          isVisible['clients-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Clients />
      </section>
      
      {/* Let's Get In Touch Section */}
      <section 
        id="contact-section"
        data-animate="premium-glow-in"
        className={`animate-on-scroll ${
          isVisible['contact-section'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <LetsGetInTouch />
      </section>
      
      <Footer />

      
      <style jsx global>{`
        /* Simplified Animation System for Better Performance */
        
        /* Simple Fade In */
        @keyframes simple-fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        /* Simple Slide Up */
        @keyframes simple-slide-up {
          0% { 
            opacity: 0; 
            transform: translateY(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        /* Simple Scale In */
        @keyframes simple-scale-in {
          0% { 
            opacity: 0; 
            transform: scale(0.95);
          }
          100% { 
            opacity: 1; 
            transform: scale(1);
          }
        }
        
        /* Simple Fade In Left */
        @keyframes simple-fade-in-left {
          0% { 
            opacity: 0; 
            transform: translateX(-20px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        /* Simple Fade In Right */
        @keyframes simple-fade-in-right {
          0% { 
            opacity: 0; 
            transform: translateX(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        /* Simple Bounce In */
        @keyframes simple-bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.9);
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.02);
          }
          100% { 
            opacity: 1; 
            transform: scale(1);
          }
        }
        
        /* Simple Glow In */
        @keyframes simple-glow-in {
          0% { 
            opacity: 0; 
            transform: translateY(10px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        /* Staggered Animation Classes */
        .animate-stagger-1 { animation-delay: 0.1s; }
        .animate-stagger-2 { animation-delay: 0.2s; }
        .animate-stagger-3 { animation-delay: 0.3s; }
        .animate-stagger-4 { animation-delay: 0.4s; }
        .animate-stagger-5 { animation-delay: 0.5s; }
        
        /* Simplified Hover Effects */
        .premium-hover {
          transition: transform 0.3s ease;
        }
        
        .premium-hover:hover {
          transform: translateY(-2px);
        }
        
        /* Simple Text Glow Effect */
        .text-glow {
          transition: text-shadow 0.3s ease;
        }
        
        .text-glow:hover {
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
        }
        
        /* Simple Card Effects */
        .premium-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .premium-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        /* Performance optimizations */
        .smooth-scroll-element {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .animate-on-scroll {
          will-change: transform, opacity, filter;
          transform: translateZ(0);
        }
        
        /* Optimized section animations */
        .animate-on-scroll:not(.opacity-100) {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .animate-on-scroll.opacity-100 {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Simplified entrance animations for better performance */
        .animate-on-scroll[data-animate="premium-slide-up"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll[data-animate="premium-scale-in"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll[data-animate="premium-fade-in-left"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll[data-animate="premium-fade-in-right"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll[data-animate="premium-bounce-in"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll[data-animate="premium-glow-in"] {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll,
          .premium-hover,
          .premium-card,
          .text-glow {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
        
        /* Enhanced transitions */
        * {
          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </>
  );
}