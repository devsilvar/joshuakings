const WhyPeopleChoose = () => {
  return (
    <section className='bg-white py-2 lg:py-12 my-36 px-6 md:px-16 gap-y-10 flex flex-col md:flex-row items-center justify-between '>
      {/* Text + Stats */}
      <div className='w-full md:w-1/2 space-y-6'>
        <h2 className='md:text-[28px] lg:leading-[35px] text-[22px] font-[700] leading-snug text-gray-800'>
          Why People Choose Joshua <br className='hidden md:block' />
          Kings As Their Preferred Choice.
        </h2>
        <p className='text-gray-500 text-[16px] leading-[21px] max-w-md'>
          We deliver comfort you can count on, flexibility you can trust, and
          support that makes every stay feel like the right one.
        </p>

        <div className='grid grid-cols-1 gap-y-12 my-10 mb-12 text-start'>
          <ul className='list-none space-y-8 font-semibold'>
            <li className='flex items-start gap-4'>
              <img src='/listItem.svg' alt='' /> Verified Listings Only
            </li>
            <li className='flex items-start gap-4'>
              <img src='/listItem.svg' alt='' /> Fully Serviced Options
            </li>
            <li className='flex items-start gap-4'>
              <img src='/listItem.svg' alt='' /> Support for Diaspora & Expats
            </li>
            <li className='flex items-start gap-4'>
              <img src='/listItem.svg' alt='' /> Facility Management
            </li>
          </ul>
          <button className='bg-yellow-600 block w-fit hover:bg-yellow-700 text-white text-sm px-16 shadow-deep py-4 rounded-lg'>
            Contact Us
          </button>
        </div>
      </div>
      {/* Image + Card Stack */}
      <div className='relative w-full md:w-1/2 max-w-2xl'>
        {/* Bottom Image */}
        <img
          src='/chooseus2.png'
          alt='Apartment 1'
          className='rounded-xl lg:h-[565px] w-[467px] shadow-md'
        />

        <div className='absolute bottom-[10%] left-1/2 w-[92%] lg:w-[57%] transform -translate-x-1/2 z-20 right-4 bg-white rounded-md p-5 shadow-md'>
          <h2 className='text-[18px] font-semibold text-center'>
            10K+ stays booked
          </h2>

          <div className='flex w-full justify-center'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <img src={`/person${item}.png`} alt='' />
            ))}
          </div>
        </div>
        {/* Top Image + Card */}
        <div className='absolute md:block hidden left-56 -bottom-28 w-[80%] '>
          <img
            src='/chooseus1.png'
            alt='Apartment 2'
            className='rounded-xl w-[334px] h-[449px]'
          />

          {/* Overlay card */}
        </div>
      </div>
    </section>
  );
};

export default WhyPeopleChoose;
