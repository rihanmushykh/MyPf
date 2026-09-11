import React from 'react';
import {
  Heart,
  Users,
  Award,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { PageId } from '../types';
import { COMMUNITY_ACTIVITIES, RIHAN_PROFILE } from '../data/portfolioData';

interface CommunityViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const CommunityView: React.FC<CommunityViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
          Grassroots Service & Leadership
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Community Empowerment & SKSSF Youth Initiatives
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Technology is most noble when deployed to elevate vulnerable communities. In Wayanad, Rihan Ali actively organizes youth development, educational upliftment, and crisis relief.
        </p>
      </section>

      {/* 2. SKSSF & Civic Leadership Narrative */}
      <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Samastha Kerala Sunni Students Federation (SKSSF)</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Transforming Wayanad's Youth from Observers into Digital Creators
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            As an active regional youth leader within the SKSSF and civic welfare councils, Rihan Ali channels his technology and digital marketing acumen into sustainable social programs.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Rather than theoretical lectures, programs are designed as hands-on computer labs: teaching village youth how to build websites, optimize Google Business Profiles for local farmers, and secure remote freelance contracts.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
              <div className="font-heading font-extrabold text-2xl text-teal-500">1,450+</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Rural Students Mentored</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
              <div className="font-heading font-extrabold text-2xl text-emerald-500">45+</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Community Camps Run</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 dark:border-slate-800 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
              alt="Community youth training in Wayanad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 3. Four Core Community Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COMMUNITY_ACTIVITIES.map((proj) => (
          <div
            key={proj.id}
            className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400">
                {proj.period}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                {proj.impactNumbers}
              </span>
            </div>

            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
              {proj.title}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {proj.description}
            </p>

            <div className="p-3 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <div>
                <strong className="text-slate-900 dark:text-white">Role: </strong>
                {proj.role} · {proj.organization}
              </div>
              <ul className="pt-1 space-y-1">
                {proj.initiatives.map((init, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                    <span>{init}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Volunteer / Partnership CTA */}
      <section className="rounded-3xl p-8 sm:p-10 bg-[#0F172A] text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
            Organizing a Community or Youth Workshop in Kerala?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Rihan dedicates regular pro bono hours every month to educational institutions and registered NGOs.
          </p>
        </div>
        <button
          onClick={onOpenBooking}
          className="px-6 py-3 rounded-xl bg-[#14B8A6] hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all active:scale-95 shrink-0 shadow-md"
        >
          Request Pro Bono Session
        </button>
      </section>
    </div>
  );
};
