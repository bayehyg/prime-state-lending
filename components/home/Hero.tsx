'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
});

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-svh flex flex-col">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80)',
        }}
      />

      {/* Dark gradient overlay — directional on desktop, solid on mobile */}
      <div className="absolute inset-0 bg-black/70 md:bg-transparent md:bg-gradient-to-r md:from-black/[0.82] md:via-black/[0.55] md:to-black/[0.25]" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-24 md:pt-32 md:pb-20">
          <div className="max-w-2xl mx-auto text-center md:mx-0 md:text-left md:max-w-[55%]">
            {/* Badge */}
            <motion.div {...fade(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.15] border border-white/20 text-white text-xs font-medium mb-6">
              <Icon icon="solar:map-point-linear" className="text-sm" />
              Licensed Washington State Mortgage Broker
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fade(0.15)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Home Loans for Every Stage of Your Life
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fade(0.3)}
              className="text-lg lg:text-xl text-white/90 leading-relaxed mb-6 max-w-[540px] mx-auto md:mx-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
            >
              We are home loan experts dedicated to making sure your home purchase or refinance experience is top-notch. Located in Mountlake Terrace, WA.
            </motion.p>

            {/* Trust strip */}
            <motion.div
              {...fade(0.4)}
              className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-white/80 mb-8"
            >
              <span className="flex items-center gap-1.5">
                <Icon icon="solar:check-circle-linear" className="text-base" />
                No Hidden Fees
              </span>
              <span className="flex items-center gap-1.5">
                <Icon icon="solar:check-circle-linear" className="text-base" />
                Local WA Lender
              </span>
              <span className="flex items-center gap-1.5">
                <Icon icon="solar:check-circle-linear" className="text-base" />
                Secure &amp; Encrypted
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...fade(0.5)}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/home-purchase"
                className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors shadow-lg"
              >
                Start Your Application
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center rounded-lg border border-white text-white text-sm font-medium hover:bg-white hover:text-heading transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        className="relative z-10 bg-black/40"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white">
          <a href="tel:+14255825615" className="flex items-center gap-2 hover:text-white/80 transition-colors">
            <span>📞</span> (425) 582-5615
          </a>
          <span className="flex items-center gap-2">
            <span>📍</span> 6100 219th St SW Suite 480, Mountlake Terrace, WA 98043
          </span>
        </div>
      </motion.div>
    </section>
  );
}
