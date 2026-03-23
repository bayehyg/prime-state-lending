import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function LoanProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Loan Programs
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Find the perfect financing solution for your home purchase or refinance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Conventional */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="solar:home-2-linear" className="text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Conventional Loans</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Traditional financing with competitive rates and flexible terms. Ideal for buyers with strong credit scores and stable income.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-0.5 shrink-0" />
                  Down payment as low as 3%
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-0.5 shrink-0" />
                  Competitive interest rates
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-0.5 shrink-0" />
                  Flexible loan terms
                </li>
              </ul>
              <Link href="/contact" className="text-sm font-medium text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all">
                Get Started <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>

            {/* FHA */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="solar:shield-keyhole-linear" className="text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">FHA Loans</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Government-backed loans perfect for first-time buyers with lower credit scores or smaller down payments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-0.5 shrink-0" />
                  Down payment as low as 3.5%
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-0.5 shrink-0" />
                  Lower credit score requirements
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-0.5 shrink-0" />
                  Government-insured
                </li>
              </ul>
              <Link href="/contact" className="text-sm font-medium text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all">
                Get Started <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>

            {/* VA */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="solar:star-fall-linear" className="text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">VA Loans</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Exclusive benefits for veterans, active military, and eligible spouses. No down payment required.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-0.5 shrink-0" />
                  0% down payment option
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-0.5 shrink-0" />
                  No PMI required
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-0.5 shrink-0" />
                  Competitive rates for veterans
                </li>
              </ul>
              <Link href="/contact" className="text-sm font-medium text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all">
                Get Started <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>

            {/* Jumbo */}
            <div className="bg-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-800 rounded-full blur-2xl opacity-50"></div>
              <div className="w-12 h-12 bg-indigo-800 text-white rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Icon icon="solar:chart-square-linear" className="text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight mb-3 relative z-10">Jumbo Loans</h2>
              <p className="text-sm text-indigo-200 leading-relaxed mb-6 relative z-10">
                High-balance financing for premium properties exceeding conforming loan limits in the Seattle metro area.
              </p>
              <ul className="space-y-2 mb-6 relative z-10">
                <li className="flex items-start gap-2 text-sm text-indigo-100">
                  <Icon icon="solar:check-circle-linear" className="text-indigo-300 mt-0.5 shrink-0" />
                  Loans above $766,550
                </li>
                <li className="flex items-start gap-2 text-sm text-indigo-100">
                  <Icon icon="solar:check-circle-linear" className="text-indigo-300 mt-0.5 shrink-0" />
                  Competitive jumbo rates
                </li>
                <li className="flex items-start gap-2 text-sm text-indigo-100">
                  <Icon icon="solar:check-circle-linear" className="text-indigo-300 mt-0.5 shrink-0" />
                  Flexible terms available
                </li>
              </ul>
              <Link href="/contact" className="text-sm font-medium text-white flex items-center gap-1 hover:gap-2 transition-all relative z-10">
                Inquire Now <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
