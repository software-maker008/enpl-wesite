"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const menu = [
  // { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // { label: "Solutions", href: "/solutions" },

  

  // {
  //   label: "Products", href: "/products/devices" ,
  // },


  {
    label: "Solutions",
    href: "/solutions"
  },



  {
    label: "Services",
    dropdown: [
      { label: "IT Consulting", href: "/consulting/it" },
      // { label: "Software & Automation Consulting", href: "/consulting/software-automation" },
      { label: "Managed Services", href: "/managed-services/support/onsite" },
    ],
  },



  {
    label: "Software Solutions",
    href: "/solutions/softwares"
  },
  
  {
    label: "End Points",
    dropdown: [
      { label: "Endpoint Devices", href: "/end-points/laptops-desktops-mobile" },
      { label: "Endpoint Protection", href: "/end-points/iot-security" },
      ]
  },

  // { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
  
];

function Dropdown({ items, isResources, parentRect }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [submenuRect, setSubmenuRect] = useState(null);
  const containerRef = React.useRef();
  const pathname = usePathname();

  // For portals: get navbar root
  const navbarRoot = typeof window !== 'undefined' ? document.body : null;

  // Function to check if a menu item is active
  const isActive = (href) => {
    if (!href) return false;
    // Only show as active if we're exactly on that page, not on parent pages
    const isCurrentlyActive = pathname === href;
    return isCurrentlyActive;
  };

  // Helper to get bounding rect for submenu positioning
  const handleMouseEnter = (idx, e) => {
    setOpenIndex(idx);
    if (e && e.currentTarget) {
      setSubmenuRect(e.currentTarget.getBoundingClientRect());
    }
  };

  // Only top-level Resources gets scroll
  const isTopLevelResources = isResources;
  return (
    <div
      ref={containerRef}
      className={`absolute left-0 top-full min-w-[220px] bg-white rounded-lg shadow-xl border border-gray-100 z-[9999] animate-fade-in transition-all duration-300 ${isTopLevelResources ? 'max-h-[300px] overflow-y-auto' : ''}`}
      style={isTopLevelResources ? { overscrollBehavior: 'contain' } : {}}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative"
          onMouseEnter={e => handleMouseEnter(idx, e)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          {item.dropdown ? (
            <>
              <button
                className="w-full text-left px-4 py-3 font-medium text-gray-900 flex items-center justify-between rounded-md transition-all duration-300 hover:bg-purple-50 hover:text-purple-600 group"
                style={{ boxShadow: openIndex === idx ? '0 2px 8px rgba(0,0,0,0.08)' : undefined }}
              >
                {item.label}
                <span
                  className={`ml-2 transition-transform duration-300 ease-in-out ${openIndex === idx ? ((item.label === 'Cloud Solutions' || item.label === 'Cloud') ? 'rotate-' : 'translate-y-1') : ''}`}
                  style={{ display: 'inline-block' }}
                >
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              {/* For Commvault and similar, render submenu as portal to avoid clipping by scroll */}
              {openIndex === idx && item.label === 'Commvault' && navbarRoot && submenuRect
                ? createPortal(
                    <div
                      className="absolute min-w-[200px] bg-white rounded-lg shadow-xl border border-gray-100 animate-fade-in transition-all duration-300 z-[9999]"
                      style={{
                        position: 'fixed',
                        top: submenuRect.top,
                        left: submenuRect.right - 4,
                      }}
                    >
                      <Dropdown items={item.dropdown} isResources={false} />
                    </div>,
                    navbarRoot
                  )
                : openIndex === idx && (
                    <div
                      className="absolute left-full top-0 min-w-[200px] bg-white rounded-lg shadow-xl border border-gray-100 animate-fade-in transition-all duration-300 z-[9999]"
                      style={{ marginLeft: '-4px' }}
                    >
                      <Dropdown items={item.dropdown} isResources={false} />
                    </div>
                  )}
            </>
          ) : (
            <Link href={item.href || "#"}>
              <span className={`block px-4 py-3 font-medium transition-colors duration-200 cursor-pointer rounded-md relative
                ${isActive(item.href) ? "text-purple-600 bg-purple-50" : "text-gray-900 hover:text-purple-600"}`}>
                {item.label}
              </span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null);
  const pathname = usePathname();

  // Function to check if a menu item is active
  const isActive = (href) => {
    if (!href) return false;
    return pathname === href;
  };

  // Function to check if any dropdown item is active
  const isDropdownActive = (dropdownItems) => {
    if (!dropdownItems) return false;
    // Only show as active if we're actually on one of the dropdown pages
    return dropdownItems.some(item => {
      if (item.dropdown) {
        return isDropdownActive(item.dropdown);
      }
      // Check if current pathname matches the dropdown item href
      return pathname === item.href;
    });
  };

  // Function to check if we're on a specific dropdown section
  const isOnDropdownSection = (dropdownItems) => {
    if (!dropdownItems) return false;
    return dropdownItems.some(item => {
      if (item.dropdown) {
        return isOnDropdownSection(item.dropdown);
      }
      // Check if current pathname starts with the dropdown item href
      return pathname.startsWith(item.href);
    });
  };
  return (
    <>
    <nav className="w-full bg-gradient-to-r from-white via-blue-50 to-pink-50 shadow-lg border-b border-gray-100 sticky top-0 z-50 overflow-x-hidden md:overflow-visible">
      <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 group/logo cursor-pointer select-none flex-shrink-0 max-w-[60%] md:max-w-none">
          <div className="relative flex-shrink-0">
            <img
              src="/icons/Enpl-logo.jpeg"
              alt="ENPL Logo"
              className="h-6 w-6 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-8 lg:w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 drop-shadow-lg rounded-full border-2 border-blue-100 group-hover/logo:border-blue-400 group-hover/logo:shadow-xl transition-all duration-300 ease-in-out group-hover/logo:scale-110 group-hover/logo:rotate-3"
              style={{ boxShadow: '0 4px 16px 0 rgba(30,64,175,0.08)' }}
            />
            {/* Real-time shine effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-logo-shine-sweep"></div>
            </div>
          </div>
          <div className="min-w-0">
            <span
              className="font-extrabold text-sm sm:text-xl md:text-2xl lg:text-sm xl:text-lg 2xl:text-2xl tracking-tight bg-gradient-to-r from-blue-900 via-blue-500 to-pink-500 bg-clip-text text-transparent group-hover/logo:from-pink-600 group-hover/logo:to-blue-700 group-hover/logo:scale-110 group-hover/logo:drop-shadow-lg transition-all duration-300 ease-in-out animate-gradient-x block whitespace-normal break-words sm:truncate"
              style={{ letterSpacing: '0.02em' }}
            >
              Electrohelps Networks
            </span>
            <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-[9px] xl:text-sm text-gray-600 group-hover/logo:text-gray-700 transition-colors duration-300 truncate">
              Solution | Cloud | Consult | Assist
            </p>
          </div>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-2 xl:gap-3 2xl:gap-4 items-center flex-1 justify-end ml-4 xl:ml-6 2xl:ml-8 min-w-0">
          {menu.map((item, idx) =>
            item.dropdown ? (
              <div
                key={idx}
                className="relative group flex items-center flex-shrink-0"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{ position: 'relative' }}
              >
                <button
                  className={`px-2 xl:px-3 py-2 font-semibold text-xs xl:text-sm 2xl:text-base rounded-lg transition-all duration-300 bg-transparent border border-transparent flex items-center whitespace-nowrap relative
                    ${activeDropdown === idx || isDropdownActive(item.dropdown) ? "text-purple-600" : "text-gray-900"}
                    hover:text-purple-600
                    focus:outline-none focus:ring-2 focus:ring-purple-300`}
                >
                  {item.label}
                  <span
                    className={`ml-1 transition-transform duration-300 ease-in-out ${activeDropdown === idx ? (item.label === 'Cloud Solutions' ? 'rotate-270' : 'translate-y-1') : ''}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {/* Clean underline effect for dropdown links when active */}
                  <span className={`absolute bottom-0 left-2 xl:left-3 right-2 xl:right-3 h-0.5 bg-purple-600 transform transition-all duration-300 ${
                    isDropdownActive(item.dropdown) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
                {activeDropdown === idx && (
                  <div className="absolute top-full left-0 z-[9999] navbar-dropdown">
                    <Dropdown items={item.dropdown} isResources={item.label === 'Resources'} />
                  </div>
                )}
              </div>
            ) : (
                              <Link key={idx} href={item.href || "#"}>
                <span className={`group px-2 xl:px-3 py-2 font-semibold text-xs xl:text-sm 2xl:text-base rounded-lg transition-all duration-300 bg-transparent border border-transparent cursor-pointer flex items-center whitespace-nowrap flex-shrink-0 relative
                  ${isActive(item.href) ? "text-purple-600" : "text-gray-900"}
                  hover:text-purple-600
                  focus:outline-none focus:ring-2 focus:ring-purple-300`}>
                  {item.label}
                  {/* Clean underline effect for main navbar links only */}
                  <span className={`absolute bottom-0 left-2 xl:left-3 right-2 xl:right-3 h-0.5 bg-purple-600 transform transition-all duration-300 ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </span>
              </Link>
            )
          )}
        </div>
        {/* Actions: Contact Dropdown - always visible */}
        <div className="flex items-center gap-2 sm:gap-4 xl:gap-6 ml-2 sm:ml-4">
          {/* Contact Dropdown */}
          <div className="relative group/contact">
            <button
              className="bg-gradient-to-r from-blue-900 via-blue-500 to-pink-500 text-white px-1.5 sm:px-3 xl:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg transition-all duration-500 text-[9px] sm:text-xs xl:text-sm font-semibold whitespace-nowrap flex-shrink-0 hover:from-pink-600 hover:to-blue-700 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-300  group-hover/contact:shadow-blue-200 group-hover/contact:ring-4 group-hover/contact:ring-blue-300/30 transform hover:-translate-y-1"  
              style={{ backgroundSize: '200% 200%' }}
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="sm:hidden">Contact</span>
                <span className="hidden sm:inline">Get in Touch</span>
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-300 group-hover/contact:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            {/* Dropdown Menu */}
            <div className="fixed sm:absolute left-2 right-2 sm:left-auto sm:right-2 top-14 lg:top-full mt-2 lg:mt-2 w-72 sm:w-80 mx-auto bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover/contact:opacity-100 group-hover/contact:visible transition-all duration-500 transform scale-95 group-hover/contact:scale-100 lg:translate-y-2 lg:group-hover/contact:translate-y-0 z-[100000] max-h-[70vh] overflow-auto">
              {/* Arrow */}
              <div className="hidden lg:block absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
              
              <div className="p-6 space-y-6">
                {/* Phone Number Section */}
                <div className="group/phone">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover/phone:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover/phone:text-purple-600 transition-colors duration-300">Phone</h3>
                  </div>
                  <div className="ml-11 space-y-2">
                    <a href="mailto:support@ehsnetworks.in" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover/support:translate-x-1 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">sales@ehsnetworks.in</span>
                    </a>
                    <a href="tel:02240244440" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-300 group-hover/phone:translate-x-1 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm font-semibold">022-4024-4440</span>
                    </a>
                  </div>
                </div>

                {/* Support Section */}
                <div className="group/support">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover/support:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover/support:text-blue-600 transition-colors duration-300">Support</h3>
                  </div>
                  <div className="ml-11 space-y-2">
                    <a href="mailto:support@ehsnetworks.in" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover/support:translate-x-1 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">support@ehsnetworks.in</span>
                    </a>
                    <a href="tel:+917718811747" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover/support:translate-x-1 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm font-semibold">+91 771-8811-747</span>
                    </a>
                    <a href="tel:+917718823606" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover/support:translate-x-1 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm font-semibold">+91 771-8823-606</span>
                    </a>
                  </div>
                </div>
                </div>
            </div>
          </div>
          {/* Hamburger for mobile and tablet */}
          <button
            className="ml-2 p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none lg:hidden"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) {
                setActiveDropdown(null);
                setMobileSubDropdown(null);
              }
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>
             {/* Mobile & Tablet Menu Drawer */}
       {mobileMenuOpen && (
         <div className="lg:hidden w-full bg-white border-t border-gray-200 shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto backdrop-blur-sm bg-white/95">
                     <div className="flex flex-col gap-2 py-3 px-4">
                         {menu.map((item, idx) =>
               item.dropdown ? (
                 <div key={idx} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                                     <button
                     className={`w-full text-left px-3 py-3 font-semibold text-base rounded-lg transition-all duration-500 bg-transparent border border-transparent flex items-center justify-between relative
                       hover:bg-purple-50 hover:text-purple-600
                       focus:outline-none focus:ring-2 focus:ring-purple-300 group
                       ${isDropdownActive(item.dropdown) ? "text-purple-600 bg-purple-50" : ""}`}
                     onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                   >
                    {item.label}
                                         <span className={`ml-1 transition-transform duration-500 ease-in-out ${activeDropdown === idx ? 'rotate-180' : ''} group-hover:scale-110`}>
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                                     {activeDropdown === idx && (
                     <div className="mt-1 ml-4 border-l-2 border-blue-200 pl-4 animate-fade-in-up">
                      {item.dropdown.map((subItem, subIdx) => (
                        <div key={subIdx} className="mb-2">
                          {subItem.dropdown ? (
                                                         <div className="relative">
                               <button
                                 className="w-full text-left px-3 py-2 font-medium text-sm rounded-md transition-all duration-500 bg-transparent border border-transparent flex items-center justify-between hover:bg-purple-50 hover:text-purple-600 hover:shadow-md hover:scale-105  focus:outline-none focus:ring-2 focus:ring-purple-300 group"
                                 onClick={() => setMobileSubDropdown(mobileSubDropdown === `${idx}-${subIdx}` ? null : `${idx}-${subIdx}`)}
                               >
                                {subItem.label}
                                                                 <span className={`ml-1 transition-transform duration-500 ease-in-out ${mobileSubDropdown === `${idx}-${subIdx}` ? 'rotate-180' : ''} group-hover:scale-110`}>
                                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </span>
                              </button>
                                                             {mobileSubDropdown === `${idx}-${subIdx}` && (
                                 <div className="mt-1 ml-4 border-l-2 border-gray-200 pl-4 animate-fade-in-up">
                                  {subItem.dropdown.map((subSubItem, subSubIdx) => (
                                                                         <Link key={subSubIdx} href={subSubItem.href || "#"}>
                                       <span className={`block px-3 py-2 text-sm transition-all duration-300 cursor-pointer rounded-md relative
                                         ${isActive(subSubItem.href) ? "text-purple-600 bg-purple-50" : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"}`}>
                                         <span className="relative z-10">{subSubItem.label}</span>
                                       </span>
                                     </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                                                         <Link href={subItem.href || "#"}>
                               <span className={`block px-3 py-2 font-medium text-sm transition-all duration-300 cursor-pointer rounded-md relative
                                 ${isActive(subItem.href) ? "text-purple-600 bg-purple-50" : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"}`}>
                                 <span className="relative z-10">{subItem.label}</span>
                               </span>
                             </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                             ) : (
                 <Link key={idx} href={item.href || "#"}>
                   <span className={`group block px-3 py-3 font-semibold text-base rounded-lg transition-all duration-500 bg-transparent border border-transparent cursor-pointer relative
                     hover:text-purple-600 hover:bg-purple-50
                     focus:outline-none focus:ring-2 focus:ring-purple-300 animate-fade-in-up
                     ${isActive(item.href) ? "text-purple-600 bg-purple-50" : "text-gray-900"}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                     {item.label}
                     {/* Clean underline effect for mobile main navbar links only */}
                     <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-purple-600 transform transition-all duration-300 ${
                       isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                     }`}></span>
                   </span>
                 </Link>
               )
            )}
          </div>
        </div>
      )}
    </nav>
      
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
        
        /* Premium Logo Animations */
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.6 }
          50% { transform: translateY(-8px) rotate(180deg) scale(1.2); opacity: 1 }
        }
        .animate-float-1 { animation: float-1 3s ease-in-out infinite; }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4 }
          50% { transform: translateY(-6px) scale(1.1); opacity: 0.8 }
        }
        .animate-float-2 { animation: float-2 4s ease-in-out infinite 0.5s; }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5 }
          50% { transform: translateY(-10px) scale(1.3); opacity: 0.9 }
        }
        .animate-float-3 { animation: float-3 5s ease-in-out infinite 1s; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }

        /* Moving Shine Animations - Right to Left */
        @keyframes logo-shine-sweep {
          0% { transform: translateX(100%) translateY(-100%) rotate(45deg) scale(150%); }
          100% { transform: translateX(-100%) translateY(100%) rotate(45deg) scale(150%); }
        }
        .animate-logo-shine-sweep { 
          animation: logo-shine-sweep 3s ease-in-out infinite; 
        }

        @keyframes text-shine-sweep {
          0% { transform: translateX(100%) translateY(-100%) rotate(45deg) scale(150%); }
          100% { transform: translateX(-100%) translateY(100%) rotate(45deg) scale(150%); }
        }
        .animate-text-shine-sweep { 
          animation: text-shine-sweep 4s ease-in-out infinite 0.5s; 
        }

        @keyframes tagline-shine-sweep {
          0% { transform: translateX(100%) translateY(-100%) rotate(45deg) scale(150%); }
          100% { transform: translateX(-100%) translateY(100%) rotate(45deg) scale(150%); }
        }
        .animate-tagline-shine-sweep { 
          animation: tagline-shine-sweep 5s ease-in-out infinite 1s; 
        }

        /* Gradient text support */
        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Ensure dropdowns are always on top */
        .navbar-dropdown {
          position: absolute !important;
          z-index: 99999 !important;
          pointer-events: auto !important;
        }
      `}</style>
    </>
  );
}
