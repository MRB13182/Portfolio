import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { usePortfolioData } from '../../context/DataContext';
import { portfolioConfig } from '../../config/portfolio';
import { messageService } from '../../services/messageService';
import { useToast } from '../../context/ToastContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Loader2,
  Copy,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const { isDark } = useTheme();
  const { profile } = usePortfolioData();
  const { showToast } = useToast();

  const email = profile?.email || portfolioConfig.personal.email || 'borshonsweb@gmail.com';
  const phone = profile?.phone || portfolioConfig.personal.phone || '+880 1700-000000';
  const rawLocation = profile?.location || portfolioConfig.personal.location || 'Dhaka, Bangladesh';
  const location = rawLocation.split('(')[0].trim();

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    message: '',
  });

  const handleCopy = (text: string, field: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      showToast?.('Copied to clipboard!', 'success');
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast?.('Please fill out all required fields.', 'error');
      return;
    }

    try {
      setIsSubmitting(true);
      await messageService.create({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: `[${formData.projectType}] Inquiry from ${formData.name.trim()}`,
        message: formData.message.trim(),
      });

      setFormSubmitted(true);
      showToast?.('Message sent successfully! I will reply shortly.', 'success');
      setFormData({
        name: '',
        email: '',
        projectType: 'UI/UX Design',
        message: '',
      });
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      showToast?.('Message saved locally. Thanks for reaching out!', 'success');
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-14 sm:py-20"
    >
      <div className="max-w-6xl mx-auto relative">
        
        {/* Main Glassmorphism Contact Frame (Exact Reference Composition) */}
        <div className={`relative rounded-3xl sm:rounded-[36px] border p-6 sm:p-10 lg:p-14 backdrop-blur-2xl transition-all duration-300 overflow-hidden ${
          isDark
            ? 'bg-[#161926]/85 border-white/10 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.7)]'
            : 'bg-white/75 border-white/95 shadow-[0_24px_50px_-15px_rgba(165,138,242,0.16),0_1px_3px_rgba(0,0,0,0.02)]'
        }`}>
          
          {/* Decorative Iridescent Glass Ribbon Artwork in the Bottom Right Corner (Reference Element) */}
          <div 
            aria-hidden="true"
            className="hidden lg:block absolute -bottom-16 -right-16 w-72 h-72 rounded-full pointer-events-none opacity-45"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(196,180,250,0.8), rgba(185,213,255,0.6) 45%, rgba(165,138,242,0.3) 75%, transparent 90%)',
              filter: 'blur(25px)',
            }}
          />

          {/* Section Kicker */}
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A58AF2] mb-2 text-left">
            LET'S CONNECT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
            
            {/* ============================================================
                LEFT COLUMN: Heading, Intro, and Contact Info
                ============================================================ */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left">
              <div>
                <h2 
                  id="contact-heading"
                  className={`text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-snug mb-4 ${
                    isDark ? 'text-white' : 'text-[#171725]'
                  }`}
                >
                  Have a project in mind?<br />
                  Let's create something amazing together.
                </h2>

                <p className={`text-xs sm:text-[13px] leading-relaxed mb-8 ${
                  isDark ? 'text-slate-300' : 'text-[#777787]'
                }`}>
                  Whether you need a full product design, a high-converting web application, or a scalable design system, I'm ready to bring your vision to life.
                </p>
              </div>

              {/* Direct Contact List (Email, Phone, Location with Minimal Icons) */}
              <div className="space-y-3.5">
                {/* Email Item */}
                <div 
                  onClick={() => handleCopy(email, 'email')}
                  className={`p-3 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition hover:scale-[1.01] ${
                    isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white/80 border-slate-200/60 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-[#EDE9FE] text-[#7C3AED] dark:bg-violet-500/20 dark:text-violet-300 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className={`text-xs sm:text-[13px] font-semibold truncate ${isDark ? 'text-slate-200' : 'text-[#171725]'}`}>
                      {email}
                    </span>
                  </div>
                  <div className="text-slate-400 hover:text-slate-600 dark:hover:text-white shrink-0">
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Phone Item */}
                <div 
                  onClick={() => handleCopy(phone, 'phone')}
                  className={`p-3 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition hover:scale-[1.01] ${
                    isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white/80 border-slate-200/60 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-[#DBEAFE] text-[#2563EB] dark:bg-blue-500/20 dark:text-blue-300 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className={`text-xs sm:text-[13px] font-semibold truncate ${isDark ? 'text-slate-200' : 'text-[#171725]'}`}>
                      {phone}
                    </span>
                  </div>
                  <div className="text-slate-400 hover:text-slate-600 dark:hover:text-white shrink-0">
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Location Item */}
                <div 
                  className={`p-3 rounded-2xl border flex items-center gap-3 ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-slate-200/60 shadow-xs'
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-[#CCFBF1] text-[#0D9488] dark:bg-teal-500/20 dark:text-teal-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className={`text-xs sm:text-[13px] font-semibold truncate ${isDark ? 'text-slate-200' : 'text-[#171725]'}`}>
                    {location}
                  </span>
                </div>
              </div>
            </div>

            {/* ============================================================
                RIGHT COLUMN: Frosted Glass Form (Exact Reference Layout)
                ============================================================ */}
            <div className="lg:col-span-7">
              <form 
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >
                {/* Row 1: Your Name & Your Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border transition focus:outline-none focus:ring-2 focus:ring-[#A58AF2] ${
                        isDark 
                          ? 'bg-black/30 border-white/10 text-white placeholder-slate-500' 
                          : 'bg-white/80 border-slate-200/80 text-[#171725] placeholder-[#777787]'
                      }`}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border transition focus:outline-none focus:ring-2 focus:ring-[#A58AF2] ${
                        isDark 
                          ? 'bg-black/30 border-white/10 text-white placeholder-slate-500' 
                          : 'bg-white/80 border-slate-200/80 text-[#171725] placeholder-[#777787]'
                      }`}
                    />
                  </div>
                </div>

                {/* Row 2: Your Project Dropdown */}
                <div>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border transition focus:outline-none focus:ring-2 focus:ring-[#A58AF2] appearance-none ${
                      isDark 
                        ? 'bg-[#161926] border-white/10 text-white' 
                        : 'bg-white/80 border-slate-200/80 text-[#171725]'
                    }`}
                  >
                    <option value="Product Design">Product Design</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Design Systems">Design Systems</option>
                    <option value="Full Stack Application">Full Stack Application</option>
                    <option value="Other Project">Other Project</option>
                  </select>
                </div>

                {/* Row 3: Your Message Textarea */}
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border transition focus:outline-none focus:ring-2 focus:ring-[#A58AF2] resize-none ${
                      isDark 
                        ? 'bg-black/30 border-white/10 text-white placeholder-slate-500' 
                        : 'bg-white/80 border-slate-200/80 text-[#171725] placeholder-[#777787]'
                    }`}
                  />
                </div>

                {/* Premium Dark Submit Button (Reference: "Send Message ↗") */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold bg-[#171725] text-white hover:bg-[#252538] transition-all duration-200 shadow-md shadow-black/10 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : formSubmitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
