import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Privacy Policy</h1>
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <p className="text-slate-600 leading-relaxed">
              Privacy Policy — Coming Soon. For questions contact{' '}
              <a href="mailto:info@primestatelending.com" className="text-indigo-600 hover:text-indigo-700 transition-colors">
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
