import React from 'react';

type PropertyCardProps = {
  image: string;
  rating: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  size: number;
  price: string;
  tag: 'Long-term' | 'Short Stay';
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  rating,
  title,
  location,
  beds,
  baths,
  size,
  price,
  tag,
}) => {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden mx-auto max-w-sm'>
      <div className='relative h-[240px]'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
        <div className='absolute top-2 left-2 bg-white text-black text-sm px-2 py-1 rounded-full flex items-center gap-1 shadow'>
          <span>
            <img src='/mystar.svg' alt='' />
          </span>
          <span>{rating}</span>
        </div>
        <div
          className={`absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded ${
            tag === 'Long-term' ? 'bg-gray-800' : 'bg-yellow-600'
          }`}
        >
          {tag}
        </div>
      </div>

      <div className='p-5'>
        <h3 className='font-semibold text-[16px]'>{title}</h3>
        <p className='text-sm text-gray-500 flex items-center gap-1 mt-1'>
          <img src='/rlocation.svg' alt='' /> {location}
        </p>

        <div className='flex justify-between w-[70%] text-gray-600 text-sm my-7'>
          <div className='flex items-center gap-1'>
            <img src='/bed.svg' alt='' /> {beds} Beds
          </div>
          <div className='flex items-center gap-1'>
            <img src='/bath.svg' alt='' /> {baths} Bath
          </div>
          <div className='flex items-center gap-1'>
            <img src='/locations.svg' alt='' /> {size} sqft
          </div>
        </div>

        <div className='flex items-center justify-between mt-5 mb-3'>
          <span className='text-[24px] font-bold text-black'>
            {price}
            <span className='text-[13px] text-gray-500 font-normal'>
              /month
            </span>
          </span>
          <button className='bg-[#C8953A] hover:bg-yellow-700 text-white text-sm px-3 py-2 rounded-md'>
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
