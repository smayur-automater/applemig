"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultModal from "@/components/ConsultModal";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Skilled Migration",
    desc: "Skilled Independent, Employer Nomination, Regional visas — we assess your profile and find the right pathway.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: "Student Visas",
    desc: "Enrolment guidance, Student Visa (500) applications, OSHC, and post-study work visa pathways.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Family Visas",
    desc: "Partner, spouse, parent, and child visas — reunite your family in Australia with confidence.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    title: "Education Placement",
    desc: "Partnered with top Australian institutions. We find the course and provider that fits your goals.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: "Post-Arrival Support",
    desc: "Settling in, TFN registration, bank accounts, and navigating Australian life — we've got you covered.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Review & Appeals",
    desc: "Visa refusals, AAT reviews, and merits review — expert representation when you need it most.",
  },
];

const stats = [
  { num: "13+", label: "Years experience" },
  { num: "500+", label: "Clients assisted" },
  { num: "100%", label: "Dedication" },
  { num: "2", label: "Specialist teams" },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0d1b4b] via-[#1a2f7a] to-[#2040a0] py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full border border-white/20 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full border border-white/10 translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 border border-white/40 text-[#e63333] text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            MARA Registered Agent
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Your Journey to{" "}
            <span className="text-[#e63333]">Australia</span>{" "}
            Starts Here
          </h1>
          <p className="text-white/75 text-lg font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Expert education and immigration consultancy — from your first application to permanent residency. Trusted by hundreds of clients Australia-wide.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => setModalOpen(true)} className="bg-white text-[#0d1b4b] font-medium px-8 py-3 rounded hover:bg-[#e63333] transition-colors">
              Free Consultation
            </button>
            <Link href="/visas" className="border border-white/40 text-white px-8 py-3 rounded hover:border-[#e63333] hover:bg-white/10 transition-colors">
              Explore Visa Options
            </Link>
          </div>
          <div className="mt-14 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-playfair text-3xl font-bold text-[#e63333]">{s.num}</div>
                <div className="text-xs text-white/55 mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-[#f4f6ff]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">What we do</p>
            <h2 className="section-title">Comprehensive Migration & Education Services</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
              End-to-end support — from pre-departure planning to post-arrival settlement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-lg bg-[#0d1b4b]/8 flex items-center justify-center mb-4 text-[#1a2f7a]">
                  {s.icon}
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          {/* AI teaser */}
          <div className="mt-10 bg-gradient-to-r from-[#0d1b4b]/6 to-[#cc0000]/8 border border-[#0d1b4b]/12 rounded-xl p-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm text-gray-600">
                <strong className="text-[#0d1b4b]">New:</strong> Try our AI visa assistant — instant answers to your eligibility questions, 24/7.
              </p>
            </div>
            <Link
              href="/visas"
              className="bg-[#1a2f7a] text-white text-sm font-medium px-5 py-2 rounded hover:bg-[#0d1b4b] transition-colors whitespace-nowrap"
            >
              Check your eligibility →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="bg-gradient-to-br from-[#0d1b4b] to-[#1a2f7a] rounded-2xl p-8 text-white">
            <p className="text-xs tracking-widest uppercase text-[#e63333] mb-4">Meet Our Director</p>
            <h3 className="font-playfair text-2xl font-bold mb-1">Rashmi</h3>
            <p className="text-[#e63333] text-sm mb-6">Founder & Registered Migration Agent</p>
            <div className="space-y-3">
              {[
                "Graduate Certificate in Australian Migration Law & Practice",
                "Master of Commerce (Professional Accounting)",
                "MBA Degree",
                "13 years in Education & Migration industry",
              ].map((q, i) => (
                <div
                  key={q}
                  className={`rounded-lg px-4 py-3 text-sm leading-snug ${
                    i === 3
                      ? "bg-white/20 border border-white/30"
                      : "bg-white/10"
                  }`}
                >
                  {q}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label">About us</p>
            <h2 className="section-title">Built on Experience. Driven by Results.</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Apple Education and Immigration Consultancy is a fast-growing Australian firm specialising in education placement and immigration services. We have successfully guided hundreds of individuals through migration and university admission.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Our service extends to the full journey — pre-departure guidance, visa lodgement, and post-arrival settlement support. We partner with prestigious Australian education providers to deliver unparalleled student pathways.
            </p>
            <div className="flex flex-wrap gap-2">
              {["MARA Registered","Education Specialists","Sydney Based","Nationwide Service","End-to-End Support"].map(t => (
                <span key={t} className="bg-[#0d1b4b]/8 text-[#1a2f7a] text-xs px-3 py-1.5 rounded-full font-medium">{t}</span>
              ))}
            </div>
            <Link href="/about" className="inline-block mt-6 text-[#1a2f7a] text-sm font-medium hover:underline">
              Read more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#0d1b4b] py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/65 text-base mb-8 leading-relaxed">
            Our admission and migration teams are here to help. Book a free consultation today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white text-[#0d1b4b] font-medium px-8 py-3 rounded hover:bg-[#e63333] transition-colors"
            >
              Book Free Consultation
            </button>
            <Link href="/contact" className="border border-white/40 text-white px-8 py-3 rounded hover:border-[#e63333] transition-colors">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ConsultModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
