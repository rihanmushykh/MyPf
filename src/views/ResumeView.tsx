import React from 'react';
import {
  Download,
  Printer,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { PageId } from '../types';
import { RIHAN_PROFILE, TIMELINE_DATA } from '../data/portfolioData';

const CERTIFICATIONS_LIST = [
  {
    id: 'cert-google-ads',
    title: 'Google Ads Search & Measurement Certified',
    issuer: 'Google Skillshop',
    year: '2024',
    credentialId: 'GOOG-ADS-8921',
  },
  {
    id: 'cert-meta-media',
    title: 'Meta Certified Digital Marketing Associate',
    issuer: 'Meta Blueprint',
    year: '2023',
    credentialId: 'META-MED-4412',
  },
  {
    id: 'cert-hubspot-inbound',
    title: 'HubSpot Inbound Marketing & SEO Certification',
    issuer: 'HubSpot Academy',
    year: '2024',
    credentialId: 'HUB-INB-7729',
  },
  {
    id: 'cert-wp-arch',
    title: 'Advanced WordPress Architecture & Security',
    issuer: 'WP Engine / Web Guild',
    year: '2023',
    credentialId: 'WPE-ENG-9104',
  },
];

interface ResumeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenVerify: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenVerify,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Print & Download Header Action Bar */}
      <div className="no-print flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
            Curriculum Vitae & Professional Record
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Verified executive resume of Rihan Ali (Last updated Q3 2026)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 rounded-xl bg-[#0F172A] dark:bg-teal-500 text-white dark:text-slate-950 text-xs font-bold transition-all"
          >
            Schedule Interview / Call
          </button>
        </div>
      </div>

      {/* 2. Main Resume Sheet (Optimized for Screen & Print) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl space-y-10 text-xs text-slate-700 dark:text-slate-300">
        {/* Profile Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Rihan Ali
            </h2>
            <p className="font-semibold text-sm text-teal-600 dark:text-teal-400 mt-1">
              Digital Marketing Specialist · SEO Expert · WordPress Engineer
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 max-w-xl leading-relaxed">
              Helping businesses, educational institutions, and organizations achieve organic search dominance, robust web architecture, and sustainable revenue funnels.
            </p>
          </div>

          <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 sm:text-right font-mono">
            <div className="flex sm:justify-end items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-500" />
              <span>Wayanad, Kerala, India</span>
            </div>
            <div className="flex sm:justify-end items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-teal-500" />
              <a href={`mailto:${RIHAN_PROFILE.email}`} className="hover:underline">
                {RIHAN_PROFILE.email}
              </a>
            </div>
            <div className="flex sm:justify-end items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-teal-500" />
              <span>{RIHAN_PROFILE.phone}</span>
            </div>
            <div className="text-[10px] text-teal-600 dark:text-teal-400">
              Open to Regional & Global Engagements
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
            Executive Summary
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
            Proven technologist with over 6 years of hands-on experience directing 240+ digital projects, constructing 180+ custom WordPress platforms, and training 1,450+ professionals and university students. Combines deep computer science fundamentals with performance marketing algorithms, technical SEO architecture, and active civic leadership as an SKSSF youth organizer.
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-6">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {TIMELINE_DATA.map((item, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-teal-500/30 pl-4 relative">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-teal-500" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    {item.role || item.title}
                  </h4>
                  <span className="font-mono text-[11px] text-slate-400 font-medium">
                    {item.year} · {item.location}
                  </span>
                </div>
                <div className="font-semibold text-teal-600 dark:text-teal-400 text-xs">
                  {item.organization}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-1">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {item.highlights.map((ach, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Credentials */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                Bachelor of Computer Applications (BCA) / Computer Science
              </div>
              <div className="text-teal-600 dark:text-teal-400 text-xs font-semibold">
                Calicut University / Wayanad Institute
              </div>
              <div className="text-[11px] text-slate-400">
                Core coursework in Web Technologies, Software Engineering, Database Systems & Algorithms.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                Executive Leadership & Community Youth Development
              </div>
              <div className="text-teal-600 dark:text-teal-400 text-xs font-semibold">
                SKSSF State Educational Council
              </div>
              <div className="text-[11px] text-slate-400">
                Organizational management, crisis response communication, and youth pedagogy.
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Badges */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
              Verified Industry Certifications
            </h3>
            <button
              onClick={onOpenVerify}
              className="text-teal-600 dark:text-teal-400 text-xs font-semibold hover:underline flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verify Any Certificate ID</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CERTIFICATIONS_LIST.map((cert) => (
              <div
                key={cert.id}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white">{cert.title}</div>
                  <div className="text-[11px] text-slate-400">{cert.issuer} · Issued {cert.year}</div>
                </div>
                <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-900/30 border border-teal-500/20">
                  {cert.credentialId}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Proficiency Snapshot */}
        <div className="space-y-3">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
            Technical Arsenal & Stacks
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Technical SEO',
              'Schema Markup (JSON-LD)',
              'Core Web Vitals Optimization',
              'WordPress Custom Themes',
              'WooCommerce',
              'PHP & Modern Hooks',
              'Google Ads (Search & PMax)',
              'Meta Ads Manager',
              'Google Analytics 4',
              'Google Tag Manager',
              'Ahrefs & Semrush',
              'Screaming Frog SEO Spider',
              'HTML5 / Tailwind CSS',
              'TypeScript & React',
              'Figma UI Design',
              'Conversion Rate Optimization',
            ].map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200 dark:border-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
