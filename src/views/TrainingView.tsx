import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Video,
  Send,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageId } from '../types';
import { WORKSHOPS_LIST, TESTIMONIALS_LIST } from '../data/portfolioData';

interface TrainingViewProps {
  onNavigate: (page: PageId) => void;
  onOpenVerify: () => void;
  onOpenBooking: () => void;
}

export const TrainingView: React.FC<TrainingViewProps> = ({
  onNavigate,
  onOpenVerify,
  onOpenBooking,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<string>(WORKSHOPS_LIST[0].title);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  const handleEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentEmail) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/register-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: studentName,
          email: studentEmail,
          phone: studentPhone,
          courseName: selectedCourse,
        }),
      });

      if (res.ok) {
        setRegisteredSuccess(true);
        confetti({
          particleCount: 70,
          spread: 75,
          origin: { y: 0.6 },
        });
      }
    } catch {
      setRegisteredSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
          Academy & Corporate Workshops
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Practical, Live-Project Training by an Industry Practitioner
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Over 1,450+ students, business owners, and university graduates trained in Wayanad and across Kerala. Real agency workflows, zero fluff.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <button
            onClick={onOpenVerify}
            className="px-5 py-2.5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
          >
            <ShieldCheck className="w-4 h-4 text-teal-500" />
            <span>Verify Student Certificate</span>
          </button>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-2xl bg-[#0F172A] dark:bg-teal-500 text-white dark:text-slate-950 text-xs font-bold transition-all shadow-sm"
          >
            Invite Rihan for College / Corporate Keynote
          </button>
        </div>
      </section>

      {/* 2. Course Catalog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WORKSHOPS_LIST.map((course) => (
          <div
            key={course.id}
            className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                  {course.mode}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Target Audience: <span className="font-semibold text-teal-600 dark:text-teal-400">{course.audience}</span> · {course.level}
                </p>
              </div>

              {/* Syllabus preview */}
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Key Curriculum Modules:
                </h4>
                <div className="space-y-1.5">
                  {course.modules.map((mod, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      <span className="truncate">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Schedule & Pricing */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] text-slate-400">Next Cohort: {course.nextBatchDate}</div>
                <div className="font-semibold text-xs text-amber-600 dark:text-amber-400">
                  Only {course.seatsRemaining} seats remaining
                </div>
                <div className="font-mono font-bold text-sm text-teal-600 dark:text-teal-400 mt-0.5">
                  {course.fee}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCourse(course.title);
                  const formElement = document.getElementById('registration-section');
                  formElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2.5 rounded-xl bg-[#0F172A] dark:bg-teal-500 hover:bg-slate-800 text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shrink-0"
              >
                <span>Register</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Fast Batch Registration Section */}
      <section
        id="registration-section"
        className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white border border-slate-800 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              Limited Seats Per Cohort
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
              Reserve Your Seat in the Next Masterclass
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every student builds and launches an actual live website, deploys real Google & Meta campaigns, and undergoes technical code and SEO review before earning their verifiable certificate.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Includes 1-on-1 resume & career portfolio mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Lifetime access to course recordings & resource bundles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Official verifiable certificate with tamper-proof registry ID</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-sm">
              {registeredSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Registration Confirmed!
                  </h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you, {studentName}. We have reserved your provisional seat for{' '}
                    <span className="text-teal-400 font-semibold">{selectedCourse}</span>. Our admissions coordinator will reach out to your WhatsApp/email with syllabus access.
                  </p>
                  <button
                    onClick={() => setRegisteredSuccess(false)}
                    className="mt-3 px-4 py-2 rounded-xl bg-slate-700 text-xs font-semibold hover:bg-slate-600"
                  >
                    Register Another Student
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnroll} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Select Program *
                    </label>
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                    >
                      {WORKSHOPS_LIST.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title} ({c.duration} · {c.fee})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fathima Zahra"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. fathima@gmail.com"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        WhatsApp Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl bg-[#14B8A6] hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50"
                  >
                    {submitting ? 'Confirming Admission...' : 'Confirm Provisional Enrollment'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
