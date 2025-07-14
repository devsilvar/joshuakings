const AboutStory = () => {
  return (
    <>
      <section className='my-10 flex flex-wrap justify-between items-start gap-11 lg:px-20 px-5 py-10'>
        <div className='space-y-5 lg:w-[45%]'>
          <h2 className='font-bold text-2xl'>Our Story</h2>

          <p className='text-[16px] font-[400] '>
            Founded in 2009 by Joshua King, our company began with a simple yet
            powerful vision: to transform the way people experience property
            rentals. Starting with just a handful of premium properties in
            Manhattan, we've grown into a trusted name in luxury real estate
            management.
          </p>
          <p>
            Today, we manage over 1,000 premium properties across New York City,
            serving thousands of satisfied clients who trust us with their most
            important asset - their home. Whether it's a long-term rental or a
            short stay, we ensure every experience exceeds expectations.
          </p>
        </div>

        <div>
          <img src='/aboutImg.png' alt='' />
        </div>
      </section>
    </>
  );
};

export default AboutStory;
