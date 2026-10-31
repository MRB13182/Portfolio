import React from 'react';
import { ContactPage } from '../../pages/ContactPage';

// Kept as a compatibility wrapper for older routes/imports.
// The contact destination itself is now icon-only and driven by Super Admin social links.
export const ContactSection: React.FC = () => <ContactPage />;
