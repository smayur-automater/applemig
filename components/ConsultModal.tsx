"use client";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ConsultModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-[#1a6b42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-bold mb-2">Thanks! We'll be in touch.</h3>
            <p className="text-gray-500 text-sm">Our team will reach out within one business day.</p>
          </div>
        ) : (
          <>
            <h3 className="font-playfair text-2xl font-bold mb-1">Book a Free Consultation</h3>
            <p className="text-gray-500 text-sm mb-6">Tell us about your situation and we'll match you with the right team.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Full name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1a6b42] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1a6b42] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Phone (optional)</label>
                <input
                  type="tel"
                  placeholder="+61 4xx xxx xxx"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1a6b42] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">I'm interested in...</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1a6b42] transition-colors bg-white">
                  <option>Student Visa & Education</option>
                  <option>Skilled Migration</option>
                  <option>Family / Partner Visa</option>
                  <option>Employer Sponsored Visa</option>
                  <option>Temporary Graduate (485)</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#1a6b42] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#0a4a2e] transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
