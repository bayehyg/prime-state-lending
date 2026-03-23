import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import QuickInfoCards from '@/components/home/QuickInfoCards';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickInfoCards />
        <ServicesSection />
        <ProcessSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
