"use client";
import React from "react";
import { motion } from "framer-motion";
import { Monitor, Laptop, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

export default function ProductOverview() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Simple Icon */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="max-w-2xl">
              <img
                src="/main-images/endpoints-img.png"
                alt="Laptops, Desktops, and Mobile Devices"
                className="w-full h-auto rounded-xl ml-10"
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Endpoints for Every Business
              </h2>

              <p className="text-gray-600 text-xl font-semibold mb-6 leading-relaxed">
                Empowering Productivity with Smart Business Devices
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                From ultra-light laptops and high-performance desktops to
                powerful workstations and compact mini PCs — we offer the
                perfect device for every business need. Our experts help you
                choose the right computing solution tailored to your team's
                applications, performance requirements, and workspace design —
                ensuring productivity, reliability, and long-term value.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                As Platinum, Gold & Silver Partners of leading global IT brands,
                we deliver a broad range of enterprise-grade computers designed
                to keep your workforce connected, efficient, and secure.
              </p>
            </div>

            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                GET APPOINTMENT
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
