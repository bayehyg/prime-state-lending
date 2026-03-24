import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 -z-20"></div>
      {/* Subtle noise/texture overlay simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6">Ready to unlock your home's potential?</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Join thousands of Washington residents who trust Prime State Lending for a transparent, fast, and local mortgage experience.</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/home-purchase" className="h-12 px-8 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 text-base font-medium hover:bg-slate-50 transition-colors w-full sm:w-auto">
            Get Pre-Approved
          </Link>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center justify-center rounded-lg bg-slate-800 text-white border border-slate-700 text-base font-medium hover:bg-slate-700 transition-colors w-full sm:w-auto">
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
