'use client';

import { useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface LoanProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function LoanProgramModal({ isOpen, onClose, title, content }: LoanProgramModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <Icon icon="solar:close-circle-linear" className="text-xl" />
        </button>

        <div className="p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-6 pr-8">
            {title}
          </h2>

          <div className="prose prose-slate prose-sm max-w-none [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-3 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-slate-800 [&_h4]:mt-4 [&_h4]:mb-2 [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-slate-600 [&_ul]:mb-4 [&_li]:mb-1">
            {content}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Get Started <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
