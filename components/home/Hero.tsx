import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent -z-10"></div>
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Hero Copy */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6">
            <Icon icon="solar:map-point-linear" />
            Local to Mountlake Terrace, WA
          </div>
          <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
            A smarter way to finance your <span className="text-indigo-600">dream home.</span>
          </h1>
          <p className="text-lg text-slate-500 font-normal leading-relaxed mb-8 max-w-xl">
            Experience a fully digital mortgage process with transparent rates, expert local guidance, and absolutely no hidden fees. Your journey to homeownership in Washington starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors w-full sm:w-auto shadow-sm">
              Start your application
              <Icon icon="solar:arrow-right-linear" className="ml-2" />
            </Link>
            <Link href="/calculators" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors w-full sm:w-auto shadow-sm">
              View current rates
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Icon icon="solar:shield-check-linear" className="text-indigo-600" />
              Secure &amp; Encrypted
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="solar:clock-circle-linear" className="text-indigo-600" />
              Close in 21 Days
            </div>
          </div>
        </div>

        {/* Hero Interactive Mockup */}
        <div className="relative lg:ml-auto w-full max-w-md">
          <div className="bg-white border border-slate-200/60 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-8 relative z-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">Rate Calculator</h3>
              <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                <Icon icon="solar:calculator-linear" />
              </div>
            </div>

            {/* Mock Input Group */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Home Price</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                <div className="w-full h-11 border border-slate-200 rounded-lg flex items-center px-8 text-slate-900 text-sm font-medium bg-slate-50/50">
                  650,000
                </div>
              </div>
            </div>

            {/* Custom Mock Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide">Down Payment</label>
                <span className="text-sm font-medium text-indigo-600">20%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 relative">
                <div className="bg-indigo-600 h-1.5 rounded-full w-1/5 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-slate-200 rounded-full shadow-sm cursor-pointer hover:border-indigo-400 transition-colors"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-400">
                <span>$0</span>
                <span>$130,000</span>
              </div>
            </div>

            {/* Mock Custom Toggle */}
            <div className="flex items-center justify-between py-4 border-t border-slate-100 mb-4">
              <span className="text-sm font-medium text-slate-600">Include Taxes &amp; Insurance</span>
              <div className="w-9 h-5 bg-indigo-600 rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform"></div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl flex items-center justify-between border border-slate-100">
              <div>
                <span className="block text-xs text-slate-500 mb-1">Estimated Monthly</span>
                <span className="text-2xl font-semibold tracking-tight text-slate-900">$3,482</span>
              </div>
              <div className="text-right">
                <span className="block text-xs text-slate-500 mb-1">30-Year Fixed</span>
                <span className="text-sm font-medium text-emerald-600">6.125% Rate</span>
              </div>
            </div>
          </div>
          
          {/* Decorative background card */}
          <div className="absolute -right-4 -bottom-4 w-full h-full border border-slate-200/50 rounded-2xl bg-slate-50/50 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
