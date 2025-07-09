interface testimonyType {
  name: string;
  review: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ item, i }: { item: testimonyType }) => {
  return (
    <div key={i} className='bg-white text-black p-6 rounded-[12px] shadow-md'>
      <h4 className='font-semibold text-[17px] mb-2'>{item.name}</h4>
      <p className='text-[14px] text-gray-800 mb-1'>{item.review}</p>

      <div className='flex items-center mb-4 text-yellow-500 text-[18px]'>
        {'★'.repeat(item.rating)}
        {'☆'.repeat(5 - item.rating)}
      </div>

      <div className='flex items-center gap-3 my-6'>
        <img
          src={item.image}
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

      <button className='mt-4 text-sm text-yellow-600 font-medium hover:underline flex items-center gap-1'>
        Check availability <img src='/LinkUp.svg' alt='' />
      </button>
    </div>
  );
};

export default TestimonialCard;
