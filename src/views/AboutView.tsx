import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Heart,
  Target,
  Compass,
  Award,
  Users,
  Code2,
  TrendingUp,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Download,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';
import { RIHAN_PROFILE, SKILLS_MATRIX } from '../data/portfolioData';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'seo', label: 'SEO & Search' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'tech', label: 'WordPress & Code' },
    { id: 'design', label: 'Creative & UI' },
    { id: 'leadership', label: 'Leadership & Training' },
  ];

  const filteredGroups =
    activeSkillCategory === 'all'
      ? SKILLS_MATRIX
      : SKILLS_MATRIX.filter((g) =>
          g.category.toLowerCase().includes(activeSkillCategory.toLowerCase())
        );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* 1. Header & Identity Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold border border-teal-500/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>Rooted in Wayanad, Kerala · Impacting Worldwide</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Architecting Digital Growth with Engineering Precision and Creative Empathy.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            I am <strong className="text-slate-900 dark:text-white">Rihan Ali</strong>, a multi-faceted digital marketing specialist, technical SEO practitioner, custom WordPress engineer, and community youth leader based in the lush landscapes of Wayanad, Kerala.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Over the past 6+ years, my mission has been singular: helping businesses, educational institutions, startups, and community organizations unlock verifiable revenue growth through organic search dominance, modern web systems, and high-conversion funnels.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-2xl bg-[#0F172A] dark:bg-teal-500 hover:bg-slate-800 text-white dark:text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <span>Book Strategy Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('resume')}
              className="px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Full Curriculum Vitae</span>
            </button>
          </div>
        </div>

        {/* Right Portrait & Visual Accent */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm rounded-3xl p-3 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700 shadow-xl">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
                alt="Rihan Ali - Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl mt-3 border border-slate-200 dark:border-slate-800">
              <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">Rihan Ali</div>
              <div className="text-[11px] text-teal-600 dark:text-teal-400 font-medium">Digital Specialist & Community Leader</div>
              <div className="text-[10px] text-slate-400 mt-1">Wayanad, Kerala, India (Available Globally)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Professional Identity Dimensions (8 Core Roles) */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
            Versatility & Depth
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
            The Multi-Disciplinary Professional Roles
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Bridging technical engineering, performance marketing, and grassroots empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              role: 'Digital Marketing Specialist',
              icon: TrendingUp,
              desc: 'Data-driven funnel architect managing multi-channel paid and organic pipelines.',
            },
            {
              role: 'SEO Expert',
              icon: Compass,
              desc: 'Technical site architecture, schema dominance, semantic keyword clustering, and Core Web Vitals mastery.',
            },
            {
              role: 'WordPress Developer',
              icon: Code2,
              desc: 'Building bespoke WooCommerce systems, sub-second TTFB optimizations, and enterprise security.',
            },
            {
              role: 'Website Consultant',
              icon: Target,
              desc: 'Advising executive leadership on platform scalability, migration strategies, and conversion rate optimization.',
            },
            {
              role: 'Digital Marketing Trainer',
              icon: GraduationCap,
              desc: 'Empowered 1,450+ students, marketers, and entrepreneurs through hands-on bootcamps.',
            },
            {
              role: 'Community Leader',
              icon: Users,
              desc: 'Active youth organizer and SKSSF leader driving civic engagement, education, and moral upliftment.',
            },
            {
              role: 'Creative Designer',
              icon: Sparkles,
              desc: 'Translating brand value propositions into elegant typographic systems, visual identities, and UI layouts.',
            },
            {
              role: 'Entrepreneur',
              icon: Award,
              desc: 'Building scalable agency systems, digital asset libraries, and regional commercial enterprises.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-teal-400/50 transition-all space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Mission, Vision, and Guiding Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-[#0F172A] text-white border border-slate-800 shadow-xl space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">The Mission</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Helping businesses, organizations, and individuals grow through ethical digital marketing, enterprise-grade websites, resilient branding, technical SEO, and modern web technology.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-[#0F172A] text-white border border-slate-800 shadow-xl space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">The Vision</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            To establish a world-class digital center of excellence in Wayanad, bridging tier-2 regional youth with tier-1 international technology opportunities and entrepreneurial freedom.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-[#0F172A] text-white border border-slate-800 shadow-xl space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">Core Values</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Transparent metrics without vanity fluff, white-hat long-term authority over quick hacks, civic service to society, and relentless craftsmanship across every line of code and ad copy.
          </p>
        </div>
      </section>

      {/* 4. Interactive Skills Matrix with Proficiency */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
              Technical Competencies
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
              Skills & Systems Matrix
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveSkillCategory(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  activeSkillCategory === c.id
                    ? 'bg-[#0F172A] text-white dark:bg-teal-500 dark:text-slate-950 font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800 dark:text-slate-200">{skill.name}</span>
                      <span className="font-mono font-semibold text-teal-600 dark:text-teal-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      <span className="text-slate-500 font-medium">Tools: </span>
                      {skill.tools}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Community & Wayanad Roots */}
      <section className="rounded-3xl p-8 sm:p-12 bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
              Roots & Civic Leadership
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Why Wayanad and Community Service Define My Approach
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Growing up in Wayanad instilled a deep appreciation for collaborative community resilience. Through my active leadership in the <strong>SKSSF (Samastha Kerala Sunni Students Federation)</strong>, I have spearheaded digital literacy campaigns, organized blood donor registries, mobilized disaster relief communications, and mentored hundreds of high school and polytechnic graduates.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              This grassroots foundation ensures that whether I am negotiating an enterprise SEO retainer or training college students, empathy and genuine human impact always come first.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('community')}
                className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Read detailed Community & Leadership Initiatives</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
              <div className="font-heading font-extrabold text-2xl text-teal-500">45+</div>
              <div className="text-[10px] text-slate-500 mt-1">Community Drives Organized</div>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
              <div className="font-heading font-extrabold text-2xl text-amber-500">1,450+</div>
              <div className="text-[10px] text-slate-500 mt-1">Youth Mentored</div>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
              <div className="font-heading font-extrabold text-2xl text-emerald-500">6+</div>
              <div className="text-[10px] text-slate-500 mt-1">Years Active Leadership</div>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
              <div className="font-heading font-extrabold text-2xl text-sky-500">100%</div>
              <div className="text-[10px] text-slate-500 mt-1">Pro Bono Commitment</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
