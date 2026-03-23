import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function RefinancePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Refinance Your Mortgage
            </h1>
            <p className="text-lg text-slate-500">
              Lower your rate, reduce your payment, or tap into your home's equity.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Why Refinance?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:chart-square-linear" className="text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Lower Your Rate</h3>
                  <p className="text-sm text-slate-500">Take advantage of lower interest rates to reduce your monthly payment and save thousands over the life of your loan.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:wallet-linear" className="text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Cash-Out Refinance</h3>
                  <p className="text-sm text-slate-500">Access your home's equity for renovations, debt consolidation, or other major expenses.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:refresh-linear" className="text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Switch Loan Types</h3>
                  <p className="text-sm text-slate-500">Convert from an adjustable-rate mortgage to a fixed-rate for payment stability and peace of mind.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:calendar-linear" className="text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Shorten Your Term</h3>
                  <p className="text-sm text-slate-500">Pay off your mortgage faster by refinancing to a 15 or 20-year term and build equity quicker.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">See how much you could save</h2>
            <p className="text-slate-400 mb-6">Use our refinance calculator to estimate your potential savings.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 text-sm font-medium hover:bg-slate-50 transition-colors">
                Calculate Savings
              </Link>
              <Link href="/contact" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-white text-sm font-medium hover:bg-slate-700 transition-colors">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
