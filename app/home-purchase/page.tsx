'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MortgageWizard from '@/components/MortgageWizard'
import { useMortgageStore } from '@/store/mortgageStore'

function HeroSection() {
  const { currentStep } = useMortgageStore()
  const visible = currentStep === 1

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-heading mb-4">
            Find Out What You Can<br className="hidden sm:block" /> Afford in Minutes
          </h1>
          <p className="text-lg text-body mb-6">
            No paperwork. No commitment. Just a quick estimate.
          </p>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              '✓ No SSN required',
              '✓ Takes 2 minutes',
              '✓ No credit pull',
            ].map((item) => (
              <span key={item} className="text-sm font-medium text-body">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function HomePurchasePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <HeroSection />
          <MortgageWizard />
        </div>
      </main>
      <Footer />
    </>
  )
}
