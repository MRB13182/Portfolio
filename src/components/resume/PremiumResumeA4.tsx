import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { portfolioConfig } from '../../config/portfolio';
import { usePortfolioData } from '../../context/DataContext';
import { TechLogo } from '../common/TechLogo';
import { IssuerLogo } from '../common/IssuerLogo';
import { SafeImage } from '../common/SafeImage';
import { 
  User, 
  Layers, 
  Code2, 
  Award, 
  GraduationCap, 
  Briefcase,
  Phone, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Laptop, 
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export interface ResumeCustomizationOptions {
  showExperience?: boolean;
  showEducation?: boolean;
  showCertificates?: boolean;
  showProjects?: boolean;
  showSkills?: boolean;
  showQrCode?: boolean;
  showPortfolioMockup?: boolean;
  selectedProjectsCount?: number;
  selectedCertsCount?: number;
}

interface PremiumResumeA4Props {
  theme?: 'light' | 'dark';
  containerId?: string;
  customOptions?: ResumeCustomizationOptions;
}

export const PremiumResumeA4: React.FC<PremiumResumeA4Props> = ({
  theme = 'light',
  containerId = 'resume-a4-canvas',
  customOptions = {} as ResumeCustomizationOptions,
}) => {
  const isDark = theme === 'dark';
  const { profile, projects: dbProjects, skills: dbSkills, certificates: dbCertificates } = usePortfolioData();

  // 1. Automatically Extract All Personal Information from Portfolio Data / Config
  const fullName = profile?.name || portfolioConfig.personal.name || 'MD. Moshiur Rahman';
  const primaryTitle = (profile?.titles && profile.titles[0]) || portfolioConfig.personal.titles[0] || 'Web Developer';
  const profileImage = profile?.profile_image || portfolioConfig.assets.profileImage || '/profile/profile.png';
  
  const bio = profile?.bio || 
    'A passionate Web Developer who loves building modern, responsive and user-friendly web applications. I enjoy turning ideas into real products and continuously learning new technologies to improve my skills.';

  const phone = profile?.phone || portfolioConfig.personal.phone || '+880 1700-000000';
  const email = profile?.email || portfolioConfig.personal.email || 'borshonsweb@gmail.com';
  const rawLocation = profile?.location || portfolioConfig.personal.location || 'Dhaka, Bangladesh';
  const location = rawLocation.split('(')[0].trim();

  // Social Links
  const githubUrl = portfolioConfig.socials.find(s => s.name?.toLowerCase().includes('github'))?.url || 'https://github.com/MRB13182';
  const linkedinUrl = portfolioConfig.socials.find(s => s.name?.toLowerCase().includes('linkedin'))?.url || 'https://www.linkedin.com/in/moshiur-rahman';
  const portfolioUrl = 'https://mrb13182.github.io/Portfolio';
  const displayPortfolioUrl = 'mrb13182.github.io/Portfolio';

  // Projects list (real portfolio projects)
  const allProjects = (dbProjects && dbProjects.length > 0) ? dbProjects : portfolioConfig.projects;
  const projectsCount = customOptions.selectedProjectsCount || 2;
  const projects = allProjects.slice(0, projectsCount);

  // Certificates list
  const allCerts = (dbCertificates && dbCertificates.length > 0) ? dbCertificates : portfolioConfig.certificates;
  const certsCount = customOptions.selectedCertsCount || 2;
  const certificates = allCerts.slice(0, certsCount);

  // Education list
  const education = portfolioConfig.education && portfolioConfig.education.length > 0
    ? portfolioConfig.education[0]
    : {
        degree: 'B.Sc. in Computer Science & Engineering (CSE)',
        institution: 'Leading University of Engineering & Technology',
        duration: '2015 - 2019',
        grade: 'First Class Honors',
      };

  // Experience list
  const experience = portfolioConfig.experience && portfolioConfig.experience.length > 0
    ? portfolioConfig.experience[0]
    : null;

  // Selected Skills matching the 8-card grid in the reference image
  const defaultSkillKeys = [
    { name: 'HTML', logo: 'html5' },
    { name: 'CSS', logo: 'css3' },
    { name: 'JavaScript', logo: 'javascript' },
    { name: 'React', logo: 'react' },
    { name: 'Tailwind CSS', logo: 'tailwindcss' },
    { name: 'Git & GitHub', logo: 'github' },
    { name: 'Firebase', logo: 'firebase' },
    { name: 'VS Code', logo: 'vscode' },
  ];

  // Dynamic QR Code generation for real portfolio URL
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  useEffect(() => {
    QRCode.toDataURL(portfolioUrl, {
      width: 140,
      margin: 1,
      color: {
        dark: isDark ? '#000000' : '#0F172A',
        light: '#FFFFFF',
      },
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error('QR code generation error:', err));
  }, [portfolioUrl, isDark]);

  // Color Palette Tokens
  const colors = {
    canvasBg: isDark ? '#080B12' : '#FFFFFF',
    canvasBgGrad: isDark 
      ? 'linear-gradient(145deg, #080B12 0%, #0E1420 50%, #111722 100%)' 
      : 'linear-gradient(145deg, #F8FAFC 0%, #FFFFFF 50%, #F1F5F9 100%)',
    headerName: isDark ? '#FFFFFF' : '#0B1020',
    headerTitle: isDark ? '#22D3EE' : '#5B35B5',
    textMain: isDark ? '#F8FAFC' : '#0F172A',
    textMuted: isDark ? '#94A3B8' : '#334155',
    textSubtle: isDark ? '#64748B' : '#64748B',
    capsuleBg: isDark ? '#1E293B' : '#1E1B4B',
    capsuleText: '#FFFFFF',
    cardBg: isDark ? '#111722' : '#FFFFFF',
    cardBorder: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.9)',
    cardShadow: isDark ? '0 4px 16px rgba(0, 0, 0, 0.5)' : '0 2px 10px rgba(0, 0, 0, 0.04)',
    accentPrimary: isDark ? '#22D3EE' : '#5B35B5',
    accentSecondary: isDark ? '#8B5CF6' : '#7C3AED',
    tagBg: isDark ? 'rgba(34, 211, 238, 0.12)' : '#EDE9FE',
    tagText: isDark ? '#22D3EE' : '#5B35B5',
    leftColBg: isDark ? 'rgba(17, 23, 34, 0.55)' : 'rgba(248, 250, 252, 0.7)',
  };

  return (
    <div
      id={containerId}
      style={{
        width: '794px',
        minHeight: '1123px',
        height: '1123px',
        background: colors.canvasBgGrad,
        color: colors.textMain,
        fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      }}
      className="relative overflow-hidden box-border select-none flex flex-col justify-between"
    >
      {/* ==============================================================
          ATMOSPHERIC DECORATIVE SHAPES (TOP & BOTTOM WAVES)
          Matches the reference image's flowing organic corner accents
          ============================================================== */}
      
      {/* Top-Right Decorative Flow & Tech Watermark */}
      <div 
        aria-hidden="true"
        className="absolute top-0 right-0 w-[380px] h-[220px] pointer-events-none overflow-hidden z-0"
      >
        {/* Soft violet/cyan corner gradient wash */}
        <div 
          className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full opacity-35 blur-2xl"
          style={{
            background: isDark
              ? 'radial-gradient(circle, #8B5CF6 0%, #22D3EE 60%, transparent 80%)'
              : 'radial-gradient(circle, #C4B5FD 0%, #BAE6FD 60%, transparent 80%)'
          }}
        />

        {/* Angled Laptop / Workspace Line Art (from Reference) */}
        <div 
          className="absolute top-2 right-4 opacity-25 flex items-center gap-3"
          style={{ transform: 'rotate(-4deg)' }}
        >
          <div className="w-44 h-28 rounded-xl border border-slate-300 dark:border-white/20 bg-slate-200/40 dark:bg-white/5 backdrop-blur-sm p-1.5 shadow-sm">
            <div className="w-full h-full rounded-lg bg-slate-900/10 dark:bg-black/30 flex items-center justify-center">
              <Laptop className="w-8 h-8 text-slate-400 dark:text-slate-500 opacity-60" />
            </div>
          </div>
          <span className="text-3xl font-black font-mono tracking-tighter opacity-40 text-slate-500 dark:text-slate-400">
            &lt;/&gt;
          </span>
        </div>
      </div>

      {/* Bottom Organic Wave Accents */}
      <div 
        aria-hidden="true"
        className="absolute -bottom-10 -right-10 w-[260px] h-[160px] pointer-events-none z-0"
      >
        <div 
          className="w-full h-full rounded-tl-[120px] opacity-60"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.45), rgba(34, 211, 238, 0.35))'
              : 'linear-gradient(135deg, #7C3AED, #9333EA)'
          }}
        />
      </div>

      <div 
        aria-hidden="true"
        className="absolute -bottom-16 -left-12 w-[180px] h-[120px] pointer-events-none z-0"
      >
        <div 
          className="w-full h-full rounded-tr-[100px] opacity-40"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(139, 92, 246, 0.2))'
              : 'linear-gradient(135deg, #38BDF8, #818CF8)'
          }}
        />
      </div>

      {/* ==============================================================
          MAIN 2-COLUMN A4 CONTENT GRID
          Exact visual proportion: Left Column (38%) + Right Column (62%)
          ============================================================== */}
      <div className="relative z-10 w-full h-full px-7 py-6 grid grid-cols-12 gap-5 flex-grow">
        
        {/* ============================================================
            LEFT COLUMN (Cols 1-5, approx 38% width)
            Profile Photo • Contact • Portfolio Website • QR Code
            ============================================================ */}
        <div className="col-span-5 flex flex-col justify-between pr-1">
          
          <div>
            {/* 1. Large Rounded Profile Photo Frame */}
            <div className="relative mb-5 flex justify-center">
              <div 
                style={{
                  boxShadow: isDark 
                    ? '0 16px 36px -8px rgba(0, 0, 0, 0.8), 0 0 24px rgba(34, 211, 238, 0.15)' 
                    : '0 12px 32px -8px rgba(91, 53, 181, 0.22), 0 2px 8px rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : '#FFFFFF',
                }}
                className="w-[200px] h-[225px] rounded-[30px] p-2 bg-white dark:bg-[#111722] border-[3px] overflow-hidden"
              >
                <div className="w-full h-full rounded-[24px] overflow-hidden bg-slate-900 relative">
                  <SafeImage
                    src={profileImage}
                    alt={fullName}
                    fallbackType="profile"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle inner photo vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* 2. Contact Section */}
            <div className="mb-4">
              {/* Rounded Capsule Header */}
              <div 
                style={{ backgroundColor: colors.capsuleBg, color: colors.capsuleText }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-2.5 shadow-sm"
              >
                <User className="w-3.5 h-3.5" />
                <span>Contact</span>
              </div>

              {/* Contact Information List */}
              <div className="space-y-1.5 text-[10px]">
                {/* Phone */}
                {phone && (
                  <div className="flex items-center gap-2">
                    <div 
                      style={{ backgroundColor: colors.capsuleBg }}
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white"
                    >
                      <Phone className="w-3 h-3" />
                    </div>
                    <span style={{ color: colors.textMain }} className="font-semibold truncate">
                      {phone}
                    </span>
                  </div>
                )}

                {/* Email */}
                {email && (
                  <div className="flex items-center gap-2">
                    <div 
                      style={{ backgroundColor: colors.capsuleBg }}
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white"
                    >
                      <Mail className="w-3 h-3" />
                    </div>
                    <span style={{ color: colors.textMain }} className="font-semibold truncate">
                      {email}
                    </span>
                  </div>
                )}

                {/* Location */}
                {location && (
                  <div className="flex items-center gap-2">
                    <div 
                      style={{ backgroundColor: colors.capsuleBg }}
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white"
                    >
                      <MapPin className="w-3 h-3" />
                    </div>
                    <span style={{ color: colors.textMain }} className="font-semibold truncate">
                      {location}
                    </span>
                  </div>
                )}

                {/* GitHub */}
                {githubUrl && (
                  <div className="flex items-center gap-2">
                    <div 
                      style={{ backgroundColor: colors.capsuleBg }}
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white"
                    >
                      <Github className="w-3 h-3" />
                    </div>
                    <span style={{ color: colors.textMain }} className="font-semibold truncate">
                      {githubUrl.replace(/^https?:\/\/(www\.)?/, '')}
                    </span>
                  </div>
                )}

                {/* LinkedIn */}
                {linkedinUrl && (
                  <div className="flex items-center gap-2">
                    <div 
                      style={{ backgroundColor: colors.capsuleBg }}
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white"
                    >
                      <Linkedin className="w-3 h-3" />
                    </div>
                    <span style={{ color: colors.textMain }} className="font-semibold truncate">
                      {linkedinUrl.replace(/^https?:\/\/(www\.)?/, '').slice(0, 24)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 3. Portfolio Website Preview Section */}
            {(customOptions.showPortfolioMockup ?? true) && (
              <div className="mb-4">
                {/* Capsule Header */}
                <div 
                  style={{ backgroundColor: colors.capsuleBg, color: colors.capsuleText }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-2 shadow-sm"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>Portfolio Website</span>
                </div>

                {/* Laptop Mockup with real portfolio preview */}
                <div className="relative mx-auto w-[185px] mb-2">
                  {/* Laptop Top Bezel & Screen */}
                  <div className="w-full bg-[#1E293B] rounded-t-lg p-1 pt-1.5 shadow-md">
                    <div className="w-full h-[100px] rounded bg-[#080B12] overflow-hidden relative border border-slate-700/60 flex items-center justify-center p-2 text-center">
                      {/* Live portfolio card simulation */}
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full overflow-hidden border border-cyan-400/50 mb-1">
                          <img src={profileImage} alt="" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[7px] text-white font-black leading-tight">
                          Hi, I'm {fullName.split(' ')[0] || fullName}
                        </span>
                        <span className="text-[6px] text-cyan-300 font-mono">
                          {primaryTitle}
                        </span>
                        <div className="mt-1 flex gap-1">
                          <span className="px-1 py-0.2 rounded text-[5px] bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold">
                            View Work
                          </span>
                          <span className="px-1 py-0.2 rounded text-[5px] bg-white/10 text-white">
                            Contact
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Bottom Base & Notch */}
                  <div className="w-[200px] -ml-[7.5px] h-2 bg-slate-300 dark:bg-slate-700 rounded-b-md relative flex justify-center shadow-sm">
                    <div className="w-8 h-1 bg-slate-400 dark:bg-slate-600 rounded-b-sm" />
                  </div>
                </div>

                {/* Descriptive caption */}
                <p 
                  style={{ color: colors.textSubtle }}
                  className="text-[8.5px] text-center leading-snug px-1 mb-2"
                >
                  Explore my work, projects and more on my portfolio website.
                </p>

                {/* URL Link Pill Button */}
                <div className="flex justify-center">
                  <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: isDark 
                        ? 'linear-gradient(135deg, #0891B2, #7C3AED)' 
                        : 'linear-gradient(135deg, #5B35B5, #7C3AED)',
                      color: '#FFFFFF',
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-bold shadow-sm hover:opacity-95 transition-opacity"
                  >
                    <span>{displayPortfolioUrl}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 4. QR Code with Corner Bracket Accents (Reference Feature) */}
          {(customOptions.showQrCode ?? true) && (
            <div className="mt-auto flex flex-col items-center pt-2">
              <div className="relative p-2 flex items-center justify-center">
                {/* L-shaped decorative brackets around QR Code */}
                <div 
                  style={{ borderColor: colors.accentPrimary }}
                  className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 rounded-tl-sm pointer-events-none" 
                />
                <div 
                  style={{ borderColor: colors.accentPrimary }}
                  className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 rounded-tr-sm pointer-events-none" 
                />
                <div 
                  style={{ borderColor: colors.accentPrimary }}
                  className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 rounded-bl-sm pointer-events-none" 
                />
                <div 
                  style={{ borderColor: colors.accentPrimary }}
                  className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 rounded-br-sm pointer-events-none" 
                />

                {/* QR Code Graphic */}
                <div className="p-1 rounded bg-white shadow-xs">
                  {qrCodeDataUrl ? (
                    <img 
                      src={qrCodeDataUrl} 
                      alt="Portfolio QR Code" 
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-slate-100 flex items-center justify-center text-[8px] font-mono">
                      QR Code
                    </div>
                  )}
                </div>
              </div>

              <span 
                style={{ color: colors.textMain }}
                className="text-[9px] font-bold tracking-tight mt-1 text-center"
              >
                Scan to Visit Portfolio
              </span>
            </div>
          )}

        </div>

        {/* ============================================================
            RIGHT COLUMN (Cols 6-12, approx 62% width)
            Header • About Me • Skills • Projects • Certificates • Education
            ============================================================ */}
        <div className="col-span-7 flex flex-col justify-between pl-1">
          
          {/* 1. Header Name & Title */}
          <div className="mb-3.5">
            <h1 
              style={{ color: colors.headerName }}
              className="text-[28px] font-black tracking-tight leading-none mb-1 uppercase"
            >
              {fullName}
            </h1>

            <div 
              style={{ color: colors.headerTitle }}
              className="text-[15px] font-bold tracking-tight mb-2"
            >
              {primaryTitle}
            </div>

            {/* Dark "Resume" Badge (Exact from Reference) */}
            <div 
              style={{ backgroundColor: colors.capsuleBg, color: '#FFFFFF' }}
              className="inline-block px-4 py-0.5 rounded-full text-[11px] font-bold tracking-wide shadow-xs"
            >
              Resume
            </div>
          </div>

          {/* 2. About Me Section */}
          <div className="mb-3">
            <div 
              style={{ backgroundColor: colors.capsuleBg, color: colors.capsuleText }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-1.5 shadow-sm"
            >
              <User className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            <p 
              style={{ color: colors.textMuted }}
              className="text-[9.5px] leading-relaxed"
            >
              {bio}
            </p>
          </div>

          {/* 3. Skills Matrix (4x2 Grid with Official Tech Logos) */}
          {(customOptions.showSkills ?? true) && (
            <div className="mb-3">
              <div 
                style={{ backgroundColor: colors.capsuleBg, color: colors.capsuleText }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-1.5 shadow-sm"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Skills</span>
              </div>

              {/* 4x2 Clean Cards Grid */}
              <div className="grid grid-cols-4 gap-1.5">
                {defaultSkillKeys.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      backgroundColor: colors.cardBg,
                      borderColor: colors.cardBorder,
                      boxShadow: colors.cardShadow,
                    }}
                    className="p-1.5 rounded-lg border flex items-center gap-1.5"
                  >
                    <TechLogo logo={skill.logo} size={15} className="w-3.5 h-3.5 shrink-0" />
                    <span 
                      style={{ color: colors.textMain }}
                      className="text-[8.5px] font-bold truncate leading-none"
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Projects Section (Horizontal Cards with Screenshots) */}
          {(customOptions.showProjects ?? true) && (
            <div className="mb-3">
              <div 
                style={{ backgroundColor: colors.capsuleBg, color: colors.capsuleText }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-1.5 shadow-sm"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Projects</span>
              </div>

              <div className="space-y-2">
                {projects.map((proj, idx) => (
                  <div
                    key={proj.id || idx}
                    style={{
                      backgroundColor: colors.cardBg,
                      borderColor: colors.cardBorder,
                      boxShadow: colors.cardShadow,
                    }}
                    className="p-2 rounded-xl border flex items-center gap-2.5"
                  >
                    {/* Project Screenshot Frame */}
                    <div className="w-[105px] h-[64px] rounded-lg overflow-hidden bg-slate-900 border border-slate-200 dark:border-white/10 shrink-0 relative shadow-xs">
                      <SafeImage
                        src={proj.image}
                        alt={proj.title}
                        fallbackType="project"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-0.5">
                        <span 
                          style={{ color: colors.textMain }}
                          className="font-bold text-[10px] truncate"
                        >
                          {proj.title}
                        </span>
                        <ExternalLink className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                      </div>

                      <p 
                        style={{ color: colors.textMuted }}
                        className="text-[8.5px] line-clamp-2 leading-tight mb-1.5"
                      >
                        {proj.tagline || proj.description}
                      </p>

                      {/* Tech Tag Pills */}
                      <div className="flex flex-wrap gap-1">
                        {proj.techStack.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              backgroundColor: colors.tagBg,
                              color: colors.tagText,
                            }}
                            className="px-1.5 py-0.2 rounded text-[7.5px] font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Certificates Section (2-Column Cards with Issuer Badge) */}
          {(customOptions.showCertificates ?? true) && (
            <div className="mb-3">
              <div 
                style={{ backgroundColor: colors.capsuleBg, color: colors.capsuleText }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-1.5 shadow-sm"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Certificates</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {certificates.map((cert, idx) => (
                  <div
                    key={cert.id || idx}
                    style={{
                      backgroundColor: colors.cardBg,
                      borderColor: colors.cardBorder,
                      boxShadow: colors.cardShadow,
                    }}
                    className="p-2 rounded-xl border flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <IssuerLogo issuer={cert.issuer} className="w-3.5 h-3.5 shrink-0" />
                        <span 
                          style={{ color: colors.textMain }}
                          className="font-bold text-[9px] truncate"
                        >
                          {cert.issuer}
                        </span>
                      </div>
                      <CheckCircle2 
                        style={{ color: colors.accentSecondary }}
                        className="w-3 h-3 shrink-0" 
                      />
                    </div>

                    <div 
                      style={{ color: colors.textMuted }}
                      className="text-[8px] font-semibold line-clamp-2 leading-tight"
                    >
                      {cert.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Education Section (Vertical Timeline) */}
          {(customOptions.showEducation ?? true) && (
            <div className="mb-1">
              <div 
                style={{ backgroundColor: colors.capsuleBg, color: colors.capsuleText }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-1.5 shadow-sm"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </div>

              {/* Timeline Item */}
              <div className="relative pl-3.5 border-l-2 border-violet-400 dark:border-cyan-400 text-[9px]">
                {/* Node Dot */}
                <div 
                  style={{ backgroundColor: colors.accentSecondary }}
                  className="absolute -left-[5px] top-0.5 w-2 h-2 rounded-full border border-white"
                />

                <div 
                  style={{ color: colors.textMain }}
                  className="font-bold leading-tight"
                >
                  {education.degree}
                </div>

                <div 
                  style={{ color: colors.textMuted }}
                  className="text-[8.5px] font-medium"
                >
                  {education.institution}
                </div>

                <div 
                  style={{ color: colors.textSubtle }}
                  className="text-[8px] mt-0.5"
                >
                  {education.duration} &bull; {education.grade}
                </div>
              </div>
            </div>
          )}

          {/* Optional: Experience Snippet if available and enabled */}
          {customOptions.showExperience && experience && (
            <div className="mt-2 pt-2 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center justify-between text-[9px]">
                <span className="font-bold">{experience.position}</span>
                <span className="text-[8px] text-slate-500">{experience.duration}</span>
              </div>
              <p className="text-[8px] text-slate-500 line-clamp-1">{experience.company} &bull; {experience.description}</p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
