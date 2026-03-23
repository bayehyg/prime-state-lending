import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProcessSection from '@/components/home/ProcessSection';

export default function LoanProcessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              How It Works
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Our streamlined digital process makes getting a mortgage simple, transparent, and fast.
            </p>
          </div>
        </div>
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}
