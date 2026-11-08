import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { ToastProvider } from './context/ToastContext';
import { LuxuryBackground } from './components/common/LuxuryBackground';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ScrollToTopButton } from './components/common/ScrollToTopButton';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { PageTransition } from './components/common/PageTransition';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminOverviewPage } from './pages/admin/AdminOverviewPage';
import { AdminProfilePage } from './pages/admin/AdminProfilePage';
import { AdminBrandingPage } from './pages/admin/AdminBrandingPage';
import { AdminProjectsPage } from './pages/admin/AdminProjectsPage';
import { AdminSkillsPage } from './pages/admin/AdminSkillsPage';
import { AdminExperiencePage } from './pages/admin/AdminExperiencePage';
import { AdminEducationPage } from './pages/admin/AdminEducationPage';
import { AdminCertificatesPage } from './pages/admin/AdminCertificatesPage';
import { AdminResumePage } from './pages/admin/AdminResumePage';
import { AdminSocialsPage } from './pages/admin/AdminSocialsPage';
import { AdminContactPage } from './pages/admin/AdminContactPage';
import { AdminHomepagePage } from './pages/admin/AdminHomepagePage';
import { AdminThemePage } from './pages/admin/AdminThemePage';
import { AdminSeoPage } from './pages/admin/AdminSeoPage';
import { AdminTestimonialsPage } from './pages/admin/AdminTestimonialsPage';
import { AdminSecurityPage } from './pages/admin/AdminSecurityPage';
import { AdminStoragePage } from './pages/admin/AdminStoragePage';
import { AdminMessagesPage } from './pages/admin/AdminMessagesPage';
import { AdminFooterPage } from './pages/admin/AdminFooterPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AnimatePresence } from 'motion/react';

function AppContent() {
  const { isNeon } = useTheme();
  const location = useLocation();
  const isAdminLogin = location.pathname === '/admin/login';
  const isAdminDashboard = location.pathname.startsWith('/admin') && !isAdminLogin;

  // Dedicated Admin Login Page
  if (isAdminLogin) {
    return <AdminLoginPage />;
  }

  // If in executive Admin Dashboard, render AdminLayout
  if (isAdminDashboard) {
    return (
      <ProtectedRoute>
        <AdminLayout>
          <Routes>
            <Route path="/admin" element={<AdminOverviewPage />} />
            <Route path="/admin/profile" element={<AdminProfilePage />} />
            <Route path="/admin/branding" element={<AdminBrandingPage />} />
            <Route path="/admin/skills" element={<AdminSkillsPage />} />
            <Route path="/admin/projects" element={<AdminProjectsPage />} />
            <Route path="/admin/certificates" element={<AdminCertificatesPage />} />
            <Route path="/admin/resume" element={<AdminResumePage />} />
            <Route path="/admin/socials" element={<AdminSocialsPage />} />
            <Route path="/admin/contact" element={<AdminContactPage />} />
            <Route path="/admin/homepage" element={<AdminHomepagePage />} />
            <Route path="/admin/theme" element={<AdminThemePage />} />
            <Route path="/admin/seo" element={<AdminSeoPage />} />
            <Route path="/admin/testimonials" element={<AdminTestimonialsPage />} />
            <Route path="/admin/security" element={<AdminSecurityPage />} />
            <Route path="/admin/storage" element={<AdminStoragePage />} />
            <Route path="/admin/experience" element={<AdminExperiencePage />} />
            <Route path="/admin/education" element={<AdminEducationPage />} />
            <Route path="/admin/messages" element={<AdminMessagesPage />} />
            <Route path="/admin/footer" element={<AdminFooterPage />} />
            <Route path="/admin/settings" element={<AdminSettingsPage />} />
            <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </AdminLayout>
      </ProtectedRoute>
    );
  }

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 flex flex-col justify-between ${
      isNeon 
        ? 'bg-[#F7F8F5] text-[#10110F] selection:bg-[#B7F32B]/35' 
        : 'bg-[#F7F7FB] text-[#171725] selection:bg-[#A58AF2]/25'
    }`}>
      {/* Ambient Animated Glows */}
      <LuxuryBackground />

      {/* Top Floating Glass Navigation Bar (Exact Reference) */}
      <Navbar />

      {/* Floating Scroll To Top Button (Threshold 300px) */}
      <ScrollToTopButton />

      {/* Dynamic Route View Transitions */}
      <main className="relative z-10 flex-grow pt-0 pb-8">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route
              path="/"
              element={
                <PageTransition key="home-root">
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/home"
              element={
                <PageTransition key="home-page">
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition key="about-page">
                  <AboutPage />
                </PageTransition>
              }
            />
            <Route
              path="/skills"
              element={
                <PageTransition key="skills-page">
                  <SkillsPage />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition key="projects-page">
                  <ProjectsPage />
                </PageTransition>
              }
            />
            <Route
              path="/experience"
              element={
                <PageTransition key="experience-page">
                  <ExperiencePage />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition key="contact-page">
                  <ContactPage />
                </PageTransition>
              }
            />
            
            {/* Strictly remove Resume & Certificates: Redirect to home */}
            <Route path="/certificates" element={<Navigate to="/" replace />} />
            <Route path="/resume" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Minimal Glass Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DataProvider>
          <ToastProvider>
            <BrowserRouter>
              <ScrollToTop />
              <ScrollProgressBar />
              <AppContent />
            </BrowserRouter>
          </ToastProvider>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
