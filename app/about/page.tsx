"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="py-16 px-6 text-white" style={{ background: "linear-gradient(135deg, #0a4a2e 0%, #1a6b42 60%, #2e8b5a 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[#e8c96a] text-xs uppercase tracking-widest mb-2">Home › Discover Us</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-3">Discover Us</h1>
          <p className="text-white/70 max-w-xl text-base leading-relaxed">
            Committed to your visa success — delivering expert immigration and education services across Australia.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-3 divide-x divide-gray-100">
          {[{ num: "500+", label: "Clients Assisted" }, { num: "13+", label: "Years Experience" }, { num: "100%", label: "Dedication" }].map(s => (
            <div key={s.label} className="py-8 text-center">
              <div className="font-playfair text-4xl font-bold text-[#0a4a2e] mb-1">{s.num}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#1a6b42] text-xs uppercase tracking-widest font-medium mb-2">Discover Us</p>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-5">Guiding Your Path with Our Immigration Mission</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">APPLE Education and Immigration Consultancy is an Australia-based, fast-growing consultancy, specializing in Educational and Immigration services. The company has successfully helped many individuals in various migration and admission related matters.</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Our outstanding service extends to supporting the end-to-end journey, from pre-departure to post-arrival assistance. We are working with many prestigious Education Providers and institutes to provide unparalleled services to our clients.</p>
            <p className="text-gray-600 text-sm leading-relaxed">We strive to provide a universal approach to Education and Migration needs by offering full range of services for new migrants as well as people locally established in Australia.</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Our Vision", text: "To create Global opportunity for people and help them realise the most suitable Career Path. To make Top quality International Education accessible worldwide." },
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Our Mission", text: "To facilitate our clients in understanding the migration processes and direct them to right career path, so they can explore global opportunities." },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Our Commitment", text: "We aim to deliver the highest quality of services with exceptional customer service, prompt responses and greater value for our clients." },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0a4a2e]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#1a6b42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1a6b42] text-xs uppercase tracking-widest font-medium mb-2">Our Leadership</p>
            <h2 className="font-playfair text-3xl font-bold text-gray-900">About the Founder and Director</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Photo card — pure CSS, no external image fetch */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0a4a2e] to-[#1a6b42] rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] flex flex-col items-center justify-center">
                  {/* Decorative portrait placeholder */}
                  <div className="w-40 h-40 rounded-full bg-white/10 border-4 border-[#c8a84b]/50 flex items-center justify-center mb-6">
                    <span className="font-playfair text-6xl font-bold text-[#e8c96a]">RP</span>
                  </div>
                  <div className="text-center px-8">
                    <p className="text-white/60 text-xs leading-relaxed">
                      To display Rashmi&apos;s photo, save her image as<br />
                      <code className="text-[#e8c96a] text-xs bg-white/10 px-2 py-0.5 rounded mt-1 inline-block">public/rashmi.jpg</code><br />
                      and it will appear here automatically.
                    </p>
                  </div>
                </div>
                <div className="px-6 py-5 text-center border-t border-white/10">
                  <h3 className="font-playfair text-2xl font-bold text-white">Rashmi Panwar</h3>
                  <p className="text-[#e8c96a] text-sm mt-1">Founder &amp; Director</p>
                  <p className="text-white/50 text-xs mt-0.5">Registered Migration Agent</p>
                  <div className="flex justify-center gap-3 mt-4">
                    {[
                      { href: "https://www.linkedin.com/in/rashmi-panwar", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                      { href: "https://www.facebook.com/applemigration", d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                    ].map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c8a84b] flex items-center justify-center transition-colors">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-[#1a6b42] text-xs uppercase tracking-widest font-medium mb-2">Meet Our Director</p>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-2">Rashmi Panwar</h2>
              <p className="text-[#c8a84b] font-medium text-sm mb-6">Founder &amp; Director — Apple Education &amp; Immigration Consultancy</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our director comes from a very strong background in international education. She holds an extensive <strong className="text-gray-800">13 years</strong> of experience in the Education and Migration industry, well-versed with the challenges and dynamics of this sector.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Rashmi founded Apple Migration with the vision of making immigration simpler, more accessible, and more human. Her approach combines deep legal expertise with genuine care for every client&apos;s individual journey.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest">Qualifications</p>
                {[
                  "Graduate Certificate — Australian Migration Law & Practice",
                  "Master of Commerce (Professional Accounting)",
                  "MBA Degree",
                  "13+ Years in Education & Migration Industry",
                ].map(q => (
                  <div key={q} className="flex items-center gap-3 bg-[#faf7f2] rounded-lg px-4 py-3 border border-gray-100">
                    <svg className="w-4 h-4 text-[#1a6b42] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{q}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["MARA Registered", "Migration Law Expert", "Education Specialist", "Melbourne Based"].map(t => (
                  <span key={t} className="bg-[#0a4a2e]/10 text-[#1a6b42] text-xs px-3 py-1.5 rounded-full font-medium border border-[#1a6b42]/15">{t}</span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a href="tel:+61470519421" className="flex items-center gap-3 bg-[#0a4a2e] text-white rounded-lg px-4 py-3 hover:bg-[#1a6b42] transition-colors">
                  <svg className="w-4 h-4 text-[#c8a84b] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-wide">Migration</p>
                    <p className="text-xs font-medium">+61 470 519 421</p>
                  </div>
                </a>
                <a href="mailto:visa@applemigration.com.au" className="flex items-center gap-3 bg-[#faf7f2] border border-gray-200 text-gray-700 rounded-lg px-4 py-3 hover:border-[#1a6b42] transition-colors">
                  <svg className="w-4 h-4 text-[#1a6b42] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Email</p>
                    <p className="text-xs font-medium">visa@applemigration.com.au</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="py-16 px-6 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#1a6b42] text-xs uppercase tracking-widest font-medium mb-2">Where We Are</p>
            <h2 className="font-playfair text-3xl font-bold text-gray-900">Our Office</h2>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-[#0a4a2e] px-6 py-4">
              <p className="text-[#e8c96a] text-xs uppercase tracking-widest font-medium">Australia Head Office</p>
            </div>
            <div className="px-6 py-6 space-y-4">
              {[
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", text: "Melbourne Business Centre, 470 St Kilda Road, Melbourne VIC 3004, Australia" },
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "Admission: +61 480 047 407" },
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "Migration: +61 470 519 421" },
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "team@applemigration.com.au" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#0a4a2e]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#1a6b42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
