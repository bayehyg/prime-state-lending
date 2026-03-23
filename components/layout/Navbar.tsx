'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-base font-semibold tracking-tighter text-slate-900 flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white">
              <Icon icon="solar:home-angle-linear" className="text-sm" />
            </div>
            PRIME STATE
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/calculators" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Rates</Link>
          <Link href="/loan-programs" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Loan Types</Link>
          <Link href="/loan-process" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">How it Works</Link>
          <Link href="/about" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">About Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Sign In</Link>
          <Link href="/contact" className="h-9 px-4 inline-flex items-center justify-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">
            Get Pre-approved
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-600"
          >
            <Icon icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="px-6 py-4 space-y-3">
            <Link href="/calculators" className="block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Rates</Link>
            <Link href="/loan-programs" className="block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Loan Types</Link>
            <Link href="/loan-process" className="block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">How it Works</Link>
            <Link href="/about" className="block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">About Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
