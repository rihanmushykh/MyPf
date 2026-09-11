import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Calendar,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';
import { PageId } from '../types';
import { RIHAN_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAiChat: () => void;
  onOpenCommand: () => void;
  onOpenBooking: () => void;
  onOpenVerify: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  darkMode,
  onToggleDarkMode,
  onOpenAiChat,
  onOpenCommand,
  onOpenBooking,
  onOpenVerify,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mainNavItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'resume', label: 'Resume' },
    { id: 'training', label: 'Training' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const secondaryNavItems: { id: PageId; label: string }[] = [
    { id: 'resources', label: 'Free Resources' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'community', label: 'Community & Leadership' },
    { id: 'media', label: 'Media & Gallery' },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-200">
      {/* Top micro-notification bar */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-1.5 px-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium text-slate-200">Available for Select Q3/Q4 Advisory & Projects</span>
          <span className="hidden sm:inline text-slate-400">· Wayanad, Kerala (Global Clients)</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={onOpenVerify}
            className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Verify Certificate</span>
          </button>
          <span className="text-slate-600">|</span>
          <a
            href={RIHAN_PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline flex items-center gap-1 font-mono font-medium"
          >
            WhatsApp
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="glass-panel border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8 py-3 transition-colors duration-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo / Brand Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#14B8A6] flex items-center justify-center text-white font-heading font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
              RA
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                  Rihan Ali
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300">
                  Pro
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block leading-none">
                SEO · WordPress · Digital Marketing
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'text-[#14B8A6] dark:text-teal-400 font-semibold bg-teal-500/10'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#14B8A6] rounded-full" />
                  )}
                </button>
              );
            })}

            {/* More Dropdown for additional pages */}
            <div className="relative">
              <button
                id="nav-dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-2.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 flex items-center gap-1"
              >
                <span>More</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 py-2 rounded-xl glass-panel shadow-xl border border-slate-200 dark:border-slate-800 z-50 animate-in fade-in zoom-in-95 duration-100">
                  {secondaryNavItems.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => handleNav(sec.id)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        currentPage === sec.id
                          ? 'text-[#14B8A6] dark:text-teal-400 font-medium bg-teal-50 dark:bg-teal-900/20'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {sec.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Action Tools & Triggers */}
          <div className="flex items-center gap-2">
            {/* Search Launcher Cmd+K */}
            <button
              id="quick-search-trigger"
              onClick={onOpenCommand}
              aria-label="Search site"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60 text-xs"
              title="Quick search (Cmd+K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline font-mono text-[11px] text-slate-400">⌘K</span>
            </button>

            {/* AI Assistant Button */}
            <button
              id="ai-chat-btn"
              onClick={onOpenAiChat}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500/15 via-emerald-500/15 to-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/30 text-xs font-semibold hover:border-teal-500/60 transition-all shadow-sm"
              title="Ask Rihan Ali AI Advisor"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6] animate-pulse" />
              <span className="hidden sm:inline">AI Advisor</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-mode-toggle"
              onClick={onToggleDarkMode}
              aria-label="Toggle theme mode"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Book Strategy Call CTA */}
            <button
              id="nav-book-call-btn"
              onClick={onOpenBooking}
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F172A] dark:bg-teal-500 text-white dark:text-slate-950 font-medium text-xs hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Strategy Call</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl xl:hidden text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-4 py-4 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[...mainNavItems, ...secondaryNavItems].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#14B8A6] text-white'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-xl bg-[#0F172A] dark:bg-teal-500 text-white dark:text-slate-950 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book 30-Min Consultation
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiChat();
              }}
              className="w-full py-2.5 rounded-xl border border-teal-500/40 text-teal-600 dark:text-teal-300 font-medium text-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-teal-500" />
              Chat with Rihan AI Advisor
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
