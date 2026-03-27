import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function ServicesSection() {
  return (
    <section id="loans" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-heading mb-4">Tailored loan programs</h2>
          <p className="text-base text-body">Whether you're buying your first home in Mountlake Terrace or refinancing an estate in Bellevue, we have the right structure for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-white border border-edge rounded-2xl p-8 hover:border-accent/30 hover:shadow-sm transition-all">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
              <Icon icon="solar:home-2-linear" className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-heading mb-3">Conventional</h3>
            <p className="text-sm text-body leading-relaxed mb-6">Traditional financing offering competitive rates and flexible terms for buyers with strong credit.</p>
            <Link href="/loan-programs" className="text-sm font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-edge rounded-2xl p-8 hover:border-accent/30 hover:shadow-sm transition-all">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
              <Icon icon="solar:shield-keyhole-linear" className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-heading mb-3">FHA Loans</h3>
            <p className="text-sm text-body leading-relaxed mb-6">Government-backed loans perfect for first-time buyers, requiring lower minimum down payments.</p>
            <Link href="/loan-programs" className="text-sm font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-edge rounded-2xl p-8 hover:border-accent/30 hover:shadow-sm transition-all">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
              <Icon icon="solar:star-fall-linear" className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-heading mb-3">VA Loans</h3>
            <p className="text-sm text-body leading-relaxed mb-6">Exclusive benefits for veterans and active military, including zero down payment options.</p>
            <Link href="/loan-programs" className="text-sm font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>

          {/* Card 4 */}
          <div className="group bg-white border border-edge rounded-2xl p-8 hover:border-accent/30 hover:shadow-sm transition-all lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                <Icon icon="solar:chart-square-linear" className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-heading mb-2">Refinance Options</h3>
                <p className="text-sm text-body leading-relaxed max-w-xl">Lower your monthly payment, tap into your home's equity, or switch from an ARM to a fixed rate. Our local experts evaluate your current scenario to find savings.</p>
              </div>
              <div className="md:ml-auto">
                <Link href="/refinance" className="h-10 px-5 inline-flex items-center justify-center rounded-lg bg-white border border-edge text-body text-sm font-medium hover:bg-surface transition-colors whitespace-nowrap">
                  Compare Rates
                </Link>
              </div>
            </div>
          </div>
          
          {/* Card 5 */}
          <div className="group bg-nav rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-footer rounded-full blur-2xl opacity-50"></div>
            <h3 className="text-xl font-semibold tracking-tight mb-3 relative z-10">Jumbo Loans</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6 relative z-10">High-balance financing for premium properties in the Seattle metro area.</p>
            <Link href="/loan-programs" className="text-sm font-medium text-white flex items-center gap-1 group-hover:gap-2 transition-all relative z-10">
              Inquire now <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
