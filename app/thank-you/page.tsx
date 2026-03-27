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
          <div className="bg-white border border-edge rounded-2xl p-10 shadow-sm text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon icon="solar:check-circle-linear" className="text-3xl text-accent" />
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-heading mb-3">
              You're all set!
            </h1>
            <p className="text-body mb-2">
              We'll be in touch within 1 business day.
            </p>
            <p className="text-sm text-body/70 mb-8">
              A local Prime State loan officer will review your information and reach out to discuss
              your options — no pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="h-10 px-6 inline-flex items-center justify-center rounded-lg border border-edge text-sm font-medium text-body hover:border-edge transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/calculators"
                className="h-10 px-6 inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent-hover text-sm font-medium text-white transition-colors"
              >
                Explore Rates
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-body/70 mt-6">
            Questions? Call us at{' '}
            <a href="tel:+14255825615" className="hover:text-body transition-colors">
              (425) 582-5615
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
