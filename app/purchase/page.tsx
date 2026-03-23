import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function PurchasePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Home Purchase Loans
            </h1>
            <p className="text-lg text-slate-500">
              Make your dream of homeownership a reality with our streamlined purchase process.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Why Choose Prime State for Your Purchase?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:shield-check-linear" className="text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Pre-Approval in Minutes</h3>
                  <p className="text-sm text-slate-500">Get a verified pre-approval letter quickly so you can make competitive offers with confidence.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:clock-circle-linear" className="text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Fast Closing</h3>
                  <p className="text-sm text-slate-500">Our average closing time is just 21 days, helping you move into your new home faster.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:dollar-linear" className="text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Competitive Rates</h3>
                  <p className="text-sm text-slate-500">Access to a wide range of loan products with rates that work for your budget.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:user-heart-linear" className="text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Local Expertise</h3>
                  <p className="text-sm text-slate-500">Our team knows the Washington market inside and out, providing guidance tailored to your area.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Ready to buy your home?</h2>
            <p className="text-slate-400 mb-6">Start your application today and get pre-approved in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 text-sm font-medium hover:bg-slate-50 transition-colors">
                Start Application
              </Link>
              <Link href="/calculators" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-white text-sm font-medium hover:bg-slate-700 transition-colors">
                Calculate Payment
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
