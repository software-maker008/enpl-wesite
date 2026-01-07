'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const EndpointDevicesPartners = () => {
  const devicePartners = [
    {
      name: 'Hewlett Packard Enterprise',
      logo: '/partners/partner5.png'
    },
    {
      name: 'D-Link',
      logo: '/partners/partner4.png'
    },
    {
      name: 'TP-Link',
      logo: '/partners/partner14.png'
    },
    {
      name: 'QNAP',
      logo: '/partners/partner10.png'
    },
    {
      name: 'Sophos',
      logo: '/partners/partner11.png'
    },
    {
      name: 'Aruba',
      logo: '/partners/partner2.png'
    }
  ];

  // Duplicate partners array to ensure smooth continuous scrolling
  const duplicatedPartners = [...devicePartners, ...devicePartners, ...devicePartners];

  return (
    <section className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 py-8 pt-4">
      <div className="w-full px-0 px-2 py-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 animate-fade-in-up">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up delay-200">
            Trusted technology partners delivering world-class solutions
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative overflow-hidden">
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 40 },
              640: { slidesPerView: 3, spaceBetween: 40 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
              1280: { slidesPerView: 6, spaceBetween: 40 },
            }}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            modules={[Autoplay]}
            className="w-full"
            loop={true}
          >
            {duplicatedPartners.map((partner, index) => (
              <SwiperSlide key={`${partner.name}-${index}`} className="mx-0">
                <div className="flex flex-col items-center justify-center p-8 space-y-6">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-50 h-32 object-contain transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default EndpointDevicesPartners;

