import React, { useEffect, useRef, useState } from 'react';

const slides = [
  {
    id: 1,
    image: '/hero1.png',
    title: 'Joshua Kings',
    subtitle: 'Apartments & Homes',
  },
  {
    id: 2,
    image: '/hero2.png',
    title: 'Home. Comfort. Flexibility.',
    subtitle: `At Joshua Kings, we believe comfort should be simple. 
Whether you're looking for a short stay, a place to call home, 
you can count on us for flexible living and peace of mind.`,
  },
  {
    id: 3,
    image: '/hero3.png',
    title: 'Find Comfortable Homes for Long-Term Living',
    subtitle: `Moving in for work, school, or relocation? 
We match you with well-maintained, 
ready-to-move-in rental spaces.`,
  },
  {
    id: 4,
    image: '/hero4.png',
    title: 'Get Expert Support for Your Building Project',
    subtitle: `Whether you’re building a rental unit or private home, 
we guide you through planning, design, and construction.`,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef<number | null>(null);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  //   useEffect(() => {
  //     slideInterval.current = setInterval(nextSlide, 5000);
  //     return () => {
  //       if (slideInterval.current !== null) {
  //         clearInterval(slideInterval.current);
  //       }
  //     };
  //   }, []);

  return (
    <div className='relative w-full h-[450px] lg:h-[500px] overflow-hidden'>
      <div
        className='flex transition-transform duration-[1500ms] ease-in-out w-full h-full'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className='w-full flex-shrink-0 h-full bg-cover bg-bottom'
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {slide.id == 1 ? (
              <>
                {/* center the logo on theimaghe */}
                <img
                  src='/logo.svg'
                  alt=''
                  className='absolute top-[36%] lg:top-[20%] lg:w-[9%] left-1/2 transform -translate-x-1/2'
                />
                <div className='flex flex-col items-center justify-end pb-[15%] lg:pb-[5.5%] h-full bg-black/40 text-white text-center px-4'>
                  <h1 className='text-xl lg:text-5xl font-bold text-yellow-600 drop-shadow-lg'>
                    {slide.title}
                  </h1>
                  <p className='text-lg lg:text-2xl lg:mt-2 font-light'>
                    {slide.subtitle}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className='bg-black/40 h-full'>
                  <div className='flex flex-col items-center justify-center  mx-auto  text-white text-center lg:w-[60%] h-full px-4'>
                    <h1 className=' text-2xl lg:text-5xl font-bold text-white drop-shadow-lg'>
                      {slide.title}
                    </h1>
                    <p className='lg:text-[20px] font-[500] mt-2 font-light'>
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-5 h-5 border border-gray-800 rounded-full transition-all duration-300 ${
              index === current
                ? 'border border-none bg-yellow-600 scale-110'
                : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
