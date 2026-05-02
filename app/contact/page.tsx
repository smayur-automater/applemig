"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "Can I study two courses on a student visa?",
    a: "Yes, you can study two courses if you are meeting conditions of your student visa and studying your principal course.",
  },
  {
    q: "Can I change my education provider?",
    a: "Yes, you can change your provider however you must maintain the level of study for which you are granted the student visa. Our staff is expert in providing accurate guidance.",
  },
  {
    q: "When must I lodge my 485 Temporary Graduate visa?",
    a: "You must lodge your Temporary Graduate (485) visa within 6 months of completion of your 2-year study in Australia.",
  },
  {
    q: "Do you offer services outside Sydney?",
    a: "Yes. While we are based in Sydney, we provide nationwide services and can assist clients remotely across Australia.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-[#0d1b4b] to-[#1a2f7a] py-20 px-6 text-center">
        <p className="text-[#e63333] text-xs uppercase tracking-widest mb-3">Get in touch</p>
        <h1 className="font-playfair text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-white/70 max-w-lg mx-auto text-base leading-relaxed">
          Our team is ready to help with your migration and education enquiries.
        </p>
      </section>

      <section className="py-20 px-6 bg-[#f4f6ff]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-[#1a2f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Message sent!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <>
                <h2 className="font-playfair text-xl font-bold mb-1">Send us a message</h2>
                <p className="text-gray-500 text-sm mb-6">We respond to all enquiries within one business day.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">First name</label>
                      <input required type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1a2f7a] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Last name</label>
                      <input required type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1a2f7a] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                    <input required type="email" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1a2f7a] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Service interested in</label>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1a2f7a] transition-colors bg-white">
                      <option>Student Visa & Education</option>
                      <option>Skilled Migration</option>
                      <option>Family / Partner Visa</option>
                      <option>Employer Sponsored</option>
                      <option>Review & Appeals</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1a2f7a] transition-colors resize-none"
                      placeholder="Tell us about your situation..."
                    />
                  </div>
                  <button type="submit" className="w-full bg-[#1a2f7a] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#0d1b4b] transition-colors">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact info + FAQ */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-5">Contact Details</h3>
              <div className="space-y-4">
                {[
                  { label: "Admission Team", val: "team@applemigration.com.au", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { label: "Migration Team", val: "visa@applemigration.com.au", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { label: "Location", val: "Sydney, New South Wales, Australia", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
                ].map(item => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0d1b4b]/8 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#1a2f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-sm text-gray-700">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-4">Common Questions</h3>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <div key={i} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-800 py-1"
                    >
                      {f.q}
                      <svg className={`w-4 h-4 text-gray-400 shrink-0 ml-2 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <p className="text-sm text-gray-500 leading-relaxed mt-2">{f.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
