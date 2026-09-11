import React, { useState } from 'react';
import {
  ShieldCheck,
  X,
  Search,
  CheckCircle2,
  AlertCircle,
  Award,
  Calendar,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CertificateVerifierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateVerifierModal: React.FC<CertificateVerifierModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [credentialId, setCredentialId] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [certificateData, setCertificateData] = useState<any | null>(null);

  if (!isOpen) return null;

  const handleVerify = async (codeToVerify?: string) => {
    const code = (codeToVerify || credentialId).trim();
    if (!code) return;

    setLoading(true);
    setErrorMsg(null);
    setCertificateData(null);

    try {
      const res = await fetch(`/api/verify-certificate/${encodeURIComponent(code)}`);
      const data = await res.json();
      if (res.ok && data.found) {
        setCertificateData(data.certificate);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        setErrorMsg(data.message || `No certificate found for ID "${code}".`);
      }
    } catch {
      setErrorMsg('Verification service unavailable. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  const sampleCodes = ['RA-SEO-2024-089', 'RA-WP-2023-142', 'RA-DM-2025-015', 'RA-COM-2024-031'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-white">Certificate Verification</h3>
              <p className="text-xs text-slate-400">Official Rihan Ali Academy & Workshop Registry</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-xs">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Enter Credential / Certificate ID:
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="e.g. RA-SEO-2024-089"
                  value={credentialId}
                  onChange={(e) => setCredentialId(e.target.value.toUpperCase())}
                  onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:border-teal-500 uppercase"
                />
              </div>
              <button
                onClick={() => handleVerify()}
                disabled={loading || !credentialId.trim()}
                className="px-5 py-2.5 rounded-xl bg-[#14B8A6] hover:bg-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all disabled:opacity-50"
              >
                {loading ? 'Verifying...' : 'Verify'}
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sample ID Chips */}
            <div className="mt-3 flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] text-slate-400">Try sample ID:</span>
              {sampleCodes.map((code) => (
                <button
                  key={code}
                  onClick={() => {
                    setCredentialId(code);
                    handleVerify(code);
                  }}
                  className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-900/40 text-[10px] font-mono text-slate-600 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700"
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
              <div className="leading-relaxed">{errorMsg}</div>
            </div>
          )}

          {/* Success Certificate Card */}
          {certificateData && (
            <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-50/70 via-white to-slate-50 dark:from-slate-850 dark:via-slate-900 dark:to-slate-850 border-2 border-teal-500/40 shadow-lg space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-teal-500/20">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-teal-500 text-slate-950">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                      Verified Authentic Credential
                    </span>
                    <div className="font-mono font-bold text-slate-900 dark:text-white">
                      {certificateData.credentialId}
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300">
                  {certificateData.status}
                </span>
              </div>

              <div>
                <div className="text-[11px] text-slate-400">Student Name</div>
                <div className="font-heading font-bold text-base text-slate-900 dark:text-white">
                  {certificateData.studentName}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-slate-400">Course / Program</div>
                <div className="font-semibold text-slate-800 dark:text-slate-200">
                  {certificateData.courseTitle}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <div className="text-[11px] text-slate-400">Issue Date</div>
                  <div className="font-medium text-slate-700 dark:text-slate-300">
                    {certificateData.issueDate}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Evaluation Grade</div>
                  <div className="font-medium text-emerald-600 dark:text-emerald-400">
                    {certificateData.grade}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[11px] text-slate-400 mb-1.5">Verified Competencies:</div>
                <div className="flex flex-wrap gap-1">
                  {certificateData.skillsCovered.map((skill: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[10px] text-slate-400 text-center border-t border-slate-200 dark:border-slate-800">
                Issued by Rihan Ali Academy & Workshop Division · Wayanad, Kerala, India
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
