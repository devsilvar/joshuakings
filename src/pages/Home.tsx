import FeuturedListing from '../assets/components/homepage/FeuturedListing';
import HeroSlider from '../assets/components/homepage/Hero';
import MapSection from '../assets/components/homepage/Maplocation';
import HeroStats from '../assets/components/homepage/OurStats';
import TestimonialsSection from '../assets/components/homepage/Testimonial';
import WhyPeopleChoose from '../assets/components/homepage/WhyPeopleChoose';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <MapSection />
      <FeuturedListing />
      <HeroStats />
      <WhyPeopleChoose />
      <TestimonialsSection />
    </>
  );
};

export default Home;
