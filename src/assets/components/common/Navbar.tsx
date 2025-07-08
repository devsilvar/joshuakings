import { useState } from 'react';
import { Menu } from 'lucide-react';
import NavigationItems from '../NavItems/Navitems';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

// Main Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { label: 'Rentals', href: '/rentals' },
    { label: 'Short Stay', href: '/short-stay' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Building Development', href: '/building' },
  ];

  return (
    <nav className='relative z-10 bg-[#2D2D2D]'>
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-40 z-40'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div className=' mx-auto  py-3'>
        <div className='flex items-center shadow-sm justify-between h-20 px-4 sm:px-6 md:px-16'>
          <Link to='/'>
            <img src='/logo.svg' alt='Logo ' className='z-10 relative' />
          </Link>
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center'>
            {/* Navigation Links */}
            <NavigationItems
              mobileState={false}
              items={navigationItems}
              isMobile={false}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='text-white hover:text-gray-200 p-2'
            >
              {isMobileMenuOpen ? <Menu /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={clsx(
            'md:hidden shadow-2xl fixed z-50 h-screen top-0 left-0 w-[70%] bg-white border-r border-gray-100 transition-transform duration-500 ease-in-out',
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <NavigationItems
            items={navigationItems}
            isMobile={true}
            mobileState={isMobileMenuOpen}
            onItemClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
