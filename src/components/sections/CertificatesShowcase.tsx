import React, { useState } from 'react';
import { usePortfolioData } from '../../context/DataContext';
import { portfolioConfig } from '../../config/portfolio';
import { Certificate } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { CertificateModal } from '../modals/CertificateModal';
import { IssuerLogo } from '../common/IssuerLogo';
import { SafeImage } from '../common/SafeImage';
import { ScrollReveal } from '../common/ScrollReveal';
import { 
  Award, 
  Eye,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

interface CertificatesShowcaseProps {
  onOpenCertificate?: (cert: Certificate) => void;
}

const isLegitimateUrl = (url?: string): boolean => {
  if (!url) return false;
  const clean = url.trim();
  return (
    (clean.startsWith('http://') || clean.startsWith('https://')) &&
    clean !== 'https://' &&
    clean !== 'http://' &&
    !clean.includes('example.com')
  );
};

export const CertificatesShowcase: React.FC<CertificatesShowcaseProps> = ({
  onOpenCertificate
}) => {
  const { isDark } = useTheme();
  const { certificates: contextCertificates } = usePortfolioData();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Fallback chain: context certificates -> static config certificates -> empty array
  const rawCertificates = contextCertificates && contextCertificates.length > 0
    ? contextCertificates
    : (portfolioConfig.certificates || []);

  // Standardize certificate typing for display
  const certificates: Certificate[] = rawCertificates.map((c: any) => ({
    id: c.id,
    title: c.title,
    issuer: c.issuer,
    category: c.category || 'Professional Certification',
    image: c.image,
    accent: c.accent || '#22D3EE',
    issueDate: c.issueDate || c.issue_date,
    credentialId: c.credentialId || c.credential_id,
    credentialUrl: c.credentialUrl || c.credential_url || c.verification_url,
    verificationUrl: c.verificationUrl || c.verification_url || c.credentialUrl,
    skills: c.skills || [],
    description: c.description,
    verified: c.verified ?? true,
  }));

  const handleCardClick = (cert: Certificate) => {
    if (onOpenCertificate) {
      onOpenCertificate(cert);
    } else {
      setSelectedCert(cert);
    }
  };

  return (
    <section 
      id="certificates" 
      aria-label="Professional Certificates and Accreditations"
      className="relative py-16 sm:py-20 lg:py-24 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={16} duration={0.5}>
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border ${
              isDark
                ? 'bg-white/[0.04] text-[#22D3EE] border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                : 'bg-cyan-50 text-[#0891B2] border-cyan-200'
            }`}>
              <Award className="w-3.5 h-3.5" />
              <span>Verified Accreditations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-balance">
              Professional{' '}
              <span className={`text-transparent bg-clip-text ${
                isDark
                  ? 'bg-gradient-to-r from-white via-[#22D3EE] to-[#8B5CF6]'
                  : 'bg-gradient-to-r from-slate-900 via-[#0891B2] to-[#7C3AED]'
              }`}>
                Certificates &amp; Credentials
              </span>
            </h2>
            
            <p className={`max-w-2xl text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-[#A1AAB8]' : 'text-slate-600'
            }`}>
              Rigorous credentials and specializations certified by industry-leading cloud, software, design, and search technology organizations.
            </p>
          </div>
        </ScrollReveal>

        {/* Clean Responsive 3-Column Desktop Grid / 1-Column Mobile Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {certificates.map((cert, index) => {
            const hasVerifyLink = isLegitimateUrl(cert.verificationUrl || cert.credentialUrl);

            return (
              <motion.article
                key={cert.id || index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -35px 0px' }}
                transition={{ 
                  duration: 0.45, 
                  delay: Math.min(index * 0.08, 0.3),
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                whileHover={{ y: -5 }}
                id={`cert-card-${cert.id}`}
                className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group glass-accelerated ${
                  isDark
                    ? 'bg-[#111722]/80 border-white/[0.08] hover:border-[#22D3EE]/40 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.65)] hover:shadow-[0_16px_40px_-10px_rgba(34,211,238,0.12)]'
                    : 'bg-white/90 border-slate-200 hover:border-[#0891B2]/50 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_-10px_rgba(8,145,178,0.12)]'
                }`}
              >
                <div>
                  {/* Certificate Image Frame with Full Visibility */}
                  <div 
                    className="relative aspect-[16/11] overflow-hidden cursor-pointer bg-slate-100 p-2.5 sm:p-3 flex items-center justify-center"
                    onClick={() => handleCardClick(cert)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCardClick(cert);
                      }
                    }}
                    aria-label={`Preview full certificate: ${cert.title}`}
                  >
                    <SafeImage
                      src={cert.image}
                      alt={cert.title}
                      fallbackType="certificate"
                      className="w-full h-full object-contain rounded-xl bg-white transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />

                    {/* Gradient Depth Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

                    {/* Top Issuer Badge on Certificate */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md bg-black/75 text-[#22D3EE] border border-white/15 shadow-sm">
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Verified Status Tag */}
                    {cert.verified && (
                      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md bg-black/75 text-emerald-400 border border-white/15 shadow-sm">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Verified</span>
                      </div>
                    )}

                    {/* Hover Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <span className="px-4 py-2 rounded-xl bg-black/85 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 border border-white/20 shadow-xl">
                        <Eye className="w-4 h-4 text-[#22D3EE]" /> Click to Inspect
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6">
                    {/* Issuer Header */}
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className={`p-1 rounded-lg border ${
                        isDark ? 'bg-white/[0.04] border-white/10' : 'bg-slate-100 border-slate-200'
                      }`}>
                        <IssuerLogo issuer={cert.issuer} className="w-4 h-4 rounded-sm shrink-0" />
                      </div>
                      <span className={`text-xs font-bold ${
                        isDark ? 'text-[#CBD5E1]' : 'text-slate-700'
                      }`}>
                        {cert.issuer}
                      </span>
                      {cert.category && (
                        <span className={`text-[10px] ml-auto font-mono px-2 py-0.5 rounded-md border ${
                          isDark 
                            ? 'bg-white/[0.03] text-cyan-300/80 border-white/10' 
                            : 'bg-cyan-50 text-cyan-800 border-cyan-100'
                        }`}>
                          {cert.category}
                        </span>
                      )}
                    </div>

                    {/* Certificate Exact Title */}
                    <h3 
                      onClick={() => handleCardClick(cert)}
                      className={`font-black text-base sm:text-lg tracking-tight mb-2.5 cursor-pointer line-clamp-2 transition-colors ${
                        isDark ? 'text-white group-hover:text-[#22D3EE]' : 'text-slate-900 group-hover:text-[#0891B2]'
                      }`}
                    >
                      {cert.title}
                    </h3>

                    {/* Professional Description */}
                    {cert.description && (
                      <p className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 ${
                        isDark ? 'text-[#94A3B8]' : 'text-slate-600'
                      }`}>
                        {cert.description}
                      </p>
                    )}

                    {/* Supported Skills Pills */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {cert.skills.slice(0, 4).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${
                              isDark
                                ? 'bg-white/[0.03] border-white/[0.08] text-slate-300'
                                : 'bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className={`p-5 sm:p-6 pt-0 border-t flex items-center gap-2 ${
                  isDark ? 'border-white/[0.06] pt-4' : 'border-slate-200/90 pt-4'
                }`}>
                  <button
                    type="button"
                    onClick={() => handleCardClick(cert)}
                    id={`cert-view-btn-${cert.id}`}
                    aria-label={`View certificate details for ${cert.title}`}
                    className="flex-1 min-h-[40px] py-2 px-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 transition-all bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] text-black hover:opacity-95 cursor-pointer active:scale-95 shadow-sm focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  {/* Legitimate External Verification Link (only when confirmed) */}
                  {hasVerifyLink && (
                    <a
                      href={cert.verificationUrl || cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Verify Credential Online"
                      aria-label={`Verify credential for ${cert.title}`}
                      className={`min-h-[40px] px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none ${
                        isDark
                          ? 'border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:border-[#22D3EE]/40'
                          : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Verify</span>
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* High-Resolution Certificate Modal Preview */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          allCertificates={certificates}
          onClose={() => setSelectedCert(null)}
          onSelectCertificate={(c) => setSelectedCert(c)}
        />
      )}
    </section>
  );
};

export default CertificatesShowcase;
