import Hero from '../assets/components/common/Hero';
import FooterHero from '../assets/components/homepage/FooterHero';
const Contactus = () => {
  return (
    <>
      <Hero pageText='Contact' imagelink='/aboutHeros.png' />

      <div className='mt-[150%] md:mt-[60%]  lg:mt-[35%] relative z-50'>
        <FooterHero />
      </div>
    </>
  );
};

export default Contactus;
