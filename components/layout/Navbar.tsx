'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled && !mobileMenuOpen;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        transparent
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className={`text-lg font-extrabold tracking-tight flex items-center gap-2 ${transparent ? 'text-white' : 'text-indigo-600'}`} style={{ fontFamily: 'var(--font-logo)' }}>
            <Image src="/logo.png" alt="Prime State Lending" width={42} height={42} className="" />
            PRIME STATE
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/home-purchase" className={`text-sm font-medium transition-colors ${transparent ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>Buy a Home</Link>
          <Link href="/calculators" className={`text-sm font-medium transition-colors ${transparent ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>Rates</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${transparent ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Resources
              <Icon
                icon={resourcesOpen ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
                className="text-xs"
              />
            </button>
            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/loan-programs"
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  Loan Programs
                </Link>
                <Link
                  href="/loan-process"
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  Loan Process
                </Link>
                <Link
                  href="/mortgage-basics"
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  Mortgage Basics
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className={`text-sm font-medium transition-colors ${transparent ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>About Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/home-purchase" className={`h-9 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors ${transparent ? 'bg-white text-slate-900 hover:bg-white/90' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
            Get Pre-approved
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden ${transparent ? 'text-white' : 'text-slate-600'}`}
          >
            <Icon icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="px-6 py-4 space-y-3">
            <Link href="/home-purchase" className="block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Buy a Home</Link>
            <Link href="/calculators" className="block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Rates</Link>
            <div>
              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full text-left text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1"
              >
                Resources
                <Icon
                  icon={mobileResourcesOpen ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
                  className="text-xs"
                />
              </button>
              {mobileResourcesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/loan-programs" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Loan Programs</Link>
                  <Link href="/loan-process" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Loan Process</Link>
                  <Link href="/mortgage-basics" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Mortgage Basics</Link>
                  <Link href="/faq" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">FAQ</Link>
                </div>
              )}
            </div>
            <Link href="/about" className="block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">About Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
