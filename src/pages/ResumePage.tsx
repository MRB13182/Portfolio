import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { PremiumResumeA4, ResumeCustomizationOptions } from '../components/resume/PremiumResumeA4';
import { exportResumeToPdf, exportResumeToPng, printResumeDocument } from '../utils/resumeExport';
import { 
  Download, 
  Printer, 
  Image as ImageIcon, 
  Sliders, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Sun, 
  Moon, 
  FileText, 
  Sparkles, 
  Check, 
  Layers, 
  ChevronRight,
  Loader2,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

export const ResumePage: React.FC = () => {
  const { isDark } = useTheme();
  const [resumeTheme, setResumeTheme] = useState<'light' | 'dark'>('light');
  const [zoomLevel, setZoomLevel] = useState<number>(0.85);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportStage, setExportStage] = useState<string>('');
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // Customization options state
  const [customOptions, setCustomOptions] = useState<ResumeCustomizationOptions>({
    showSkills: true,
    showProjects: true,
    showCertificates: true,
    showEducation: true,
    showExperience: false,
    showPortfolioMockup: true,
    showQrCode: true,
    selectedProjectsCount: 2,
    selectedCertsCount: 2,
  });

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(1.25, Math.max(0.45, Number((prev + delta).toFixed(2)))));
  };

  const handleResetZoom = () => {
    // If small screen, default to smaller zoom to fit viewport
    if (window.innerWidth < 640) {
      setZoomLevel(0.42);
    } else if (window.innerWidth < 1024) {
      setZoomLevel(0.65);
    } else {
      setZoomLevel(0.85);
    }
  };

  React.useEffect(() => {
    handleResetZoom();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDownloadPdf = async () => {
    try {
      setIsExporting(true);
      setExportStage('Initializing A4 layout engine...');
      
      const filename = `MD_Moshiur_Rahman_Resume_${resumeTheme === 'light' ? 'Light' : 'Dark'}.pdf`;
      
      await exportResumeToPdf('resume-a4-canvas', filename, (stage) => {
        setExportStage(stage);
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error('PDF export failed:', err);
    } finally {
      setIsExporting(false);
      setExportStage('');
    }
  };

  const handleDownloadPng = async () => {
    try {
      setIsExporting(true);
      setExportStage('Rasterizing 300 DPI high-definition PNG...');
      
      const filename = `MD_Moshiur_Rahman_Resume_${resumeTheme === 'light' ? 'Light' : 'Dark'}.png`;

      await exportResumeToPng('resume-a4-canvas', filename, (stage) => {
        setExportStage(stage);
      });

      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error('PNG export failed:', err);
    } finally {
      setIsExporting(false);
      setExportStage('');
    }
  };

  const handlePrint = () => {
    printResumeDocument('resume-a4-canvas');
  };

  const handleShareLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    }
  };

  return (
    <div className="min-h-screen pt-4 pb-20 sm:pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-violet-500/20 bg-violet-500/10 text-violet-400">
              <FileText className="w-3.5 h-3.5" />
              <span>Resume Generator &amp; CV Builder</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white dark:text-white">
              Curriculum Vitae{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                A4 Document
              </span>
            </h1>

            <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-2xl">
              Professional, two-column print-ready developer resume formatted strictly to standard international A4 specifications (210 &times; 297 mm).
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShareLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 transition"
              title="Copy shareable link"
            >
              {copySuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowDrawer(!showDrawer)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition ${
                showDrawer 
                  ? 'bg-violet-600 text-white border-violet-500 shadow-md shadow-violet-500/20' 
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Customize Sections</span>
            </button>
          </div>
        </div>

        {/* Master Floating Control Bar */}
        <div className={`mb-6 p-3 sm:p-4 rounded-2xl border backdrop-blur-xl transition-all ${
          isDark 
            ? 'bg-[#111722]/90 border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.5)]' 
            : 'bg-white/95 border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]'
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            
            {/* Left Controls: Theme Mode & Paper Style */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 hidden sm:inline">Theme:</span>
              <div className="flex rounded-xl p-0.5 bg-slate-900/40 dark:bg-black/30 border border-white/10">
                <button
                  type="button"
                  onClick={() => setResumeTheme('light')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    resumeTheme === 'light'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Light Paper</span>
                </button>

                <button
                  type="button"
                  onClick={() => setResumeTheme('dark')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    resumeTheme === 'dark'
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Dark Glass</span>
                </button>
              </div>
            </div>

            {/* Center Controls: Zoom Scaling */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => handleZoom(-0.1)}
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition"
                title="Zoom Out"
                disabled={zoomLevel <= 0.45}
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs font-mono font-semibold px-2 text-slate-300 min-w-[50px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                type="button"
                onClick={() => handleZoom(0.1)}
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition"
                title="Zoom In"
                disabled={zoomLevel >= 1.25}
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleResetZoom}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition flex items-center gap-1"
                title="Fit to Screen"
              >
                <Maximize2 className="w-3 h-3" />
                <span className="hidden sm:inline">Fit</span>
              </button>
            </div>

            {/* Right Controls: Export Actions */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* PDF Download Button */}
              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={isExporting}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:opacity-95 text-white shadow-md shadow-blue-500/20 active:scale-[0.98] transition disabled:opacity-50"
              >
                {isExporting ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Download className="w-3.5 h-3.5" />
                )}
                <span>Download PDF</span>
              </button>

              {/* High-Res PNG Button */}
              <button
                type="button"
                onClick={handleDownloadPng}
                disabled={isExporting}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 active:scale-[0.98] transition disabled:opacity-50"
                title="Download 300 DPI High-Resolution Image"
              >
                <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">High-Res PNG</span>
                <span className="sm:hidden">PNG</span>
              </button>

              {/* Native Print Button */}
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 active:scale-[0.98] transition"
                title="Print Document directly"
              >
                <Printer className="w-3.5 h-3.5 text-violet-400" />
                <span className="hidden sm:inline">Print</span>
              </button>
            </div>

          </div>

          {/* Exporting Progress Notification */}
          {isExporting && exportStage && (
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-300 animate-pulse">
              <span className="flex items-center gap-2">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>{exportStage}</span>
              </span>
              <span className="font-mono text-[10px] text-slate-400">Standard A4 2.5x Render</span>
            </div>
          )}
        </div>

        {/* Customization Drawer Panel (Conditional) */}
        {showDrawer && (
          <div className="mb-6 p-4 sm:p-5 rounded-2xl border border-violet-500/20 bg-slate-900/90 backdrop-blur-xl shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-bold text-white">Customize Resume Sections</span>
              </div>
              <span className="text-[11px] text-slate-400">
                Instantly adjust layout content without modifying portfolio data
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Skills Toggle */}
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition">
                <span className="text-xs font-semibold text-slate-300">Skills Matrix (8 Badges)</span>
                <input
                  type="checkbox"
                  checked={customOptions.showSkills}
                  onChange={(e) => setCustomOptions({ ...customOptions, showSkills: e.target.checked })}
                  className="rounded text-violet-600 focus:ring-violet-500 w-4 h-4"
                />
              </label>

              {/* Projects Toggle */}
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition">
                <span className="text-xs font-semibold text-slate-300">Featured Projects</span>
                <input
                  type="checkbox"
                  checked={customOptions.showProjects}
                  onChange={(e) => setCustomOptions({ ...customOptions, showProjects: e.target.checked })}
                  className="rounded text-violet-600 focus:ring-violet-500 w-4 h-4"
                />
              </label>

              {/* Certificates Toggle */}
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition">
                <span className="text-xs font-semibold text-slate-300">Certificates &amp; Credentials</span>
                <input
                  type="checkbox"
                  checked={customOptions.showCertificates}
                  onChange={(e) => setCustomOptions({ ...customOptions, showCertificates: e.target.checked })}
                  className="rounded text-violet-600 focus:ring-violet-500 w-4 h-4"
                />
              </label>

              {/* Education Toggle */}
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition">
                <span className="text-xs font-semibold text-slate-300">Education Timeline</span>
                <input
                  type="checkbox"
                  checked={customOptions.showEducation}
                  onChange={(e) => setCustomOptions({ ...customOptions, showEducation: e.target.checked })}
                  className="rounded text-violet-600 focus:ring-violet-500 w-4 h-4"
                />
              </label>

              {/* Portfolio Mockup Toggle */}
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition">
                <span className="text-xs font-semibold text-slate-300">Laptop Mockup Preview</span>
                <input
                  type="checkbox"
                  checked={customOptions.showPortfolioMockup}
                  onChange={(e) => setCustomOptions({ ...customOptions, showPortfolioMockup: e.target.checked })}
                  className="rounded text-violet-600 focus:ring-violet-500 w-4 h-4"
                />
              </label>

              {/* QR Code Toggle */}
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition">
                <span className="text-xs font-semibold text-slate-300">QR Code Link</span>
                <input
                  type="checkbox"
                  checked={customOptions.showQrCode}
                  onChange={(e) => setCustomOptions({ ...customOptions, showQrCode: e.target.checked })}
                  className="rounded text-violet-600 focus:ring-violet-500 w-4 h-4"
                />
              </label>

              {/* Experience Toggle */}
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition">
                <span className="text-xs font-semibold text-slate-300">Experience Snippet</span>
                <input
                  type="checkbox"
                  checked={customOptions.showExperience}
                  onChange={(e) => setCustomOptions({ ...customOptions, showExperience: e.target.checked })}
                  className="rounded text-violet-600 focus:ring-violet-500 w-4 h-4"
                />
              </label>

              {/* Project Count Selector */}
              <div className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/5">
                <span className="text-xs font-semibold text-slate-300">Projects Count</span>
                <select
                  value={customOptions.selectedProjectsCount}
                  onChange={(e) => setCustomOptions({ ...customOptions, selectedProjectsCount: Number(e.target.value) })}
                  className="bg-slate-800 text-xs text-white rounded px-2 py-1 border border-white/10"
                >
                  <option value={1}>1 Project</option>
                  <option value={2}>2 Projects (Default)</option>
                  <option value={3}>3 Projects</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Workspace / Desk Canvas */}
        <div className="relative rounded-3xl p-4 sm:p-8 md:p-12 overflow-x-auto flex flex-col items-center justify-center bg-slate-950/60 border border-white/10 shadow-2xl">
          
          {/* Subtle dimensions indicator badge */}
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/40 border border-white/10 text-slate-400">
            <span>A4 Document</span>
            <span>&bull;</span>
            <span>210 &times; 297 mm</span>
            <span>&bull;</span>
            <span>794 &times; 1123 px</span>
          </div>

          {/* Scaled A4 Sheet Container */}
          <div
            style={{
              width: `${794 * zoomLevel}px`,
              height: `${1123 * zoomLevel}px`,
              transition: 'width 0.2s ease-out, height 0.2s ease-out',
            }}
            className="relative flex-shrink-0"
          >
            <div
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'top left',
                width: '794px',
                height: '1123px',
              }}
              className="absolute top-0 left-0"
            >
              <PremiumResumeA4
                theme={resumeTheme}
                containerId="resume-a4-canvas"
                customOptions={customOptions}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
