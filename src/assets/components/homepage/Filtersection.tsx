import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Button from '../common/Button';
type CustomDropdownOption = { label: string; value: string };
type CustomDropdownProps = {
  label: string;
  options: CustomDropdownOption[];
  value: string;
  onChange: (val: string) => void;
  rightAddon?: React.ReactNode;
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  rightAddon,
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className='relative w-full'>
      <label className='block text-[18px] font-[500] mb-1 text-white'>
        {label}
      </label>
      <div
        className='flex items-center justify-between bg- black text-white py-2 px-3  rounded cursor-pointer'
        onClick={() => setOpen(!open)}
      >
        <span className='text-[12px]'>
          {options.find((o) => o.value === value)?.label || `Select ${label}`}
        </span>
        {rightAddon && <span className='ml-4'>{rightAddon}</span>}
      </div>

      {open && (
        <div className='absolute z-10 mt-1 w-full bg-white text-black rounded shadow-md'>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterBar = () => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('chooose');
  const [duration, setDuration] = useState('');

  const handleSearch = () => {
    console.log('Search Params:', { location, price, duration });
  };

  return (
    <>
      <div className='w-[90%] lg:max-w-6xl mx-auto bg-black  rounded-[10px] lg:rounded-[20px] py-4 px-6 flex flex-col md:flex-row lg:items-center justify-between gap-4 text-white shadow-lg'>
        <div className='lg:flex-1 justify-start  border-r border-white/20 lg:pr-4'>
          <label className='block text-[18px] font-medium mb-1'>Location</label>
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='Where would you like to stay?'
            className='bg-transparent w-full text-sm focus:outline-none placeholder-gray-400'
          />
        </div>

        <div className='lg:flex-1 border-r relative border-white/20 pr-4'>
          <CustomDropdown
            label='Price'
            options={[
              { label: '₦100k - ₦200k', value: '100-200' },
              { label: '₦200k - ₦500k', value: '200-500' },
            ]}
            value={price}
            onChange={setPrice}
            rightAddon={
              <span className=' font-bold'>
                <ChevronDown />
              </span>
            }
          />

          {/* 👇 This acts like a button */}
        </div>

        <div className='lg:flex-1 border-r relative border-white/20 pr-4'>
          <CustomDropdown
            label='Duration'
            options={[
              { label: '1 week', value: '1 week' },
              { label: '2 weeks', value: '2 weeks' },
              { label: '1 month', value: '1 month' },
              { label: '2 months', value: '2 months' },
            ]}
            value={duration}
            onChange={setDuration}
            rightAddon={
              <span className=' font-bold'>
                <ChevronDown />
              </span>
            }
          />

          {/* 👇 This acts like a button */}
        </div>

        <Button
          onClick={handleSearch}
          className='bg-gradient-to-r lg:w-full md:block hidden  from-yellow-600 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition'
        >
          View Available Apartment
        </Button>
      </div>
      <Button
        onClick={handleSearch}
        className='bg-gradient-to-r mx-auto my-5 lg:w-full md:hidden block  from-yellow-600 to-yellow-500 text-black px-6 py-3 rounded-[10px] font-semibold text-sm hover:opacity-90 transition'
      >
        View Available Apartment
      </Button>
    </>
  );
};

export default FilterBar;
