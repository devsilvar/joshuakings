import { Link, NavLink } from 'react-router-dom';
import Button from '../common/Button';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { X } from 'lucide-react';
type NavigationMenuItem = {
  label: string;
  href: string;
};

interface NavigationMenuProps {
  items?: NavigationMenuItem[];
  isMobile?: boolean;
  mobileState?: boolean;
  onItemClick?: () => void;
}

export default function NavigationItems({
  items = [],
  isMobile = false,
  onItemClick = () => {},
}: NavigationMenuProps) {
  return isMobile ? (
    <div className=' px-4 pt-2 z-50  pb-3 space-y-4  mt-20 '>
      <div className='absolute top-3  left-[5%]'>
        <Link to='/'>
          {' '}
          <img src='/logo.svg' />
        </Link>
      </div>

      <div className='absolute top-5  right-4'>
        <button onClick={onItemClick}>
          <X />
        </button>
      </div>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className='block px-3 py-2 text-black -ml-2 hover:text-gray-900 text-start text-sm font-medium'
          onClick={() => onItemClick()}
        >
          {item.label}
        </Link>
      ))}
      <div className='absolute bottom-16  right-1/4'>
        <Button
          variant='outline'
          link='/contact'
          className='w-full bg-[#FDE056] font-[bold] border-transparent shadow-2xl'
        >
          Contact Us
        </Button>
      </div>
    </div>
  ) : (
    <div className='hidden md:flex py-10 items-center space-x-16'>
      <div className='flex items-center space-x-9 '>
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            className={({ isActive }) =>
              clsx(
                'text-[16px] text-white font-[400] px-3 py-2',
                isActive
                  ? 'text-white'
                  : 'text-gray-500 text-[16px] hover:text-gray-200'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <Button
        variant='outline'
        className='bg-[#C8953A] w-[200px] h-[40px] text-white text-[16.5px] font-[400] border-transparent  rounded-xl hover:text-gray-800 shadow-2xl'
        link='/contact'
      >
        Contact Us
      </Button>
    </div>
  );
}

NavigationItems.propTypes = {
  items: PropTypes.array.isRequired,
  isMobile: PropTypes.bool,
  onItemClick: PropTypes.func,
};
