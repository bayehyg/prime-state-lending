import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-base font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
                <Icon icon="solar:home-angle-linear" className="text-sm" />
              </div>
              PRIME STATE
            </Link>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">Modern lending solutions for the Pacific Northwest. Local expertise, digital speed.</p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-slate-900 transition-colors"><Icon icon="solar:letter-linear" className="text-xl" /></a>
              <a href="#" className="hover:text-slate-900 transition-colors"><Icon icon="solar:phone-linear" className="text-xl" /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Products</h5>
            <ul className="space-y-3">
              <li><Link href="/purchase" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Home Purchase</Link></li>
              <li><Link href="/refinance" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Refinance</Link></li>
              <li><Link href="/loan-programs" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Jumbo Loans</Link></li>
              <li><Link href="/loan-programs" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">VA &amp; FHA</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Resources</h5>
            <ul className="space-y-3">
              <li><Link href="/calculators" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Mortgage Calculator</Link></li>
              <li><Link href="/calculators" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Current Rates</Link></li>
              <li><Link href="/mortgage-basics" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Homebuyer Guide</Link></li>
              <li><Link href="/faq" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Contact</h5>
            <ul className="space-y-3">
              <li className="text-sm text-slate-500 flex items-start gap-2">
                <Icon icon="solar:map-point-linear" className="mt-0.5 shrink-0" />
                <span>6000 244th St SW,<br />Mountlake Terrace, WA 98043</span>
              </li>
              <li className="text-sm text-slate-500 flex items-center gap-2">
                <Icon icon="solar:phone-linear" className="shrink-0" />
                (800) 555-0199
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © 2024 Prime State Lending. All rights reserved. NMLS #1234567. Equal Housing Lender.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900 transition-colors">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
