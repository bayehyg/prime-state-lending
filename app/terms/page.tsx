import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-semibold tracking-tight text-heading mb-6">Terms of Service</h1>
          <div className="bg-white border border-edge rounded-2xl p-8">
            <p className="text-body leading-relaxed">
              Terms of Service — Coming Soon. For questions contact{' '}
              <a href="mailto:info@primestatelending.com" className="text-accent hover:text-accent-hover transition-colors">
                info@primestatelending.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
