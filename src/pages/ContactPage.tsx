import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolioData } from '../context/DataContext';
import {
  Github, Linkedin, Facebook, Instagram, Youtube, Mail, Send, MessageCircle,
  Globe, ExternalLink, Link as LinkIcon, Music2, MessageSquare
} from 'lucide-react';

const iconByName: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  github: Github, linkedin: Linkedin, facebook: Facebook, instagram: Instagram,
  youtube: Youtube, mail: Mail, email: Mail, send: Send, telegram: Send,
  whatsapp: MessageCircle, messagecircle: MessageCircle, messagesquare: MessageSquare,
  globe: Globe, website: Globe, twitter: MessageSquare, x: MessageSquare, tiktok: Music2,
};

const iconColor: Record<string, string> = {
  github: '#F8FAFC', linkedin: '#0A66C2', facebook: '#1877F2', instagram: '#E4405F',
  youtube: '#FF0033', mail: '#EA4335', email: '#EA4335', telegram: '#229ED9',
  send: '#229ED9', whatsapp: '#25D366', messagecircle: '#25D366', messagesquare: '#25D366',
  twitter: '#1D9BF0', x: '#F8FAFC', tiktok: '#111827',
};

export const ContactPage: React.FC = () => {
  const { isDark } = useTheme();
  const { socials } = usePortfolioData();
  const links = (socials || []).filter((s: any) =>
    (s.is_active ?? s.enabled ?? true) && typeof s.url === 'string' && s.url.trim().length > 0
  );

  return (
    <main aria-label="Contact links" className="relative min-h-[76vh] px-5 pb-10 pt-8 sm:pt-14">
      <div className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-64 max-w-xl rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-violet-500/15 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
        <div className="mb-7 text-center">
          <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border text-base font-black tracking-tight backdrop-blur-xl ${isDark ? 'border-cyan-300/25 bg-white/[0.06] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,.13)]' : 'border-white bg-white/80 text-blue-600 shadow-lg shadow-blue-900/10'}`}>
            MR
          </div>
          <p className={`text-xs font-bold uppercase tracking-[.2em] ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Get in touch</p>
          <h1 className={`mt-2 text-3xl font-black tracking-tight sm:text-4xl ${isDark ? 'text-white' : 'text-slate-950'}`}>Let’s connect</h1>
          <p className={`mx-auto mt-3 max-w-sm text-sm leading-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project idea, collaboration in mind, or just want to say hello? Choose a contact icon below and reach me directly.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
          {links.map((link: any, index: number) => {
            const key = String(link.icon || link.name || link.platform || 'link').replace(/[^a-zA-Z]/g, '').toLowerCase();
            const Icon = iconByName[key] || iconByName[String(link.name || link.platform || '').replace(/[^a-zA-Z]/g, '').toLowerCase()] || LinkIcon;
            const color = link.color || iconColor[key] || '#38BDF8';
            const url = String(link.url).trim();
            const isEmail = url.startsWith('mailto:') || String(link.action_type || link.actionType).toLowerCase() === 'email';
            return (
              <a
                key={link.id || link.name || link.platform || index}
                href={url}
                target={isEmail || url.startsWith('tel:') ? undefined : '_blank'}
                rel={isEmail || url.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                aria-label={`Open ${link.name || link.platform || 'contact link'}`}
                title={link.name || link.platform || 'Open link'}
                className={`group relative flex aspect-square max-h-24 items-center justify-center overflow-hidden rounded-2xl border backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-[.98] sm:max-h-28 ${isDark ? 'border-white/10 bg-[#101a2b]/80 shadow-[0_12px_25px_-18px_rgba(0,0,0,.95)] hover:border-cyan-300/50' : 'border-white bg-white/75 shadow-[0_12px_25px_-18px_rgba(30,64,175,.35)] hover:border-blue-300'}`}
              >
                <span className="pointer-events-none absolute inset-0 opacity-50 transition-opacity group-hover:opacity-100" style={{ background: `radial-gradient(circle at 50% 25%, ${color}25, transparent 65%)` }} />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border transition duration-300 group-hover:scale-105 sm:h-14 sm:w-14" style={{ color, borderColor: `${color}55`, background: `${color}18`, boxShadow: `0 0 24px ${color}12` }}>
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
                </span>
                <ExternalLink className={`absolute bottom-2 right-2 h-3 w-3 opacity-35 transition group-hover:opacity-90 ${isDark ? 'text-slate-200' : 'text-slate-600'}`} />
              </a>
            );
          })}
        </div>
        <p className={`mt-6 text-center text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>I usually respond as soon as I can. Thanks for stopping by!</p>
        <div aria-hidden="true" className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-80" />
      </div>
    </main>
  );
};
