import FilterBar from './Filtersection';
import { useNavigate } from 'react-router-dom';
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
    position: 'top-[50%] lg:left-[10%] left-[17%]',
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
    position: 'top-[50%] lg:left-[90%] left-[85%]',
  },
];

const MapSection = () => {
  const navigate = useNavigate();

  //   const [location, setLocation] = useState('');
  //   const [price, setPrice] = useState('');
  //   const [duration, setDuration] = useState('');

  //   const handleSearch = () => {
  //     console.log('Searching with filters:', {
  //       location,
  //       price,
  //       duration,
  //     });
  //     // Add filtering logic or call to backend here
  //   };

  return (
    <div className='relative w-full bg-white py-16'>
      <h2 className='text-center text-[18px] font-[700] md:text-3xl lg:w-[50%] mx-auto mb-6'>
        We’ve handpicked the best spots in Lagos so you don’t have to stress
      </h2>

      <div className="relative w-full max-w-6xl mx-auto h-[500px] bg-[url('/map.png')] bg-cover bg-center">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            onClick={() =>
              navigate(`/search?location=${encodeURIComponent(loc.name)}`)
            }
            className={`group absolute ${loc.position} transform -translate-x-1/2 -translate-y-1/2 text-center`}
          >
            <div className='relative text-center'>
              <img
                src={loc.image}
                alt={loc.name}
                className='lg:w-[60px] mx-auto  w-[51px] h-[51px] lg:h-[60px] rounded-full border-4 border-white shadow-md object-cover transition-transform duration-300 group-hover:scale-110'
              />
              {/* Tooltip */}
              <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 shadow-lg'>
                {loc.name} – {loc.properties} Properties
              </div>
            </div>
            <div className=''>
              <p className='text-sm font-semibold mt-1 text-black'>
                {loc.name}
              </p>
              <p className='text-xs text-gray-600'>
                {loc.properties} Properties
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters Section */}
      <FilterBar />
    </div>
  );
};

export default MapSection;
