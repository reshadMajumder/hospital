import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import LocationSection from './sections/LocationSection';
import FloatingCards from './SlideCards/FloatingCards';
import StatusCards from './sections/StatusCards';
import ReviewsSection from './sections/ReviewsSection';

function Home() {
  return (
    <main>
      <HeroSection />
      <FloatingCards />
      <StatusCards />
      <StatsSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <LocationSection />
    </main>
  );
}

export default Home;