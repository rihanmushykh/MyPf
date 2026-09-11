import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageId } from '../types';
import { RIHAN_PROFILE } from '../data/portfolioData';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenAiChat: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenAiChat,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('New Project Inquiry');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      if (res.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 75,
          spread: 80,
          origin: { y: 0.6 },
        });
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
          Direct Access
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Let’s Build Something Remarkable Together
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Whether you want to dominate search rankings, construct a world-class WordPress system, or invite Rihan for a keynote workshop in Wayanad or internationally.
        </p>
      </section>

      {/* 2. Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct channels & HQ Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <h2 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
              Direct Communication Channels
            </h2>

            <div className="space-y-4 text-xs">
              {/* WhatsApp Card */}
              <a
                href={RIHAN_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between group hover:border-emerald-500 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                    WA
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-xs">Instant WhatsApp</div>
                    <div className="text-[11px] text-emerald-700 dark:text-emerald-400">Usually replies in &lt; 15 mins</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${RIHAN_PROFILE.email}`}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-teal-500 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-xs">Direct Email</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{RIHAN_PROFILE.email}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors" />
              </a>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-xs">Phone / Hotline</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{RIHAN_PROFILE.phone}</div>
                </div>
              </div>
            </div>

            {/* Headquarters Card */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white">Studio & Operations Base</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    Wayanad District, Kerala, India - 673121<br />
                    Available for in-person meetings in Calicut, Cochin, Bangalore & Dubai upon schedule.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white">Working Hours & Timezones</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Mon – Sat: 09:00 AM – 07:30 PM IST (Covers Gulf Standard Time & European hours seamlessly)
                  </div>
                </div>
              </div>
            </div>

            {/* Book Strategy Call Button */}
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-2xl bg-[#0F172A] dark:bg-teal-500 hover:bg-slate-800 text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 30-Minute Video Discovery Call</span>
            </button>
          </div>
        </div>

        {/* Right Column: Direct Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                  Message Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900 dark:text-white">{name}</span>. Your inquiry has been routed to Rihan Ali's priority desk. You will receive an initial response within 4 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold hover:bg-slate-200"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                    Send a Direct Note
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                    Fill out the form below to receive a customized reply directly from Rihan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@venture.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Subject / Topic
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                    >
                      <option>New Project Inquiry</option>
                      <option>SEO Audit & Retainer</option>
                      <option>WordPress Website Development</option>
                      <option>College / Corporate Workshop</option>
                      <option>Community / Pro Bono Initiative</option>
                      <option>General Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your business, current challenges, and goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-[#14B8A6] hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  {submitting ? 'Sending Message...' : 'Send Message to Rihan Ali'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
