import { useState } from 'react';

const locations = [
  {
    name: 'Ikeja GRA',
    properties: 10,
    image: '/ikeja.png',
    position: 'top-[20%] left-[24%]',
  },
  {
    name: 'Lekki',
    properties: 10,
    image: '/lekki.png',
    position: 'top-[45%] left-[50%]',
  },
  {
    name: 'Ikoyi',
    properties: 10,
    image: '/ikoyi.png',
    position: 'top-[20%] left-[76%]',
  },
  {
    name: 'Chevron',
    properties: 10,
    image: '/chevron.png',
    position: 'top-[50%] left-[10%]',
  },
  {
    name: 'Ajao',
    properties: 10,
    image: '/ajao.png',
    position: 'top-[75%] left-[37%]',
  },
  {
    name: 'Surulere',
    properties: 10,
    image: '/surulere.png',
    position: 'top-[75%] left-[63%]',
  },
  {
    name: 'Yaba',
    properties: 10,
    image: '/yaba.png',
    position: 'top-[50%] left-[90%]',
  },
];

const MapSection = () => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  const handleSearch = () => {
    console.log('Searching with filters:', {
      location,
      price,
      duration,
    });
    // Add filtering logic or call to backend here
  };

  return (
    <div className='relative w-full bg-white py-16'>
      <h2 className='text-center text-[28px] font-[700] md:text-3xl w-[50%] mx-auto mb-6'>
        We’ve handpicked the best spots in Lagos so you don’t have to stress
      </h2>

      <div className="relative w-full max-w-6xl mx-auto h-[500px] bg-[url('/map.png')] bg-cover bg-center">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className={`group absolute ${loc.position} transform -translate-x-1/2 -translate-y-1/2 text-center`}
          >
            <div className='relative'>
              <img
                src={loc.image}
                alt={loc.name}
                className='w-[60px] h-[60px] rounded-full border-4 border-white shadow-md object-cover transition-transform duration-300 group-hover:scale-110'
              />
              {/* Tooltip */}
              <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 shadow-lg'>
                {loc.name} – {loc.properties} Properties
              </div>
            </div>
            <p className='text-sm font-semibold mt-1 text-black'>{loc.name}</p>
            <p className='text-xs text-gray-600'>{loc.properties} Properties</p>
          </div>
        ))}
      </div>

      {/* Filters Section */}
      <div className='mt-10 w-full max-w-6xl mx-auto bg-black rounded-lg p-4 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between text-white'>
        <div className='flex-1'>
          <label className='text-sm block mb-1'>Location</label>
          <input
            type='text'
            placeholder='Where would you like to stay?'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='w-full p-2 rounded-md text-black'
          />
        </div>

        <div className='flex-1'>
          <label className='text-sm block mb-1'>Price</label>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='w-full p-2 rounded-md text-black'
          >
            <option>Choose a price range</option>
            <option value='100-200'>₦100k - ₦200k</option>
            <option value='200-500'>₦200k - ₦500k</option>
          </select>
        </div>

        <div className='flex-1'>
          <label className='text-sm block mb-1'>Duration</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className='w-full p-2 rounded-md text-black'
          >
            <option>Select duration</option>
            <option value='1w'>1 Week</option>
            <option value='1m'>1 Month</option>
            <option value='6m'>6 Months</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className='bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold mt-4 md:mt-0'
        >
          View Available Apartment
        </button>
      </div>
    </div>
  );
};

export default MapSection;
