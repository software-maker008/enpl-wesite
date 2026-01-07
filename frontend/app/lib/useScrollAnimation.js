'use client';

import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              setIsVisible(prev => ({
                ...prev,
                [sectionId]: true
              }));
            }
          }
        });
      }, observerOptions);

      // Observe all sections with data-animate attribute
      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach((section) => {
        if (section.id) {
          observer.observe(section);
        }
      });

      // Cleanup function
      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return isVisible;
};

// Advanced animation hook for staggered effects
export const useAdvancedScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.id;
          if (elementId) {
            setAnimatedElements(prev => new Set([...prev, elementId]));
          }
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const elements = document.querySelectorAll('[data-animate], .animate-on-scroll');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return animatedElements;
};