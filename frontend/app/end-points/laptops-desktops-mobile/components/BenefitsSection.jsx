"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Palette, ArrowLeftRight, ShoppingCart, Handshake, Headphones, ThumbsUp } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Users,
      title: "Multi Vendor Support",
      description: "Access to major IT brands through our partnerships; Like Dell, Hp, Asus, Lenevo.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "Customization",
      description: "Software and System updates are configured as per your need before delivery.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ArrowLeftRight,
      title: "Data Migration",
      description: "Data Migration from Old asset to New asset.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: ShoppingCart,
      title: "Easy Order Tracking",
      description: "On time delivery, Pan India, including remote locations; with no headache of tracking and locating the courier.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Handshake,
      title: "Dedicated Service Desk",
      description: "Dedicated Service Desk to keep you updated about the delivery time.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Headphones,
      title: "Dedicated Account Manager",
      description: "Dedicated account manager to handle your new hardware & software requirements.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: ThumbsUp,
      title: "Lowest Price Guaranteed",
      description: "As per your requirement we give you the products that fit's within your budget.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Here's how you benefit by bringing us on-board
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto">
          {/* First 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {benefits.slice(0, 4).map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(benefit.icon, { className: "w-8 h-8 text-white" })}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Last 3 Cards Section */}
          {/* Show as 3 in a grid row for lg+, keep md 2+1 center, mobile stack */}
          <div className="flex justify-center">
            {/* lg+: all three cards in row; md: two cards plus flex-centered one below; sm: stack */}
            {/* lg:grid-cols-3 shows all 3 in one row */}
            <div className="hidden lg:grid grid-cols-3 gap-8 max-w-5xl w-full">
              {benefits.slice(4, 7).map((benefit, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {React.createElement(benefit.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {benefit.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
            {/* md only: two cards + last card centered below */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full lg:hidden">
              {benefits.slice(4, 6).map((benefit, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {React.createElement(benefit.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {benefit.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
              {/* Last card centered only for md, hidden lg+ */}
              <div className="flex justify-center items-center md:col-span-2">
                <motion.div
                  key={6}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (6) * 0.1 }}
                  className="group relative w-full md:max-w-[calc(50%-1rem)]"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefits[6].color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {React.createElement(benefits[6].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {benefits[6].title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefits[6].description}
                    </p>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

