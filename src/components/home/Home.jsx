import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import LocationSection from './sections/LocationSection';
import ServiceCardsSection from './sections/ServiceCardsSection';

function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceCardsSection />
      <StatsSection />
      <WhyChooseUsSection />
      <LocationSection />
    </main>
  );
}

export default Home;