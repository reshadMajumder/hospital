import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import LocationSection from './sections/LocationSection';

function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <LocationSection />
    </main>
  );
}

export default Home;