import { Navigation } from '@/components/Navigation';
import { PageOverlay } from '@/components/PageOverlay';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { Testimonials } from '@/sections/Testimonials';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { usePageLoad } from '@/hooks/usePageLoad';
import { Analytics } from '@/analytics';

function App() {
  const { showOverlay } = usePageLoad(500);

  return (
    <div className="min-h-screen bg-white">
      <Analytics />
      <PageOverlay isVisible={showOverlay} />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
