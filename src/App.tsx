import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  MessageSquare,
  Calendar,
  Activity,
  ArrowUp,
  Search,
  Globe,
  ShieldCheck,
  Briefcase,
} from 'lucide-react';
import { PageId } from './types';
import { PORTFOLIO_PROJECTS, RIHAN_PROFILE } from './data/portfolioData';

// Component imports
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandMenu } from './components/CommandMenu';
import { AIChatModal } from './components/AIChatModal';
import { CertificateVerifierModal } from './components/CertificateVerifierModal';
import { AppointmentModal } from './components/AppointmentModal';
import { ProjectRfpModal } from './components/ProjectRfpModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

// View imports
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { PortfolioView } from './views/PortfolioView';
import { CaseStudiesView } from './views/CaseStudiesView';
import { ResumeView } from './views/ResumeView';
import { TrainingView } from './views/TrainingView';
import { BlogView } from './views/BlogView';
import { ResourcesView } from './views/ResourcesView';
import { TestimonialsView } from './views/TestimonialsView';
import { CommunityView } from './views/CommunityView';
import { MediaView } from './views/MediaView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true); // Default to modern luxury dark/high contrast
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Modal triggers
  const [commandOpen, setCommandOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [rfpOpen, setRfpOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Sync dark mode class on document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = PORTFOLIO_PROJECTS.find((p) => p.id === selectedProjectId) || null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950 transition-colors duration-200 flex flex-col justify-between">
      {/* Background Ambient Grid & Glow */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Top Main Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenAiChat={() => setAiChatOpen(true)}
        onOpenCommand={() => setCommandOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenVerify={() => setVerifyOpen(true)}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenRfp={() => setRfpOpen(true)}
            onOpenAiChat={() => setAiChatOpen(true)}
            onOpenVerify={() => setVerifyOpen(true)}
            onSelectProject={(id) => setSelectedProjectId(id)}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenRfp={() => setRfpOpen(true)}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioView
            onNavigate={handleNavigate}
            onSelectProject={(id) => setSelectedProjectId(id)}
            onOpenRfp={() => setRfpOpen(true)}
          />
        )}

        {currentPage === 'case-studies' && (
          <CaseStudiesView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenRfp={() => setRfpOpen(true)}
          />
        )}

        {currentPage === 'resume' && (
          <ResumeView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenVerify={() => setVerifyOpen(true)}
          />
        )}

        {currentPage === 'training' && (
          <TrainingView
            onNavigate={handleNavigate}
            onOpenVerify={() => setVerifyOpen(true)}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'community' && (
          <CommunityView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'media' && (
          <MediaView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenAiChat={() => setAiChatOpen(true)}
          />
        )}
      </main>

      {/* Floating Action Dock */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-105 active:scale-95 transition-all text-xs"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Live Client CRM Ops Trigger */}
        <button
          onClick={() => setPortalOpen(true)}
          title="Open Live CRM & Inquiries Feed"
          className="p-2.5 rounded-2xl bg-slate-900 dark:bg-slate-800 text-teal-400 border border-slate-700 shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 text-xs font-mono"
        >
          <Activity className="w-4 h-4 text-teal-400 animate-pulse" />
          <span className="hidden sm:inline">CRM Ops</span>
        </button>

        {/* WhatsApp Instant Message Pill */}
        <a
          href={RIHAN_PROFILE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat directly on WhatsApp"
          className="px-3.5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
          <span>WhatsApp Rihan</span>
        </a>

        {/* AI Advisor Trigger Button */}
        <button
          onClick={() => setAiChatOpen(true)}
          title="Ask Rihan Ali AI Advisor"
          className="px-4 py-3 rounded-2xl bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 text-slate-950 font-heading font-extrabold text-xs flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4 text-slate-950 animate-spin" />
          <span>Ask Rihan AI</span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenVerify={() => setVerifyOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Global Interactive Modals */}
      <CommandMenu
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onNavigate={handleNavigate}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenAiChat={() => setAiChatOpen(true)}
        onOpenVerify={() => setVerifyOpen(true)}
      />

      <AIChatModal
        isOpen={aiChatOpen}
        onClose={() => setAiChatOpen(false)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      <CertificateVerifierModal
        isOpen={verifyOpen}
        onClose={() => setVerifyOpen(false)}
      />

      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <ProjectRfpModal
        isOpen={rfpOpen}
        onClose={() => setRfpOpen(false)}
      />

      <ClientPortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenVerify={() => setVerifyOpen(true)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        onOpenBooking={() => setBookingOpen(true)}
      />
    </div>
  );
}
