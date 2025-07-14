const FooterHero = () => {
  return (
    <section className='relative w-full lg:h-[600px]  bg-[#FCE6B6] flex flex-col   items-center justify-center overflow-hidden'>
      {/* Circle background images */}
      {/* <img
        src='/circleour.png'
        alt='Outer Circle'
        className='hidden lg:block  absolute top-0 left-1/2 -translate-x-1/2  object-contain z-0 pointer-events-none'
      />
      <img
        src='/circlein.png'
        alt='Inner Circle'
        className='absolute scale-150 block lg:scale-100 lg:top-10 top-[64%] left-1/2 -translate-x-1/2 object-contain z-10 pointer-events-none'
      /> */}

      {/* Content in center */}
      <div className='relative z-20 text-center max-w-xl px-4 flex mb-10 flex-col items-center justify-start mt-[21%] md:mt-[10%] lg:mt-[5%]'>
        <h1 className='text-2xl sm:text-3xl md:text-[28px] leading-[35px] font-bold mb-2 text-[#000000]'>
          The Comfort You Deserve Is Just One Click Away.
        </h1>
        <p className='text-[16px] leading-5 sm:text-base text-gray-700 lg:mb-5 mb-9'>
          Verified homes. Local support. Zero stress.
        </p>
        <button className='bg-[#000000] hover:bg-[#360130] text-white font-semibold lg:py-4 py-2 px-10 lg:px-20 rounded-lg shadow'>
          Contact Us
        </button>
      </div>

      {/* Room image below */}
      <div className='relative lg:w-full  w-[90%] max-w-4xl overflow-hidden shadow-md'>
        <img
          src='/footerheroimg.png'
          alt='Room Preview'
          className='w-full h-auto object-cover'
        />
      </div>
    </section>
  );
};

export default FooterHero;
