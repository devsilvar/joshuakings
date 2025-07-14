import { motion, type Variants } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { MyImage } from './Lazyimage';
import ContactForm from '../about/ContactForm';

interface HeroProps {
  imagelink: string;
  pageText: string;
}

// Typed animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const Hero = ({ imagelink, pageText }: HeroProps) => {
  return (
    <section className='relative inset-0 z-0 lg:h-[500px] h-[400px]  bg-black'>
      <div className='absolute -z-0 inset-0 '>
        <MyImage image={imagelink} alt='Hero Background' />
      </div>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='relative lg:absolute z-10 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:mx-0 lg:-translate-x-1/2 mx-auto lg:pt-0 pt-[20%] lg:w-[60%] w-full text-center'
      >
        {pageText === 'About' && (
          <>
            <motion.p
              variants={textVariants}
              className='lg:text-[50px] text-[30px]  w-full mx-auto lg:text-center font-bold text-white leading-tight lg:leading-tight mb-4'
            >
              At Joshua Kings, We’re Committed to{' '}
              <span className='text-[#FFE5A6]'>
                Making Every Stay Feel Like Home.
              </span>
            </motion.p>
          </>
        )}

        {pageText === 'Contact' && (
          <>
            <motion.p
              variants={textVariants}
              className='lg:text-[50px] text-[30px] md:-mt-10 lg:mt-[70%] w-full mx-auto lg:text-center font-bold text-white leading-tight lg:leading-tight mb-4'
            >
              Reduce the Time Spent Searching.{' '}
              <span className='text-[#FFE5A6]'>Talk to Us Instead</span>
            </motion.p>

            <div className='w-full mx-auto relative z-20 '>
              <ContactForm />
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
