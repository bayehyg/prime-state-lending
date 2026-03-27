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
          : 'bg-nav backdrop-blur-md border-b border-nav'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className={`text-lg font-extrabold tracking-tight flex items-center gap-2 ${transparent ? 'text-white' : 'text-accent'}`} style={{ fontFamily: 'var(--font-logo)' }}>
            <Image src="/logo.png" alt="Prime State Lending" width={42} height={42} className="" />
            PRIME STATE
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/home-purchase" className={`text-sm font-medium transition-colors ${transparent ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-white'}`}>Buy a Home</Link>
          <Link href="/calculators" className={`text-sm font-medium transition-colors ${transparent ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-white'}`}>Rates</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${transparent ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-white'}`}
            >
              Resources
              <Icon
                icon={resourcesOpen ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
                className="text-xs"
              />
            </button>
            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-edge rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/loan-programs"
                  className="block px-4 py-2 text-sm text-body hover:bg-surface hover:text-heading transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  Loan Programs
                </Link>
                <Link
                  href="/loan-process"
                  className="block px-4 py-2 text-sm text-body hover:bg-surface hover:text-heading transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  Loan Process
                </Link>
                <Link
                  href="/mortgage-basics"
                  className="block px-4 py-2 text-sm text-body hover:bg-surface hover:text-heading transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  Mortgage Basics
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-sm text-body hover:bg-surface hover:text-heading transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/online-forms"
                  className="block px-4 py-2 text-sm text-body hover:bg-surface hover:text-heading transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  Online Forms
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog" className={`text-sm font-medium transition-colors ${transparent ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-white'}`}>Blog</Link>
          <Link href="/about" className={`text-sm font-medium transition-colors ${transparent ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-white'}`}>About Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/home-purchase" className={`h-9 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors ${transparent ? 'bg-white text-heading hover:bg-white/90' : 'bg-accent text-white hover:bg-accent-hover'}`}>
            Get Pre-approved
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden ${transparent ? 'text-white' : 'text-white'}`}
          >
            <Icon icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-edge">
          <nav className="px-6 py-4 space-y-3">
            <Link href="/home-purchase" className="block text-sm font-medium text-body hover:text-heading transition-colors">Buy a Home</Link>
            <Link href="/calculators" className="block text-sm font-medium text-body hover:text-heading transition-colors">Rates</Link>
            <div>
              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full text-left text-sm font-medium text-body hover:text-heading transition-colors flex items-center gap-1"
              >
                Resources
                <Icon
                  icon={mobileResourcesOpen ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
                  className="text-xs"
                />
              </button>
              {mobileResourcesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/loan-programs" className="block text-sm text-body hover:text-heading transition-colors">Loan Programs</Link>
                  <Link href="/loan-process" className="block text-sm text-body hover:text-heading transition-colors">Loan Process</Link>
                  <Link href="/mortgage-basics" className="block text-sm text-body hover:text-heading transition-colors">Mortgage Basics</Link>
                  <Link href="/faq" className="block text-sm text-body hover:text-heading transition-colors">FAQ</Link>
                  <Link href="/online-forms" className="block text-sm text-body hover:text-heading transition-colors">Online Forms</Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="block text-sm font-medium text-body hover:text-heading transition-colors">Blog</Link>
            <Link href="/about" className="block text-sm font-medium text-body hover:text-heading transition-colors">About Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
