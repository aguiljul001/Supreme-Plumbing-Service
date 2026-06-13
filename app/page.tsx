'use client';

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  BadgePercent
} from 'lucide-react';

const CAROUSEL_IMAGES = [
  {
    src: '/closed.jpg',
    alt: 'Supreme Plumbing Service Branded Fleet',
    label: 'FLEET VEHICLE 01'
  },
  {
    src: '/open.jpg',
    alt: 'Supreme Plumbing Interior Heavy Contractor Setup',
    label: 'CONTRACTOR GRADE GEAR'
  }
];

// Reusable Elegant Carousel Component
function ImageCarousel({ 
  images, 
  initialSlide = 0 
}: { 
  images: typeof CAROUSEL_IMAGES; 
  initialSlide?: number;
}) {
  const [current, setCurrent] = useState(initialSlide);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay intervals
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="relative w-full aspect-[4/3] md:aspect-[1.1] bg-slate-100 border border-slate-200/90 rounded-2xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              idx === current 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%23f1f5f9'/></svg>";
              }}
            />
            {/* Cinematic Overlay gradient for contrast read */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Badges on Slide */}
      <div className="absolute top-4 left-4 bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 z-20 shadow-sm">
        <p className="text-[9px] font-mono tracking-[0.2em] text-slate-100 font-bold uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
          {images[current].label}
        </p>
      </div>

      {/* Manual Left/Right Controls */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button 
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-white hover:bg-red-600 hover:text-white text-slate-800 flex items-center justify-center backdrop-blur-sm border border-slate-200 shadow-md transition-all duration-200 pointer-events-auto active:scale-95"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-white hover:bg-red-600 hover:text-white text-slate-800 flex items-center justify-center backdrop-blur-sm border border-slate-200 shadow-md transition-all duration-200 pointer-events-auto active:scale-95"
          aria-label="Next image"
        >
          <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicator Bullets */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2.5 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current 
                ? 'w-7 bg-red-600' 
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Structured Schema for E-E-A-T Compliance (Vancouver SEO Ranker)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingContractor",
    "name": "Supreme Plumbing Service",
    "image": ["https://supremeplumbingservice.net/closed.jpg"],
    "telephone": "564-888-3159",
    "email": "chris@supremeplumbingservice.net",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.6277,
      "longitude": -122.6735
    },
    "url": "https://supremeplumbingservice.net",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "17:00"
    },
    "contractorLicense": "SUPREPS747K2",
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans relative overflow-x-hidden selection:bg-red-600 selection:text-white antialiased">
      
      {/* Structural Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* PREMIUM FLOATING PHONE BAR FOR MOBILE USERS (Drives conversions instantly) */}
      <div className="md:hidden fixed bottom-4 right-4 left-4 z-50 animate-bounce">
        <a 
          href="tel:5648883159" 
          className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-black text-lg md:text-xl uppercase px-6 py-5 rounded-2xl shadow-2xl border border-red-500/30 transition-all duration-300"
        >
          CALL NOW
        </a>
      </div>

      {/* 1. TOP PROFESSIONAL NAV HEADER - Fully Spaced & Cleaned */}
      <header className="border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 min-h-[6.5rem] sm:min-h-[7.5rem] flex items-center justify-between gap-6 flex-wrap md:flex-nowrap">
          
          {/* Elite Modern Brand Name & Logo Lockup with matching brand colors */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-5 group cursor-pointer select-none"
          >
            {/* Nav Mini Logo Badge (Larger and fully optimized) */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.03] shrink-0">
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src="/logo.jpg" 
                  alt="Supreme Plumbing Service Logo" 
                  className="absolute inset-0 w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = parent.querySelector('.nav-logo-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="nav-logo-fallback hidden flex flex-col items-center justify-center text-center">
                  <span className="text-red-600 font-extrabold text-[13px] sm:text-lg tracking-tighter leading-none">SUPREME</span>
                  <span className="text-[7px] sm:text-[9px] font-bold text-slate-800 tracking-[0.15em] mt-0.5">PLUMBING</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 opacity-90 transition-all duration-300">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_#dc2626]" />
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-slate-500 font-black uppercase leading-none">LICENSED · BONDED · INSURED</span>
              </div>
              <div className="text-base sm:text-xl font-black tracking-tight text-slate-900 mt-1 uppercase group-hover:text-red-600 transition-colors duration-300">
                SUPREME <span className="text-red-600 group-hover:text-blue-950 transition-colors duration-300">PLUMBING SERVICE</span>
              </div>
              <p className="text-[10.5px] text-slate-400 font-medium tracking-wide mt-0.5 hidden xs:block">
                VANCOUVER, WA & CLARK COUNTY METRO
              </p>
            </div>
          </div>

          {/* Desktop Navigation Anchors - Enhances look & feel of a premier portal */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-black tracking-wider uppercase text-slate-600">
          </nav>
          
          {/* HEADER ACTION CONTACT SECTION */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end justify-center text-right text-xs">
              <a href="mailto:chris@supremeplumbingservice.net" className="hidden sm:flex items-center gap-1.5 text-slate-600 hover:text-red-600 transition-colors font-semibold">
                <Mail className="w-3.5 h-3.5 text-red-600" />
                chris@supremeplumbingservice.net
              </a>
              <a href="tel:5648883159" className="flex items-center gap-1.5 bg-red-600/5 sm:bg-transparent border border-red-500/10 sm:border-transparent px-3 py-1.5 sm:py-0 rounded-xl text-slate-900 hover:text-red-600 transition-colors sm:mt-1 font-mono font-black text-sm">
                <Phone className="w-3.5 h-3.5 text-red-600 animate-pulse shrink-0" />
                564-888-3159
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-20 relative z-10 space-y-28 sm:space-y-40">
        
        {/* 2. CINEMATIC HERO SECTION - BALANCED 2-COLUMN LUXURY LAYOUT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-2 sm:pt-4">
          
          {/* COLUMN 1 (lg:col-span-7) - HERO LEFT BLOCK: TEXT, BADGES, AND HEADLINES WITH MASSIVE INTEGRATED CREST */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Visual Brand Crest Logo Row + Badges */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              
              {/* Dynamic Badges and Top Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 max-w-2xl">
                <span className="bg-slate-100 text-slate-800 border border-slate-200/90 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  SW Washington's Premier Plumber
                </span>
                <span className="bg-red-50 border border-red-200/80 px-4 py-2 rounded-full text-[10px] sm:text-xs font-black tracking-wider text-red-600 uppercase inline-flex items-center gap-1.5 shadow-sm">
                  <BadgePercent className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  WE WILL BEAT ANY REASONABLE ESTIMATE
                </span>
              </div>
            </div>

            {/* Side-by-Side Logo and Title Brand Panel */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-2">
              {/* Logo container placed to the left */}
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center transition-all duration-300 hover:scale-[1.03] select-none shrink-0">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src="/logo.jpg" 
                    alt="Supreme Plumbing Service Logo Brand Crest" 
                    className="absolute inset-0 w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = parent.querySelector('.hero-logo-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="hero-logo-fallback hidden flex flex-col items-center justify-center text-center p-2">
                    <span className="text-red-600 font-extrabold text-2xl sm:text-3xl tracking-tighter">SUPREME</span>
                    <span className="text-[8px] sm:text-[10px] font-bold text-slate-800 tracking-[0.2em] mt-1">PLUMBING</span>
                  </div>
                </div>
              </div>

              {/* Cinematic Large Typography Segment */}
              <div className="space-y-2 text-center sm:text-left">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 uppercase leading-none select-none flex flex-col gap-1 sm:items-start items-center">
                  <span className="text-blue-950 hover:text-red-600 transition-colors duration-300">SUPREME</span>
                  <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent filter hover:brightness-110 transition-all duration-300">
                    PLUMBING
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.4em] text-slate-400 mt-2 hover:text-slate-600 transition-colors duration-300">
                    SERVICE
                  </span>
                </h1>
              </div>
            </div>

            {/* Descriptive Content and Dynamic CTA Buttons */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
                Vancouver’s trusted home plumbing specialist. From expert high-efficiency tankless water heaters to complete repiping upgrades, custom kitchen fixtures, and responsive diagnostic leaks, we deliver supreme technical skill backed by over a decade of real-world experience. We are fully licensed, bonded, and insured.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 max-w-lg mx-auto lg:mx-0 pt-2">
                <a 
                  href="tel:5648883159"
                  className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-black tracking-wider px-8 py-5 rounded-2xl shadow-md hover:shadow-[0_8px_25px_rgba(220,38,38,0.35)] hover:scale-[1.02] active:scale-[0.98] uppercase transition-all duration-300 cursor-pointer"
                >
                  CALL FOR FREE ESTIMATE
                </a>
                <button 
                  onClick={() => handleScrollTo('experience')}
                  className="w-full sm:w-auto text-center border-2 border-blue-950/20 text-blue-950 bg-white text-xs font-black tracking-wider px-8 py-5 rounded-2xl hover:bg-slate-50 hover:border-blue-950 hover:scale-[1.02] active:scale-[0.98] uppercase transition-all duration-300 cursor-pointer"
                >
                  WHY CHOOSE CHRIS
                </button>
              </div>

              {/* Small inline bullet marks */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  100% Satisfaction Guarantee
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 2 (lg:col-span-5) - HERO RIGHT COLUMN: HIGH RESOLUTION PICTURE SLIDER CAROUSEL */}
          <div className="lg:col-span-5 relative order-2 mt-4 lg:mt-0">
            <div className="p-1.5 border border-slate-200/70 rounded-3xl bg-slate-50 shadow-sm">
              <ImageCarousel images={CAROUSEL_IMAGES} initialSlide={0} />
            </div>
            

          </div>

        </section>





        {/* 5. TWO-COLUMN EXPERIENCE SHOWCASE & COMPREHENSIVE TEXT */}
        <section id="experience" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-red-600 text-xs font-mono font-black tracking-widest uppercase block">
                Vancouver, WA Registered Contractor
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                A DECADE OF DELIVERING SUPERIOR CRAFTSMANSHIP
              </h2>
              <div className="h-1.5 w-20 bg-red-600 rounded-full" />
            </div>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Supreme Plumbing Service is built on a foundation of uncompromising integrity, transparent communication, and master-level craftsmanship. Led by lead technician Chris, we specialize in everything from the integration of high-efficiency smart appliances to complex, master-layout bathroom remodels. We refuse to compromise on the fundamentals—ensuring every line is perfectly square, rigorously pressure-tested, and fully compliant with Washington regional codes. When you work with us, you are investing in lasting structural quality and absolute peace of mind.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200/80 p-4 sm:p-6 rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.01]">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">10+ Years</div>
                <div className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mt-1">Clark County Field Experience</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 p-4 sm:p-6 rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.01] flex flex-col justify-center">
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight uppercase">
                  SUPREPS747K2
                </div>
                <div className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mt-1">WA State license ID</div>
              </div>
            </div>

            {/* List block */}
            <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-5 sm:p-6 space-y-4">
              <h3 className="text-[10px] font-mono tracking-[0.2em] text-slate-500 font-bold uppercase">SERVICE GUARANTEE PROFILE</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" /> Fast Local Arrival
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" /> Transparent Pricing Book
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" /> Trade-Grade Lead Fittings
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" /> 100% Cleanup Certified
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Showcase Carousel (Fully functional starting on slide 1) */}
          <div className="lg:col-span-5 relative w-full lg:mt-0">
            <div className="p-1.5 border border-slate-200/70 rounded-3xl bg-slate-50 shadow-sm">
              <ImageCarousel images={CAROUSEL_IMAGES} initialSlide={1} />
            </div>
          </div>

          </section>

      </main>

      {/* 7. HIGH-FIDELITY FOOTER WITH ACTIVE STATE OPERATIONS WIDGET */}
      <footer className="border-t border-slate-200 bg-slate-50 mt-16 sm:mt-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-sm text-slate-600">
          
          {/* Column 1: Institutional info */}
          <div className="space-y-4">
            <div className="text-slate-900 font-black tracking-tight text-lg uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              SUPREME PLUMBING <span className="text-red-600 font-bold text-sm">SERVICE</span>
            </div>
            <p className="font-medium leading-relaxed text-xs text-slate-500">
              Delivering high-reliability commercial-grade mechanical infrastructure solutions for luxury residential builds and local commercial properties throughout SW Washington.
            </p>
            <div className="inline-block bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-[10px] sm:text-[11px] font-mono tracking-wider font-extrabold text-slate-700 shadow-sm">
              WA REGISTRY LICENSE: SUPREPS747K2
            </div>
          </div>

          {/* Columns 2-3: Operational Dashboard Area */}
          <div className="md:col-span-2 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-4 gap-4">
              <div>
                <h3 className="text-slate-900 font-bold text-sm uppercase">Active Dispatch & Business Registry</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Working Windows */}
              <div className="space-y-3">
                <div className="text-slate-500 font-bold tracking-wider text-[11px] uppercase">OPERATING DISPATCH WINDOWS</div>
                <div className="space-y-2">
                  
                  {/* Mon - Fri */}
                  <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-3.5 py-2.5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="text-slate-700 font-mono text-[11px] font-bold">Mon - Fri</span>
                    </div>
                    <span className="text-slate-900 font-black font-mono text-[11px]">7:00 AM - 5:00 PM</span>
                  </div>

                  {/* Saturday */}
                  <div className="flex items-center justify-between bg-slate-50/50 border border-slate-100/50 rounded-xl px-3.5 py-2.5 opacity-60">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <span className="text-slate-500 font-mono text-[11px]">Saturday</span>
                    </div>
                    <span className="text-slate-500 font-bold font-mono text-[11px]">CLOSED</span>
                  </div>

                  {/* Sunday */}
                  <div className="flex items-center justify-between bg-slate-50/50 border border-slate-100/50 rounded-xl px-3.5 py-2.5 opacity-60">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <span className="text-slate-500 font-mono text-[11px]">Sunday</span>
                    </div>
                    <span className="text-slate-500 font-bold font-mono text-[11px]">CLOSED</span>
                  </div>

                </div>
              </div>

              {/* Compliance registry card */}
              <div className="space-y-3">
                <div className="text-slate-500 font-bold tracking-wider text-[11px] uppercase">SECURITY & REGULATORY STATUS</div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-3.5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-slate-900 text-xs font-black uppercase">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      Fully Bonded WA State
                    </div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded px-2.5 py-1 text-[10px] font-mono tracking-wider text-slate-600 flex justify-between items-center shadow-sm">
                    <span className="text-slate-400 font-bold">STATE BOARD ID:</span>
                    <span className="text-slate-900 font-black">SUPREPS747K2</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Brand foot imprint links */}
        <div className="border-t border-slate-200 py-6 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] sm:text-sm font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Supreme Plumbing Service. SW Washington’s Premier Plumbing Resource. UI Architecture by 360 AI Studios.
          </div>
          <div className="flex gap-6">
            <a href="tel:5648883159" className="hover:text-red-600 transition-colors">Dispatch: 564-888-3159</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
