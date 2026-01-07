'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Clients = () => {
  const clients = [
    {
      name: 'AEMA',
      logo: '/client/aema-logo.png'
    },
    {
      name: 'Client 1',
      logo: '/client/client_logo (1).png'
    },
    {
      name: 'Client 2',
      logo: '/client/client_logo (2).png'
    },
    {
      name: 'Client 3',
      logo: '/client/client_logo (3).png'
    },
    {
      name: 'Client 4',
      logo: '/client/client_logo (4).png'
    },
    {
      name: 'Client 5',
      logo: '/client/client_logo (5).png'
    },
    // {
    //   name: 'Client 6',
    //   logo: '/client/client_logo (6).png'
    // },
    {
      name: 'Client 7',
      logo: '/client/client_logo (7).png'
    },
    {
      name: 'Client 8',
      logo: '/client/client_logo (8).png'
    },
    {
      name: 'Client 9',
      logo: '/client/client_logo (9).png'
    },
    {
      name: 'Client 10',
      logo: '/client/client_logo (10).png'
    },
    {
      name: 'Client 11',
      logo: '/client/client_logo (11).png'
    },
    {
      name: 'Client 12',
      logo: '/client/client_logo (12).png'
    },
    {
      name: 'Client 13',
      logo: '/client/client_logo (13).png'
    },
    {
      name: 'Client 14',
      logo: '/client/client_logo (14).png'
    },
    {
      name: 'Client 15',
      logo: '/client/client_logo (15).png'
    },
    {
      name: 'Client 16',
      logo: '/client/client_logo (16).png'
    },
    {
      name: 'Client 17',
      logo: '/client/client_logo (17).png'
    },
    {
      name: 'Client 18',
      logo: '/client/client_logo (18).png'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-purple-50 py-8 pt-4">
      <div className="w-full px-0">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 animate-fade-in-up">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up delay-200">
            Trusted by leading organizations across various industries
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="relative overflow-hidden clients-wrapper">
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
            autoplay={{ 
              delay: 0, 
              disableOnInteraction: false,
              reverseDirection: false
            }}
            speed={3000}
            modules={[Autoplay]}
            className="w-full clients-swiper"
            loop={true}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={`${client.name}-${index}`} className="mx-0">
                <div className="flex flex-col items-center justify-center p-8 space-y-6 clients-slide-content">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="w-64 h-40 object-contain transition-all duration-300 hover:scale-110"
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
        
        .clients-wrapper {
          transform: scaleX(-1);
        }
        
        .clients-slide-content {
          transform: scaleX(-1);
        }
        
        .clients-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default Clients;
