// components/PropertyCard.tsx

export default function RoomDetails() {
  return (
    <div className=' min-h-screen bg-white w-[90%] mx-auto mb-10'>
      {/* Back Button */}
      <div className='flex items-center my-7'>
        <img src='/arrow.svg' className='mr-2' />
        <span className='text-sm font-medium text-gray-700'>Back</span>
      </div>

      {/* Image */}
      <div className='w-full h-[424px] rounded-md overflow-hidden mb-6'>
        <img
          src='/details.png' // Replace with actual image or local asset
          alt='Downtown Luxury Loft'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex w-[70%] justify-between '>
        {/* Title and Info */}
        <div className='mb-6 space-y-4'>
          <h1 className='text-[28px] font-semibold text-gray-900'>
            Downtown Luxury Loft
          </h1>
          <p className='text-sm text-gray-500 mt-1 flex gap-3'>
            <img src='/rlocation.svg' alt='' />
            374 Johnson Ave
          </p>
          <div className='flex items-center gap-6 mt-4 text-sm text-gray-600'>
            <div className='flex items-center gap-1'>
              <img src='/bed.svg' alt='' />
              <span>6 Beds</span>
            </div>
            <div className='flex items-center gap-1'>
              <img src='/bath.svg' alt='' />
              <span>2 Bath</span>
            </div>
            <div className='flex items-center gap-1'>
              <img src='/outline.svg' alt='' />
              <span>1200 sqft</span>
            </div>
          </div>
        </div>

        {/* Price and Availability */}
        <div className='flex items-center gap-16 mb-8'>
          <span className='text-[24px] font-semibold text-gray-900'>
            ₦3,200<span className='text-sm font-medium'>/month</span>
          </span>
          <button className='bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm'>
            Check Availability
          </button>
        </div>
      </div>

      {/* Description */}
      <div className='text-gray-700 text-sm mb-6 w-[88%]'>
        <h3 className='text-[18px] font-semibold mb-3'>Managed By</h3>
        <p className='text-[16px] text-gray-500 mb-4'>
          Experience comfort, ease and flexibility all in one place with this
          spacious studio apartment, located in a serene neighborhood with a
          kitchen that suites your appetite. This serviced apartment comes with
          a standby generator that affords you more electricity time, ample
          parking space and white walls that give you room for expression.
        </p>
      </div>

      {/* Features */}
      <div className='mb-6'>
        <h2 className='font-semibold text-gray-900 mb-2'>Flat 1 (Top floor)</h2>
        <h3 className='text-sm'>Features:</h3>
        <ul className='list-disc pl-5 text-gray-700 text-sm'>
          <li>Bedroom en-suite</li>
          <li>Wardrobe</li>
          <li>Open plan kitchen</li>
          <li>Balcony</li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h2 className='font-semibold text-gray-900 '>Services</h2>
        <ul className='list-disc pl-5 text-gray-700 text-sm'>
          <li>Security</li>
          <li>Water treatment</li>
          <li>Waste disposal</li>
        </ul>
      </div>
    </div>
  );
}
