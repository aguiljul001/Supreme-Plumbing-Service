'use client';

import React, { useState } from 'react';

export default function Home() {
  // Fixed image paths to strictly match required system blueprints (.png)
  const [heroImgSrc] = useState('/van-closed.png');
  const [servicesImgSrc] = useState('/van-open.png');

  // Programmatic E-E-A-T Structured Schema for Google Maps/Local Injection
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingContractor",
    "name": "Supreme Plumbing Service",
    "image": ["https://supremeplumbingservice.net/van-closed.png"],
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
    <div className="min-h-screen bg-[#0A111C] text-white font-sans relative overflow-x-hidden selection:bg-red-600 selection:text-white">
      
      {/* Structural Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Premium Ambient Radial Glow Layer */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[130px] pointer-events-none" />

      {/* 1. TOP UTILITY HEADER */}
      <header className="border-b border-white/[0.05] bg-[#0A111C]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.2em] text-slate-400 font-bold uppercase">LICENSED, BONDED, AND INSURED</span>
            <div className="text-sm font-black tracking-wider leading-none text-white mt-1">
              PLUMBING<br/><span className="text-red-500 text-xs tracking-widest font-medium">SERVICE</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end justify-center text-xs">
            <a href="mailto:chris@supremeplumbingservice.net" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              chris@supremeplumbingservice.net
            </a>
            <a href="tel:5648883159" className="flex items-center gap-1.5 text-slate-200 hover:text-red-500 transition-colors mt-1 font-mono font-bold">
              <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              564-888-3159
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10 space-y-32">
        
        {/* 2. CINEMATIC HERO SECTION (Fulfill Exact 3-Column Requirement) */}
        <section className="grid grid-cols-1 lg:grid-cols-4 items-center gap-8 pt-8">
          
          {/* LEFT COLUMN: Desktop Only Glass Wrench Graphic */}
          <div className="hidden lg:flex flex-col items-center justify-center bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 text-center lg:col-span-1">
            <svg viewBox="0 0 24 24" class="w-16 h-16 text-slate-300 drop-shadow-[0_4px_12px_rgba(255,255,255,0.1)] animate-pulse" fill="currentColor">
              <path d="M21.5 3.5c-.8-.8-2-1-3-.5l-2.7 1.4-1.7-1.7a1 1 0 00-1.4 0l-1.5 1.5a1 1 0 000 1.4l1.2 1.2-4.5 4.5-2-2a1 1 0 00-1.4 0l-3 3a1 1 0 000 1.4l1.2 1.2L2.2 18c-.3.3-.3.8 0 1.1l1.4 1.4c.3.3.8.3 1.1 0l3.1-3.1 1.2 1.2a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-2-2 4.5-4.5 1.2 1.2a1 1 0 001.4 0l1.5-1.5a1 1 0 000-1.4l-1.7-1.7 1.4-2.7c.5-1 .3-2.2-.5-3zM7.5 15.3l-1.6-1.6 2.3-2.3 1.6 1.6-2.3 2.3zm8.2-6.2l-4.5 4.5-1.6-1.6 4.5-4.5 1.6 1.6z"/>
            </svg>
            <span className="text-white font-black text-xs tracking-widest mt-4 uppercase">CONTRACTOR GRADE</span>
            <span className="text-slate-400 text-[10px] tracking-wider font-mono mt-1">100% Lifetime Performance</span>
          </div>

          {/* CENTER COLUMN: Central Lockup Copy */}
          <div className="lg:col-span-2 text-center space-y-6">
            <div className="space-y-3">
              <span className="bg-white/[0.04] backdrop-blur-md border border-white/[0.08] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-slate-300 uppercase inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                SW Washington's Premier Plumber
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                SUPREME PLUMBING
              </h1>
              <div className="inline-block bg-gradient-to-r from-red-600 to-rose-600 text-white font-black px-8 py-2 rounded-xl text-lg uppercase tracking-widest shadow-lg transform -skew-x-6">
                SERVICE
              </div>
            </div>

            <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-xl mx-auto">
              As Vancouver's trusted local mechanical specialist, we deliver pristine commercial-grade craftsmanship directly to your residential project. Backed by over a decade of verified on-site experience.
            </p>

            {/* High Converting Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <a href="tel:5648883159" className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-black tracking-wider px-6 py-4 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all transform hover:-translate-y-0.5 uppercase">
                REQUEST FREE ESTIMATE
              </a>
              <a href="mailto:chris@supremeplumbingservice.net" className="w-full sm:w-auto text-center border border-white/20 text-white text-xs font-black tracking-wider px-6 py-4 rounded-xl hover:bg-white/[0.04] transition-all uppercase">
                CONNECT WITH CHRIS
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Closed Van Image Block */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute inset-0 bg-red-600/10 rounded-2xl filter blur-xl pointer-events-none" />
            <div className="relative w-full aspect-[4/5] bg-slate-900/40 border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={heroImgSrc} 
                alt="Supreme Plumbing Service Branded Fleet" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%230f172a'/></svg>";
                }}
              />
              <div className="absolute bottom-4 left-4 bg-[#0A111C]/80 backdrop-blur-md px-3 py-1 rounded-xl border border-white/[0.05]">
                <p className="text-[9px] font-mono tracking-widest text-slate-300">FLEET VEHICLE 01</p>
              </div>
            </div>
          </div>

        </section>

        {/* 3. TWO-COLUMN SERVICE GRID & EQUIPMENT SHOWCASE */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
          
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
              <span className="text-red-500 text-xs font-mono font-bold tracking-widest uppercase">Serving Vancouver & Surrounding Areas</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                A Decade of Trusted Experience
              </h2>
              <div className="h-1 w-20 bg-red-600 rounded-full" />
            </div>
            
            <p className="text-slate-300 leading-relaxed font-light">
              We specialize in elite water heater installations, complex infrastructure renovations, and precise diagnostic operations across the Vancouver, WA metro region. No shortcuts, no compromise on local safety codes—just clean, long-lasting structural integrity.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-black text-white">10+ Years</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Local Service</div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-black text-emerald-400">VERIFIED</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">LICENSED PRO</div>
              </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-mono tracking-widest text-slate-400 uppercase">SERVICES CATALOG</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Water Heaters Service
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Contractor and Plumbing Service
                </li>
              </ul>
              <div className="pt-2 border-t border-white/[0.05] text-xs text-slate-400 font-mono">
                Direct Dispatch: chris@supremeplumbingservice.net
              </div>
            </div>
          </div>

          {/* Right Side: Open Van Interior Showcase */}
          <div className="order-1 lg:order-2 relative w-full aspect-[4/3] bg-slate-900/40 border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src={servicesImgSrc} 
              alt="Supreme Plumbing Interior Heavy Contractor Setup" 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%230f172a'/></svg>";
              }}
            />
            <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full backdrop-blur-md">
              <p className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">Contractor Grade Gear</p>
            </div>
          </div>

        </section>

        {/* 4. GOOGLE TRUST & COMPLIANCE BLOCK */}
        <section className="flex justify-center">
          <div className="w-full max-w-4xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase inline-block mb-4">
              GOOGLE TRUST & COMPLIANCE
            </span>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4 text-white">
              VERIFY OUR REAL CUSTOMER RATING
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto font-light text-sm md:text-base mb-8">
              Transparency matters. Click the button below to review our verified regional service records, checkout customer mapping, or write your review live on Google Maps.
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-white text-black font-black px-8 py-3.5 rounded-xl text-sm tracking-wider uppercase hover:bg-slate-100 transition-colors shadow-lg"
            >
              Open Live Google Profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

      </main>

      {/* 5. FOOTER ARCHITECTURE */}
      <footer className="border-t border-white/[0.05] bg-[#0A111C] mt-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-slate-400">
          
          {/* Column 1: Brand & License */}
          <div>
            <div className="text-white font-black tracking-tight text-lg uppercase">
              SUPREME PLUMBING <span className="text-red-500 font-normal text-sm">SERVICE</span>
            </div>
            <p className="font-light leading-relaxed text-xs mt-2">
              Delivering specialized commercial-grade infrastructure execution for high-end residential clients throughout Southwest Washington.
            </p>
            <div className="inline-block bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wider text-slate-300 mt-4">
              WA LICENSE: SUPREPS747K2
            </div>
          </div>

          {/* Column 2: Operation Tracking */}
          <div>
            <div className="text-white font-bold tracking-wider text-xs uppercase mb-3">HOURS OF OPERATION</div>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between border-b border-white/[0.03] pb-1">
                <span className="text-slate-300">Monday - Friday</span>
                <span className="text-white font-bold">7:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Saturday</span>
                <span>CLOSED</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Sunday</span>
                <span>CLOSED</span>
              </div>
            </div>
          </div>

          {/* Column 3: Trust Badges Registry Container */}
          <div>
            <div className="text-white font-bold tracking-wider text-xs uppercase mb-3">TRUST BADGES</div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 space-y-2 text-xs font-light">
              <p className="text-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> 
                <strong>Status:</strong> Licensed, Bonded, and Insured
              </p>
              <p className="text-slate-400 leading-normal font-mono text-[11px]">
                Active Bonding & Liability Registry Code verified under Washington Board ID: <span className="text-white">SUPREPS747K2</span>.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Row Links & Credits */}
        <div className="border-t border-white/[0.03] py-6 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Supreme Plumbing Service. All Rights Reserved. UI Architecture by 360 AI Studios.
          </div>
          <div className="flex gap-4">
            <a href="tel:5648883159" className="hover:text-white transition-colors">Tel: 564-888-3159</a>
            <a href="mailto:chris@supremeplumbingservice.net" className="hover:text-white transition-colors">Mail</a>
          </div>
        </div>
      </footer>

    </div>
  );
}