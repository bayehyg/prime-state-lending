import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              About Prime State Lending
            </h1>
            <p className="text-lg text-slate-500">
              Local expertise meets digital innovation in Mountlake Terrace, Washington.
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Founded in the heart of the Pacific Northwest, Prime State Lending was built on a simple belief: getting a mortgage shouldn't be complicated, stressful, or opaque.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We combine cutting-edge technology with personalized local service to deliver a mortgage experience that's transparent, fast, and tailored to Washington homebuyers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon icon="solar:shield-check-linear" className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Transparent</h3>
                <p className="text-sm text-slate-500">No hidden fees, ever. What you see is what you get.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon icon="solar:clock-circle-linear" className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Fast</h3>
                <p className="text-sm text-slate-500">Close in as little as 21 days with our digital process.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon icon="solar:map-point-linear" className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Local</h3>
                <p className="text-sm text-slate-500">Based in Mountlake Terrace, serving all of Washington.</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">Ready to get started?</h2>
              <p className="text-slate-400 mb-6">Let's find the perfect loan for your situation.</p>
              <Link href="/contact" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 text-sm font-medium hover:bg-slate-50 transition-colors">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
