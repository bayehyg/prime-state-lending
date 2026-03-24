import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Legal</h1>
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <p className="text-slate-600 leading-relaxed">
              Prime State Lending | NMLS #2394256 | Licensed in Washington State |{' '}
              <a
                href="https://www.nmlsconsumeraccess.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                NMLS Consumer Access
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
