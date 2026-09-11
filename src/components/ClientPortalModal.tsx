import React, { useState, useEffect } from 'react';
import {
  Activity,
  X,
  RefreshCw,
  Users,
  CheckCircle2,
  Calendar,
  Briefcase,
  GraduationCap,
  Mail,
  ShieldCheck,
} from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  onOpenVerify: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
  onOpenVerify,
}) => {
  const [leads, setLeads] = useState<any[]>([]);
  const [totalLeads, setTotalLeads] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCRMData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (res.ok) {
        setLeads(data.leads || []);
        setTotalLeads(data.totalLeads || 0);
      }
    } catch {
      // fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchCRMData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-base text-white">Live Client & CRM Operations Portal</h3>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </div>
              <p className="text-xs text-slate-400">Real-time pipeline transparency & verified inquiries</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchCRMData}
              disabled={loading}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Refresh feed"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-teal-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Active Pipeline</div>
              <div className="font-heading font-bold text-xl text-teal-500 mt-0.5">{totalLeads} Records</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Avg Response</div>
              <div className="font-heading font-bold text-xl text-slate-900 dark:text-white mt-0.5">&lt; 4 Hours</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Client Retention</div>
              <div className="font-heading font-bold text-xl text-emerald-500 mt-0.5">98.2%</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Verification</div>
              <div className="font-heading font-bold text-xl text-teal-400 mt-0.5">100% Tamper-proof</div>
            </div>
          </div>

          {/* CRM Leads Table / Activity stream */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Recent Inbound Inquiries & Engagements
              </h4>
              <span className="text-[10px] font-mono text-slate-400">Live Express backend sync</span>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden divide-y divide-slate-200 dark:divide-slate-800">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="p-3.5 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-teal-500 shrink-0 mt-0.5">
                      {lead.type === 'appointment' && <Calendar className="w-4 h-4" />}
                      {lead.type === 'contact' && <Mail className="w-4 h-4" />}
                      {lead.type === 'project_rfp' && <Briefcase className="w-4 h-4" />}
                      {lead.type === 'course_registration' && <GraduationCap className="w-4 h-4" />}
                      {lead.type === 'newsletter' && <Users className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900 dark:text-white">{lead.name}</span>
                        {lead.company && (
                          <span className="text-slate-400 text-[11px]">({lead.company})</span>
                        )}
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {lead.type.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="text-[11px] text-teal-600 dark:text-teal-400 mt-0.5 font-medium">
                        {lead.service || lead.courseName || 'Growth Dispatch Subscription'}
                      </div>
                      {lead.message && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 italic">
                          "{lead.message}"
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 shrink-0">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links banner */}
          <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">Have an active engagement?</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">Schedule review calls or verify training credentials directly.</div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="px-3 py-1.5 rounded-xl bg-[#0F172A] dark:bg-teal-500 text-white dark:text-slate-950 font-semibold text-xs"
              >
                Book Review Call
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenVerify();
                }}
                className="px-3 py-1.5 rounded-xl border border-teal-500/30 text-teal-600 dark:text-teal-300 font-semibold text-xs"
              >
                Verify Certificate
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
