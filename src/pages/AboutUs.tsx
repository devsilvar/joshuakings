import AboutStory from '../assets/components/about/AboutStory';
import Mission from '../assets/components/about/Mission';
import Hero from '../assets/components/common/Hero';
import FooterHero from '../assets/components/homepage/FooterHero';
import StandardsSection from '../assets/components/homepage/StandardSection';

const AboutUs = () => {
  return (
    <>
      <Hero pageText='About' imagelink='/aboutHeros.png' />
      <AboutStory />
      <StandardsSection />
      <Mission />
      <FooterHero />
    </>
  );
};

export default AboutUs;
