import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="bg-footer border-t border-footer pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-extrabold tracking-tight text-accent flex items-center gap-2 mb-4" style={{ fontFamily: 'var(--font-logo)' }}>
              <Image src="/logo.png" alt="Prime State Lending" width={35} height={35} />
              PRIME STATE
            </Link>
            <p className="text-xs text-white/60 mb-6 leading-relaxed">Modern lending solutions for the Pacific Northwest. Local expertise, digital speed.</p>
            <div className="flex items-center gap-4 text-white/50">
              <a href="mailto:info@primestatelending.com" className="hover:text-white transition-colors"><Icon icon="solar:letter-linear" className="text-xl" /></a>
              <a href="tel:+14255825615" className="hover:text-white transition-colors"><Icon icon="solar:phone-linear" className="text-xl" /></a>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Products</h5>
            <ul className="space-y-3">
              <li><Link href="/purchase" className="text-sm text-white/60 hover:text-white transition-colors">Home Purchase</Link></li>
              <li><Link href="/refinance" className="text-sm text-white/60 hover:text-white transition-colors">Refinance</Link></li>
              <li><Link href="/loan-programs" className="text-sm text-white/60 hover:text-white transition-colors">Jumbo Loans</Link></li>
              <li><Link href="/loan-programs" className="text-sm text-white/60 hover:text-white transition-colors">VA &amp; FHA</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Resources</h5>
            <ul className="space-y-3">
              <li><Link href="/loan-programs" className="text-sm text-white/60 hover:text-white transition-colors">Loan Programs</Link></li>
              <li><Link href="/loan-process" className="text-sm text-white/60 hover:text-white transition-colors">Loan Process</Link></li>
              <li><Link href="/mortgage-basics" className="text-sm text-white/60 hover:text-white transition-colors">Mortgage Basics</Link></li>
              <li><Link href="/faq" className="text-sm text-white/60 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/online-forms" className="text-sm text-white/60 hover:text-white transition-colors">Online Forms</Link></li>
              <li><Link href="/blog" className="text-sm text-white/60 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Contact</h5>
            <ul className="space-y-3">
              <li className="text-sm text-white/60 flex items-start gap-2">
                <Icon icon="solar:map-point-linear" className="mt-0.5 shrink-0" />
                <span>6100 219th St SW Suite 480,<br />Mountlake Terrace, WA 98043</span>
              </li>
              <li className="text-sm text-white/60 flex items-center gap-2">
                <Icon icon="solar:phone-linear" className="shrink-0" />
                <span>(425) 582-5615<br />206-849-4267</span>
              </li>
              <li className="text-sm text-white/60 flex items-center gap-2">
                <Icon icon="solar:letter-linear" className="shrink-0" />
                info@primestatelending.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Prime State Lending. All rights reserved. <a href="https://www.nmlsconsumeraccess.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">NMLS #2394256</a>. Equal Housing Lender.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/legal" className="text-xs text-white/40 hover:text-white transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
