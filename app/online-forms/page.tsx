'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';

const forms = [
  {
    name: 'Uniform Residential Loan Application',
    url: 'https://cdn.lenderhomepage.com/pdf/urla.pdf',
  },
  {
    name: 'Uniform Residential Loan Application — Unmarried Addendum',
    url: 'https://cdn.lenderhomepage.com/pdf/urla-unmarried.pdf',
  },
  {
    name: 'Uniform Residential Loan Application — Additional Borrower',
    url: 'https://cdn.lenderhomepage.com/pdf/urla-additional.pdf',
  },
];

export default function OnlineFormsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Online Forms
          </h1>
          <p className="text-body leading-relaxed mb-10">
            To assist you in your mortgage process, we have provided certain forms you might need
            along the way. Included is obviously the Mortgage Application Form which you can download
            and print. The application should be completed with the assistance of a mortgage
            professional. You will need a browser compatible with PDF files or you will need to
            download Adobe Acrobat Reader to view and print PDF files on all major computer platforms.
          </p>

          <div className="space-y-4">
            {forms.map((form) => (
              <div
                key={form.name}
                className="bg-white border border-edge rounded-xl px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="text-sm font-medium text-heading">{form.name}</span>
                <a
                  href={form.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors"
                >
                  <Icon icon="solar:download-linear" className="text-lg" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
