import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import LocationSection from './sections/LocationSection';
import FloatingCards from './SlideCards/FloatingCards';

function Home() {
  return (
    <main>
      <HeroSection />
      <FloatingCards />
      <StatsSection />
      <WhyChooseUsSection />
      <LocationSection />
    </main>
  );
}

export default Home;