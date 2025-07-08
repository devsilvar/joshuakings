const HeroStats = () => {
  return (
    <section className='bg-white py-12 mt-10 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
      {/* Image + Card Stack */}
      <div className='relative w-full md:w-1/2 max-w-2xl'>
        {/* Bottom Image */}
        <img
          src='/herostats2.png'
          alt='Apartment 1'
          className='rounded-xl lg:h-[565px] w-[467px] shadow-md'
        />

        <div className='absolute bottom-[10%] left-1/2 w-[90%] lg:w-[50%]  transform -translate-x-1/2 z-20 right-4 bg-white rounded-md p-5 shadow-md'>
          <h4 className='font-[600] text-[16px]  mb-1'>Downtown Luxury Loft</h4>
          <p className='text-xs text-gray-500 flex items-center gap-1 my-3'>
            <img src='/rlocation.svg' /> 374 Johnson Ave
          </p>
          <div className='flex justify-between text-xs text-gray-600 my-5'>
            <span className='flex items-center gap-1'>
              <img src='/bed.svg' /> 6 Beds
            </span>
            <span className='flex items-center gap-1'>
              <img src='/bath.svg' /> 2 Bath
            </span>
            <span className='flex items-center gap-1'>
              <img src='/locations.svg' /> 1200 sqft
            </span>
          </div>
          <div className='flex gap-3 item-center'>
            <button className='text-[12px]  font-semibold hover:underline'>
              Check availability
            </button>
            <img src='/LinkUp.svg' alt='' />
          </div>
        </div>
        {/* Top Image + Card */}
        <div className='absolute md:block hidden left-56 -bottom-20 w-[80%] '>
          <img
            src='/herostats1.png'
            alt='Apartment 2'
            className='rounded-xl w-[334px] h-[449px]'
          />

          {/* Overlay card */}
        </div>
      </div>

      {/* Text + Stats */}
      <div className='w-full md:w-1/2 space-y-6'>
        <h2 className='md:text-[28px] lg:leading-[35px] sm:text-[18px] font-semibold leading-snug text-gray-800'>
          With Us Every Stay Feels <br className='hidden md:block' />
          Like the Right Choice.
        </h2>
        <p className='text-gray-500 text-[16px] leading-[21px] max-w-md'>
          Moving back or visiting? We’ve done the heavy lifting. Every stay is
          vetted, supported, and set up to feel like home from day one.
        </p>

        <div className='grid grid-cols-1 gap-y-12 mb-12 text-start'>
          <div>
            <p className='text-[42px] font-semibold text-gray-900'>100+</p>
            <p className='text-sm text-gray-500 leading-[0px]'>
              Customers. One trusted experience.
            </p>
          </div>
          <div>
            <p className='text-[42px] font-semibold  text-gray-900'>4.9/5</p>
            <p className='text-sm text-gray-500 leading-[0px]'>Guest Rating</p>
          </div>
          <div>
            <p className='text-[42px] font-semibold text-gray-900'>80+</p>
            <p className='text-sm text-gray-500 leading-[0px]'>
              Verified Homes
            </p>
          </div>
          <button className='bg-yellow-600 block w-fit hover:bg-yellow-700 text-white text-sm px-8 shadow-2xl py-4 rounded-lg'>
            View Available Apartment
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
