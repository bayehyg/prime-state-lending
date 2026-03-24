import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our mission is to serve our customers with honesty, integrity and competence. Our goal is to provide home loans to our clients while providing them with the lowest interest rates and closing costs possible.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We've been helping customers afford the home of their dreams for many years and we love what we do.
              </p>
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
