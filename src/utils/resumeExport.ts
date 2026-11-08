import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';

export interface ExportProgressCallback {
  (stage: string): void;
}

/**
 * Exports an HTML element to high-resolution A4 PDF (210mm x 297mm)
 */
export async function exportResumeToPdf(
  elementId: string,
  filename: string = 'MD_Moshiur_Rahman_Resume.pdf',
  onProgress?: ExportProgressCallback
): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element #${elementId} not found in DOM`);
  }

  onProgress?.('Preparing high-resolution render...');

  if (document.fonts) {
    try {
      await document.fonts.ready;
    } catch {
      // Continue safely
    }
  }

  onProgress?.('Rasterizing A4 canvas at 2.5x retina resolution...');

  // Standard A4 dimensions at 96 DPI
  const width = 794;
  const height = 1123;

  const dataUrl = await toPng(element, {
    quality: 0.98,
    pixelRatio: 2.5,
    backgroundColor: '#FFFFFF',
    width,
    height,
    cacheBust: true,
    skipFonts: true,
    fontEmbedCSS: '',
  });

  onProgress?.('Assembling PDF document...');

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  pdf.addImage(dataUrl, 'PNG', 0, 0, 210, 297, undefined, 'FAST');

  onProgress?.('Finalizing PDF download...');
  pdf.save(filename);
}

/**
 * Exports an HTML element to High-Resolution PNG (300 DPI quality)
 */
export async function exportResumeToPng(
  elementId: string,
  filename: string = 'MD_Moshiur_Rahman_Resume.png',
  onProgress?: ExportProgressCallback
): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element #${elementId} not found in DOM`);
  }

  onProgress?.('Rasterizing high-definition PNG...');

  if (document.fonts) {
    try {
      await document.fonts.ready;
    } catch {
      // Continue safely
    }
  }

  const width = 794;
  const height = 1123;

  const dataUrl = await toPng(element, {
    quality: 1.0,
    pixelRatio: 3.0, // 3x ultra-sharp resolution
    backgroundColor: '#FFFFFF',
    width,
    height,
    cacheBust: true,
    skipFonts: true,
    fontEmbedCSS: '',
  });

  onProgress?.('Downloading PNG file...');

  // Trigger download via anchor
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Triggers clean native browser printing for A4
 */
export function printResumeDocument(elementId: string): void {
  const element = document.getElementById(elementId);
  if (!element) {
    window.print();
    return;
  }

  window.print();
}
