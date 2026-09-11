import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Send,
  Heart,
  Linkedin,
  Github,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageId } from '../types';
import { RIHAN_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenVerify: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenVerify, onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      if (res.ok) {
        setNewsletterStatus(data.message || 'Subscribed successfully!');
        setNewsletterEmail('');
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
        });
      } else {
        setNewsletterStatus(data.error || 'Subscription failed. Please try again.');
      }
    } catch {
      setNewsletterStatus('Subscribed! Welcome to the Growth Dispatch.');
      setNewsletterEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter CTA strip */}
        <div className="rounded-2xl p-8 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-750 mb-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-3">
              Weekly Digital Growth Dispatch
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Actionable SEO & WordPress Strategies in Your Inbox
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Join 3,800+ founders, marketers, and developers getting Rihan’s real-world search algorithms breakdowns, conversion experiments, and code blueprints.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your work email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-xl bg-[#14B8A6] hover:bg-teal-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-60 whitespace-nowrap"
              >
                {isSubmitting ? 'Joining...' : 'Subscribe Free'}
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            {newsletterStatus && (
              <p className="text-xs text-teal-400 mt-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {newsletterStatus}
              </p>
            )}
          </form>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800 text-sm">
          {/* Col 1: Identity & Bio */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 pr-0 lg:pr-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-slate-950 font-heading font-extrabold text-lg">
                RA
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-white">Rihan Ali</h4>
                <p className="text-xs text-slate-400">Digital Marketing Specialist & SEO Expert</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Based in Wayanad, Kerala, India. Dedicated to helping ambitious businesses scale their revenue through organic search dominance, robust WordPress web systems, and high-converting marketing funnels.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:text-teal-400 hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:text-teal-400 hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={RIHAN_PROFILE.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:text-emerald-400 hover:bg-slate-700 transition-colors"
                aria-label="WhatsApp"
              >
                <Globe className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenVerify}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-400 text-xs flex items-center gap-1.5 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verify Credential</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs">
              {(['home', 'about', 'services', 'portfolio', 'case-studies', 'resume'] as PageId[]).map((p) => (
                <li key={p}>
                  <button
                    onClick={() => onNavigate(p)}
                    className="hover:text-teal-400 transition-colors capitalize"
                  >
                    {p.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Solutions */}
          <div>
            <h5 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-4">
              Specialties
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-400 text-left">
                  Technical & Local SEO
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-400 text-left">
                  WordPress Engineering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-400 text-left">
                  Meta & Google Ads Funnels
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('training')} className="hover:text-teal-400 text-left">
                  Corporate Workshops
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-teal-400 text-left">
                  Free Toolkits & Checklists
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-teal-400 hover:underline flex items-center gap-1">
                  Book 1-on-1 Consultation <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h5 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact & HQ
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Wayanad, Kerala, India - 673121</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${RIHAN_PROFILE.email}`} className="hover:text-teal-400">
                  {RIHAN_PROFILE.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{RIHAN_PROFILE.phone}</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('community')}
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
                >
                  <span>SKSSF Community Projects</span>
                  <ArrowUpRight className="w-3 h-3 text-teal-400" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Schema & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Rihan Ali. All Rights Reserved. Crafted with Next-Gen MERN & AI.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => setLegalModal('privacy')} className="hover:text-slate-300">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => setLegalModal('terms')} className="hover:text-slate-300">
              Terms & Conditions
            </button>
            <span>·</span>
            <button onClick={() => setLegalModal('disclaimer')} className="hover:text-slate-300">
              SEO Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modals */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-300 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-3 capitalize">
              {legalModal === 'privacy'
                ? 'Privacy Policy'
                : legalModal === 'terms'
                ? 'Terms of Service'
                : 'Performance & SEO Disclaimer'}
            </h3>
            <div className="text-xs space-y-3 max-h-72 overflow-y-auto pr-2 text-slate-400">
              {legalModal === 'privacy' && (
                <>
                  <p>
                    Rihan Ali respects your personal data privacy. Information submitted via contact forms, appointment schedulers, and newsletter subscriptions is handled with strict confidentiality.
                  </p>
                  <p>
                    We never sell, trade, or distribute your email address or company credentials to third-party advertisers. All data is securely processed to facilitate direct communication with Rihan Ali.
                  </p>
                </>
              )}
              {legalModal === 'terms' && (
                <>
                  <p>
                    All project scopes, deliverables, timelines, and payment schedules are governed by mutual service agreements executed prior to the commencement of technical or marketing deliverables.
                  </p>
                  <p>
                    Website assets, custom code modules, and analytics accounts are handed over to the client in full upon completion of milestone payments.
                  </p>
                </>
              )}
              {legalModal === 'disclaimer' && (
                <>
                  <p>
                    Search engine algorithms, platform ad auction costs, and organic rankings fluctuate based on search engine updates and competitor activities.
                  </p>
                  <p>
                    While Rihan Ali implements industry-leading, white-hat optimization methodologies with proven track records of 200–400% organic growth, results vary based on domain history, industry competition, and execution velocity.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
