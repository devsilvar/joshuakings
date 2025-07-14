import PropertyCard from './PropertyCards';
import { featuredRooms } from '../../../lib/fakedata';
const FeuturedListing = () => {
  return (
    <>
      <section className='flex justify-between w-[90%] mx-auto my-5'>
        <div className=' space-y-2'>
          <h3 className='text-[28px] font-semibold'>
            Discover Our Featured Listings
          </h3>
          <p className='text-[15px]'>
            Handpicked premium properties that define luxury living and comfort.
          </p>
        </div>

        <div className=' gap-3 items-center md:flex hidden'>
          <h3 className='text-[14px] font-semibold'>See All Properties</h3>
          <img src='/LinkUp.svg' alt='' />
        </div>
      </section>
      <div className='lg:w-[90%] w-full gap-y-9 mx-auto  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
        {featuredRooms.map((room, idx) => (
          <PropertyCard
            key={idx}
            image={room.image ?? ''}
            rating={room.rating}
            title={room.name}
            location={room.location}
            beds={room.bedrooms}
            baths={room.bathrooms}
            size={Number(room.size)}
            price={room.price}
            tag={room.term === 'Long-term' ? 'Long-term' : 'Short Stay'}
          />
        ))}
      </div>
      <div className=' gap-3 mt-10 items-center md:hidden flex justify-center'>
        <h3 className='text-[14px] font-semibold'>See All Properties</h3>
        <img src='/LinkUp.svg' alt='' />
      </div>
    </>
  );
};

export default FeuturedListing;
