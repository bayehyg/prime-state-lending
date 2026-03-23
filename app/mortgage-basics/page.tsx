import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function MortgageBasicsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Mortgage Basics
            </h1>
            <p className="text-lg text-slate-500">
              Your guide to understanding home loans and the mortgage process.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Understanding Mortgages</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                A mortgage is a loan used to purchase or refinance a home. The property serves as collateral, and you repay the loan over a set period (typically 15-30 years) with interest.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-slate-100 rounded-lg p-6">
                  <h3 className="text-base font-semibold text-slate-900 mb-2">Principal</h3>
                  <p className="text-sm text-slate-500">The amount you borrow to purchase the home.</p>
                </div>
                <div className="border border-slate-100 rounded-lg p-6">
                  <h3 className="text-base font-semibold text-slate-900 mb-2">Interest</h3>
                  <p className="text-sm text-slate-500">The cost of borrowing money, expressed as a percentage.</p>
                </div>
                <div className="border border-slate-100 rounded-lg p-6">
                  <h3 className="text-base font-semibold text-slate-900 mb-2">Term</h3>
                  <p className="text-sm text-slate-500">The length of time you have to repay the loan.</p>
                </div>
                <div className="border border-slate-100 rounded-lg p-6">
                  <h3 className="text-base font-semibold text-slate-900 mb-2">Escrow</h3>
                  <p className="text-sm text-slate-500">Account for property taxes and insurance payments.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Types of Mortgages</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                    <Icon icon="solar:home-2-linear" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">Fixed-Rate Mortgage</h3>
                    <p className="text-sm text-slate-500">Interest rate stays the same for the entire loan term, providing predictable monthly payments.</p>
                  </div>
                </div>

                <div className="flex gap-4 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                    <Icon icon="solar:chart-square-linear" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">Adjustable-Rate Mortgage (ARM)</h3>
                    <p className="text-sm text-slate-500">Interest rate is fixed for an initial period, then adjusts periodically based on market conditions.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                    <Icon icon="solar:shield-keyhole-linear" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">Government-Backed Loans</h3>
                    <p className="text-sm text-slate-500">FHA, VA, and USDA loans offer benefits like lower down payments and flexible credit requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Ready to Learn More?</h2>
              <p className="text-slate-600 mb-6">Our team can help you understand which mortgage option is right for your situation.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/calculators" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors">
                  Try Our Calculators
                </Link>
                <Link href="/contact" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
