"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import Clients from "@/components/Clients";
import LetsGetInTouch from "@/components/LetsGetInTouch";
import Image from "next/image";
import Link from "next/link";
import { TrophyIcon, SparklesIcon, StarIcon, UsersIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";

const whyItems = [
  { title: "Work with best minds in the industry", meta: "Serving 1000+ active customers" },
  { title: "Team bonding and fun events", meta: "360 degree wellness program" },
  { title: "Supporting aspiring employees beyond work", meta: "Employee welfare activities" },
  { title: "Abundant training & professional development", meta: "Groundbreaking opportunities & exposure" },
  { title: "Featured as dream company to work for", meta: "Positive, inspiring workplace culture" },
];

const allJobs = [
  { title: "Senior / Lead Frontend Engineer (React)", category: "Modern Applications", type: "Full Time", location: "Mumbai", exp: "3+ Years" },
  { title: "Senior Figma UI/UX Designer", category: "Design", type: "Full Time", location: "Mumbai", exp: "3+ Years" },
  { title: "Data Scientist / AI Engineer", category: "Artificial Intelligence", type: "Full Time", location: "Mumbai", exp: "1-4 Yrs" },
  { title: "Business Development Manager – Cloud", category: "Cloud Services", type: "Full Time", location: "Mumbai", exp: "5+ Years" },
  { title: "Cybersecurity Engineer", category: "Cybersecurity", type: "Full Time", location: "Goregaon", exp: "2-4 Yrs" },
  { title: "Commvault Engineer L2", category: "Data Center Practice", type: "Full Time", location: "Belapur", exp: "4-7 Years" },
  { title: "Company Secretary & Legal Assistant", category: "Legal", type: "Full Time", location: "Goregaon", exp: "2-4 Yrs" },
  { title: "Business Development – Application Services", category: "Modern Applications", type: "Full Time", location: "Goregaon", exp: "4-8 Yrs" },
];

export default function CareersPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => ["All", ...Array.from(new Set(allJobs.map(j => j.category)))], []);
  const types = ["All", "Full Time", "Part Time", "Internship"];
  const locations = useMemo(() => ["All", ...Array.from(new Set(allJobs.map(j => j.location)))], []);

  const filtered = useMemo(() => {
    return allJobs.filter(j =>
      (category === "All" || j.category === category) &&
      (type === "All" || j.type === type) &&
      (location === "All" || j.location === location) &&
      (query.trim() === "" || j.title.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query, category, type, location]);

  const perPage = 5;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageJobs = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <Header />

      {/* Hero / Why Work With Us */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-pink-50 animate-gradient-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14 relative">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 tracking-tight animate-fade-in-up">Best jobs in the IT Industry</h1>
          <p className="text-center mt-3 text-xl md:text-3xl font-bold text-blue-700 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Why Work With Us</p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-tr from-blue-400/20 via-purple-300/20 to-pink-300/20 blur-3xl rounded-full animate-float-slow" />
              <div className="relative z-10 rounded-2xl shadow-xl p-2 bg-white/60 backdrop-blur overflow-hidden">
                <div className="animated-media relative rounded-xl overflow-hidden">
                  {/* Light panning grid behind the image */}
                  <div className="absolute inset-0 grid-pan opacity-30" />
                  <Image src="/main-images/networking6.png" alt="Careers Illustration" width={720} height={540} className="rounded-xl object-contain w-full h-full animate-kenburns" />
                  {/* Floating decorative icons to simulate motion */}
                  <span className="pointer-events-none absolute -left-2 top-6 floating-a">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(37,99,235,0.9)" strokeWidth="1.5"><path d="M8.5 16.5a5.5 5.5 0 0 1 7 0"/><path d="M6 14a9 9 0 0 1 12 0"/><path d="M3.5 11.5a13 13 0 0 1 17 0"/><circle cx="12" cy="19" r="1.2" fill="rgba(37,99,235,0.9)"/></svg>
                  </span>
                  <span className="pointer-events-none absolute right-4 bottom-6 floating-b">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.9)" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M10 2v2m4-2v2m0 16v2m-4-2v2M2 10h2m-2 4h2m16-4h2m-2 4h2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41m0-14.14-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
                  </span>
                  <span className="pointer-events-none absolute left-10 bottom-5 floating-c">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(236,72,153,0.9)" strokeWidth="1.5"><path d="M14.5 11.5a2.5 2.5 0 0 1 0 5H9a3 3 0 0 1 0-6 4 4 0 0 1 7.5 1"/></svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {whyItems.map((item, idx) => (
                <div key={idx} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-5 relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-pink-100 rounded-full opacity-60 blur-xl group-hover:scale-125 transition-transform duration-500" />
                  <div className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white grid place-items-center shadow-md group-hover:scale-110 transition-transform">
                      <ArrowRightIcon width={18} />
                    </span>
                    <div>
                      <p className="font-semibold text-blue-900 leading-snug">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.meta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at ENPL */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">Life at ENPL</h2>
        </div>
        <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]" />
          <Image src="/images/networking6.jpg" alt="Team" width={1600} height={900} className="w-full h-[360px] md:h-[420px] object-cover" />
          <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-6">
            <p className="max-w-3xl text-white/90 text-sm md:text-base leading-relaxed animate-fade-in">ENPL is driven by the belief that employees are the backbone of our organisation. We keep our teams happy emotionally, professionally and financially. If we know a candidate is worth it, we don’t hold back on making it happen.</p>
            {/* <div className="mt-6 flex gap-4 md:gap-8">
            </div> */}
          </div>
        </div>
      </section>

      {/* Search Jobs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h3 className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-8">Search Jobs</h3>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
              <div className="relative">
                <input value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} placeholder="Search" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔎</span>
              </div>
              <select value={category} onChange={e => { setCategory(e.target.value); setPage(1); }} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300">
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
              <select value={type} onChange={e => { setType(e.target.value); setPage(1); }} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300">
                {types.map(t => <option key={t}>{t}</option>)}
              </select>
              <select value={location} onChange={e => { setLocation(e.target.value); setPage(1); }} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300">
                {locations.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>

            <div className="mt-4 divide-y divide-gray-100">
              {pageJobs.map((job, i) => (
                <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between gap-2 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 px-2 rounded-xl transition-all">
                  <div>
                    <Link href="#" className="text-blue-700 font-semibold text-base md:text-lg group-hover:underline group-hover:text-blue-800">
                      {job.title}
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1 text-sm text-gray-600">
                    <span className="whitespace-nowrap">{job.category}</span>
                    <span className="whitespace-nowrap">{job.type}</span>
                    <span className="whitespace-nowrap">{job.location}</span>
                    <span className="whitespace-nowrap">{job.exp}</span>
                  </div>
                  <Link href="#" className="text-blue-600 font-medium flex items-center gap-1 hover:text-pink-600">
                    More Details <ArrowRightIcon width={16} />
                  </Link>
                </div>
              ))}
              {pageJobs.length === 0 && (
                <div className="py-10 text-center text-gray-500">No roles match your filters yet.</div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button key={idx} onClick={() => setPage(idx + 1)} className={`px-3 py-1.5 rounded-lg border text-sm transition-all ${page === idx + 1 ? 'bg-pink-600 text-white border-pink-600 shadow-lg' : 'bg-white border-gray-200 hover:border-pink-400 hover:text-pink-600'}`}>{idx + 1}</button>
              ))}
              {page < totalPages && (
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} className="px-3 py-1.5 rounded-lg border bg-white border-gray-200 hover:border-blue-400 hover:text-blue-700 text-sm">
                  Next »
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partners slider reuse */}
      <div className="py-6">
        <Partners />
      </div>

      {/* Clients Section */}
      <div className="py-6">
        <Clients />
      </div>

      {/* Let's Get In Touch Section */}
      <LetsGetInTouch />

      <Footer />

      <style jsx global>{`
        .life-card {
          @apply bg-white/10 text-white px-4 py-3 rounded-2xl shadow-lg backdrop-blur flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all;
        }
        @keyframes gradient-slow {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 0%; }
        }
        .animate-gradient-slow {
          background: linear-gradient(120deg, rgba(59,130,246,0.08), rgba(168,85,247,0.08), rgba(236,72,153,0.08));
          background-size: 200% 200%;
          animation: gradient-slow 16s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        @keyframes fade-in-up { 0%{opacity:0; transform: translateY(30px);} 100% {opacity:1; transform: translateY(0);} }
        .animate-fade-in-up { animation: fade-in-up .9s cubic-bezier(0.23, 1, 0.32, 1); }
        @keyframes fade-in { 0%{opacity:0;} 100%{opacity:1;} }
        .animate-fade-in { animation: fade-in 1.2s ease; }
        .animated-diagonal { background-image: repeating-linear-gradient(45deg, rgba(255,255,255,.12) 0 12px, transparent 12px 24px); background-size: 200% 200%; animation: stripes 8s linear infinite; }
        @keyframes stripes { 0%{background-position:0% 0%;} 100%{background-position:100% 100%;} }

        /* Animated media block for hero image */
        .animated-media { perspective: 900px; }
        .animate-kenburns { animation: kenburns 14s ease-in-out infinite alternate; transform-origin: center; }
        @keyframes kenburns {
          0% { transform: scale(1) translate3d(0,0,0); filter: saturate(100%); }
          100% { transform: scale(1.08) translate3d(0px,-10px,0); filter: saturate(115%); }
        }
        .grid-pan { background-image: linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.12) 1px, transparent 1px); background-size: 24px 24px, 24px 24px; animation: grid-pan 20s linear infinite; }
        @keyframes grid-pan { 0% { background-position: 0 0, 0 0; } 100% { background-position: 240px 240px, 240px 240px; } }
        .floating-a { animation: float-a 6s ease-in-out infinite; }
        .floating-b { animation: float-b 7s ease-in-out infinite; }
        .floating-c { animation: float-c 8s ease-in-out infinite; }
        @keyframes float-a { 0%,100%{ transform: translateY(0) rotate(0deg);} 50%{ transform: translateY(-10px) rotate(6deg);} }
        @keyframes float-b { 0%,100%{ transform: translateY(0) rotate(0deg);} 50%{ transform: translateY(-8px) rotate(-6deg);} }
        @keyframes float-c { 0%,100%{ transform: translateY(0) rotate(0deg);} 50%{ transform: translateY(-12px) rotate(4deg);} }
      `}</style>
    </>
  );
}


