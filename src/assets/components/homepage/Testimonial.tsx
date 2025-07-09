import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../../lib/fakedata';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../common/TestimonialCard';

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const next = () => {
    if (current < testimonials.length - 1) {
      setDirection('right');
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setDirection('left');
      setCurrent((prev) => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section className='bg-gray-900 py-12 px-6 md:px-20 text-white'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-2xl md:text-[28px] font-semibold'>
          Hear from Our Satisfied Customers
        </h2>
        <p className='text-[16px] leading-[21px] text-gray-300 mt-1'>
          Real stories from people who've stayed with us, and loved the
          experience.
        </p>
      </div>

      {/* Mobile Carousel */}
      <div className='md:hidden my-10 flex flex-col items-center'>
        <div className='relative w-full max-w-md h-[400px] overflow-hidden'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial='enter'
              animate='center'
              exit='exit'
              className='absolute w-full h-full'
            >
              <div className='bg-white text-black p-6 rounded-[12px] shadow-md h-full flex flex-col'>
                <div className='flex-grow'>
                  <h4 className='font-semibold text-[17px] mb-2'>
                    {testimonials[current].name}
                  </h4>
                  <p className='text-[14px] text-gray-800 mb-1'>
                    {testimonials[current].review}
                  </p>

                  <div className='flex items-center mb-4 text-yellow-500 text-[18px]'>
                    {'★'.repeat(testimonials[current].rating)}
                    {'☆'.repeat(5 - testimonials[current].rating)}
                  </div>

                  <div className='flex items-center gap-3 my-6'>
                    <img
                      src={testimonials[current].image}
                      alt='loft'
                      className='w-[69px] h-[69px] object-cover rounded-full'
                    />
                    <div>
                      <h5 className='font-medium text-[16px] leading-[18px]'>
                        Downtown Luxury Loft
                      </h5>
                      <p className='text-[12px] flex gap-2 items-center text-gray-500'>
                        <img src='/rlocation.svg' alt='' />
                        374 Johnson Ave
                      </p>
                    </div>
                  </div>
                </div>

                <button className='mt-4 text-sm text-yellow-600 font-medium hover:underline flex items-center gap-1'>
                  Check availability <img src='/LinkUp.svg' alt='' />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='flex justify-center items-center gap-4 mt-6'>
          <button
            onClick={prev}
            disabled={current === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              current === 0
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-white text-black hover:bg-gray-100'
            } transition-colors`}
            aria-label='Previous testimonial'
          >
            <ChevronLeft />
          </button>

          <div className='flex gap-1'>
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === testimonials.length - 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              current === testimonials.length - 1
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-white text-black hover:bg-gray-100'
            } transition-colors`}
            aria-label='Next testimonial'
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 my-10'>
        {testimonials.map((t, i) => (
          <TestimonialCard item={t} i={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
