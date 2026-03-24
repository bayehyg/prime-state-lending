import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Icon } from '@iconify/react'

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 flex items-center">
        <div className="max-w-lg mx-auto px-4 sm:px-6 w-full">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon icon="solar:check-circle-linear" className="text-3xl text-indigo-600" />
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">
              You're all set!
            </h1>
            <p className="text-slate-500 mb-2">
              We'll be in touch within 1 business day.
            </p>
            <p className="text-sm text-slate-400 mb-8">
              A local Prime State loan officer will review your information and reach out to discuss
              your options — no pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="h-10 px-6 inline-flex items-center justify-center rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/calculators"
                className="h-10 px-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white transition-colors"
              >
                Explore Rates
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            Questions? Call us at{' '}
            <a href="tel:+14255825615" className="hover:text-slate-600 transition-colors">
              (425) 582-5615
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
