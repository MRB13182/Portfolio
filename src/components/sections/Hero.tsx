import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { portfolioConfig } from '../../config/portfolio';
import { usePortfolioData } from '../../context/DataContext';
import { SafeImage } from '../common/SafeImage';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  ArrowRight, Mail, Sparkles, Layers, Play, CheckCircle2, Code2, Palette, Zap
} from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const { isDark } = useTheme();
  const { profile } = usePortfolioData();
  const [introOpen, setIntroOpen] = useState(false);

  const displayName = 'Moshiur Rahman';
  const profileImg = profile?.profile_image || portfolioConfig.assets.profileImage;
  const availability = profile?.availability_status || portfolioConfig.personal.availabilityStatus || 'Available for Freelance';
  const bioText = 'I build modern, responsive and user-friendly web experiences that make ideas come to life.';

  const glass = isDark
    ? 'border-white/[0.10] bg-[#0d1427]/75 shadow-[0_16px_44px_-24px_rgba(0,0,0,.75)]'
    : 'border-white/80 bg-white/75 shadow-[0_18px_42px_-24px_rgba(49,46,129,.22)]';
  const muted = isDark ? 'text-slate-400' : 'text-slate-600';
  const heading = isDark ? 'text-white' : 'text-slate-950';

  return (
    <>
      <section id="home" className="relative isolate overflow-hidden px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-blue-600/15 blur-[90px]" />
          <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-cyan-400/10 blur-[85px]" />
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .55, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="order-2 flex min-w-0 flex-col items-start text-left lg:order-1"
            >
              <div className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold backdrop-blur-xl ${glass} ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
                {availability}
              </div>

              <div className={`mb-3 inline-flex items-center gap-2 text-sm font-semibold ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
                <Sparkles className="h-4 w-4" /> Hello, I'm
              </div>

              <h1 className={`max-w-3xl text-[clamp(2.65rem,9.5vw,5.4rem)] font-black leading-[.98] tracking-[-.055em] ${heading}`}>
                {displayName.split(' ').slice(0, -1).join(' ') || displayName}
                {displayName.includes(' ') && (
                  <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text pb-2 text-transparent">
                    {displayName.split(' ').slice(-1)[0]}
                  </span>
                )}
              </h1>

              <div className="my-5 w-full max-w-[210px] sm:max-w-[240px]">
                <div className="relative aspect-square overflow-hidden rounded-[30px] border border-cyan-400/30 bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 p-[2px] shadow-[0_18px_50px_-22px_rgba(59,130,246,.45)]">
                  <div className={`h-full w-full overflow-hidden rounded-[28px] p-1.5 ${isDark ? 'bg-[#080d1b]' : 'bg-white'}`}>
                    <SafeImage src={profileImg} alt={`${displayName} profile photo`} fallbackType="profile" className="h-full w-full rounded-[22px] object-cover" />
                  </div>
                </div>
              </div>

              <p className={`mt-2 max-w-xl text-base font-bold leading-relaxed sm:text-lg ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                A Creative Web Developer <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>&amp;</span> <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">UI/UX Designer</span>
              </p>
              <p className={`mt-3 max-w-lg text-sm leading-7 sm:text-base ${muted}`}>{bioText}</p>

              <div className="mt-7 flex w-full flex-wrap items-center gap-3 sm:w-auto">
                <Link
                  to="/projects"
                  id="hero-view-work-btn"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-blue-600/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  View My Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIntroOpen(true)}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold backdrop-blur-xl transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${glass} ${heading}`}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20"><Play className="h-3 w-3 fill-current" /></span>
                  Watch Intro
                </button>
              </div>

              <div className={`mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium ${muted}`}>
                <span className="inline-flex items-center gap-1.5"><Code2 className="h-4 w-4 text-cyan-400" /> Clean code</span>
                <span className="inline-flex items-center gap-1.5"><Palette className="h-4 w-4 text-violet-400" /> Thoughtful design</span>
                <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-blue-400" /> Responsive builds</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: .96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: .65, delay: .12, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden"
            >
              <div className="relative mx-auto aspect-[.88/1] w-full max-w-[400px]">
                <div aria-hidden="true" className="absolute inset-4 rounded-[38%_38%_28%_28%] bg-gradient-to-br from-cyan-400/45 via-blue-600/35 to-violet-600/50 blur-2xl" />
                <div className="absolute inset-0 rounded-[32%_32%_24%_24%] bg-gradient-to-br from-cyan-300 via-blue-600 to-violet-600 p-[2px] shadow-[0_0_45px_rgba(79,70,229,.22)]">
                  <div className={`h-full w-full overflow-hidden rounded-[inherit] p-2 ${isDark ? 'bg-[#080d1b]' : 'bg-[#f4f5ff]'}`}>
                    <div className={`relative h-full w-full overflow-hidden rounded-[inherit] border ${isDark ? 'border-white/10 bg-slate-900' : 'border-white bg-white'}`}>
                      <SafeImage src={profileImg} alt={displayName} fallbackType="profile" className="h-full w-full object-cover" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b19]/80 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <div className={`absolute -left-2 bottom-8 flex items-center gap-2.5 rounded-2xl border px-3 py-2.5 backdrop-blur-2xl sm:-left-7 sm:px-4 ${glass}`}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 text-cyan-300"><CheckCircle2 className="h-5 w-5" /></div>
                  <div>
                    <div className={`text-xs font-bold ${heading}`}>Available to work</div>
                    <div className={`mt-0.5 text-[10px] ${muted}`}>Let's build something</div>
                  </div>
                </div>

                <div className={`absolute -right-1 top-12 flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-xl sm:-right-4 ${glass}`}>
                  <Sparkles className="h-5 w-5 text-violet-400" />
                </div>
              </div>
            </motion.div>
          </div>

          <ScrollReveal direction="up" distance={14} duration={.45} delay={.12} className="mt-8 sm:mt-12">
            <div className={`grid grid-cols-3 divide-x overflow-hidden rounded-3xl border backdrop-blur-2xl ${glass} ${isDark ? 'divide-white/10' : 'divide-slate-200/80'}`}>
              {[
                { value: '20+', label: 'Projects Completed' },
                { value: '10+', label: 'Happy Clients' },
                { value: '3+', label: 'Years of Experience' },
              ].map((item) => (
                <div key={item.label} className="px-2 py-4 text-center sm:px-5 sm:py-5">
                  <div className="bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text text-2xl font-black tracking-tight text-transparent sm:text-3xl">{item.value}</div>
                  <div className={`mx-auto mt-1 max-w-24 text-[9px] font-medium leading-snug sm:max-w-none sm:text-xs ${muted}`}>{item.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {introOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIntroOpen(false); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="intro-modal-title" className={`w-full max-w-md rounded-3xl border p-6 shadow-2xl ${glass}`}>
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 id="intro-modal-title" className={`text-lg font-bold ${heading}`}>A little about me</h2>
              <button type="button" onClick={() => setIntroOpen(false)} aria-label="Close intro" className={`rounded-xl border p-2 ${isDark ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-600'}`}>✕</button>
            </div>
            <p className={`text-sm leading-7 ${muted}`}>Hi, I'm {displayName}. I enjoy turning ideas into clear, thoughtful digital experiences. Explore my projects to see the kind of work I create.</p>
            <Link to="/about" onClick={() => setIntroOpen(false)} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white">More about me <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      )}
    </>
  );
};
