import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CalculatorTabs from '@/components/calculators/CalculatorTabs';

export default function CalculatorsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-heading mb-4">
              Mortgage Calculators
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto">
              Plan your home purchase with our comprehensive suite of calculators. Get instant estimates and detailed breakdowns.
            </p>
          </div>

          <CalculatorTabs />
        </div>
      </main>
      <Footer />
    </>
  );
}
