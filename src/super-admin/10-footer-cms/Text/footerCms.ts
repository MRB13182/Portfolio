/**
 * 10 - FOOTER CMS (SUPER ADMIN)
 * 
 * Edit this file to configure the public website footer: copyright notices,
 * center banner slogans, footer navigation links, and contact information.
 */

export interface FooterNavigationLink {
  label: string;
  path: string;
}

export interface FooterCmsConfig {
  copyrightText: string;
  centerText: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  navigationLinks: FooterNavigationLink[];
  theme: 'minimal' | 'executive' | 'glass';
}

export const footerCms: FooterCmsConfig = {
  copyrightText: '© 2026 MD. Moshiur Rahman',
  centerText: 'All Rights Reserved.',
  description: 'Building thoughtful digital experiences with modern web development and user-centered design.',
  email: 'borshonsweb@gmail.com',
  phone: '+880 1700-000000',
  location: 'Dhaka, Bangladesh (Available Worldwide & Remote)',
  navigationLinks: [
    { label: 'Home', path: '/' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certificates', path: '/certificates' },
    { label: 'Contact', path: '/contact' },
  ],
  theme: 'minimal',
};

export default footerCms;
