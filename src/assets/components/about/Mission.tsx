const Mission = () => {
  return (
    <>
      <section className='bg-[#2D2D2D] py-8 lg:py-16'>
        <div className=' w-[90%] mx-auto '>
          <h2 className='lg:text-[28px] w-[90%] leading-4 lg:font-semibold text-white ms-9'>
            Our Mission
          </h2>
          <div className='lg:my-10 flex lg:flex-row  flex-col-reverse gap-1  items-center'>
            <div className='w-[90%] mx-auto lg:w-[45%]'>
              <img src='/missionImg.png' className='w-full' alt='' />
            </div>
            <div className='box lg:w-[70%] lg:-ms-10 text[16px] lg:text-[24px] font-normal lg:font-[700] lg:bg-white text-white lg:text-black  me-0 p-8 rounded-lg shadow-md'>
              <p>
                To redefine luxury living by providing exceptional property
                management services that exceed expectations, build lasting
                relationships, and create spaces where people truly feel at
                home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
