const Footer = () => {
  return (
    <footer className='bg-[#FFE1AB] py-16'>
      <div className='bg-[#2C2C2C] text-white  py-8 lg:py-16 lg:px-6 px-2 rounded-lg w-full max-w-[90%] mx-auto '>
        <div className=' flex flex-col sm:flex-row justify-between items-start gap-6'>
          {/* Logo + copyright */}
          <div className='flex flex-col lg:items-center items-start'>
            <img
              src='/logo.svg'
              alt='Joshua Kings Logo'
              className='w-24 h-auto mb-2'
            />
            <p className='text-xs lg:block hidden text-gray-400'>
              © 2025 Joshua Kings Apartment & Homes.
            </p>
          </div>

          {/* Nav links */}
          <div className='flex lg:flex-row flex-col justify-center gap-12 px-5 text-[14px] text-gray-300 font-medium'>
            <a href='#' className='hover:text-white'>
              Short Stays
            </a>
            <a href='#' className='hover:text-white'>
              Building Development
            </a>
            <a href='#' className='hover:text-white'>
              Long-Term Rentals
            </a>
            <a href='#' className='hover:text-white'>
              Staycation
            </a>
            <a href='#' className='hover:text-white'>
              Vacations
            </a>
          </div>
          <p className='ps-4 text-xs lg:hidden block text-gray-400'>
            © 2025 Joshua Kings Apartment & Homes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
