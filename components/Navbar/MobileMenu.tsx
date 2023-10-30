import React, { FC, RefObject } from 'react';
import { Link } from '..';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  menuRef: RefObject<HTMLDivElement>;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu, menuRef }) => {
  if (!isMenuOpen) return null;

  return (
    <div
      ref={menuRef}
      className='absolute top-20 justify-self-center w-11/12 border border-gray-300 rounded-md bg-brand-lightbg md:hidden'
      id='navbar-menu'
    >
      <ul className='font-medium flex flex-col p-4 md:p-0 rounded-lg'>
        <li>
          <Link href='/' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-200' onClick={toggleMenu} aria-current='page'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/work' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-200' onClick={toggleMenu}>
            Work
          </Link>
        </li>
        <li>
          <Link href='/contact' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-200' onClick={toggleMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link
            href='/annonce'
            className='block py-2 pl-3 pr-4 bg-brand-primary text-white text-center rounded hover:bg-blue-200 mt-5'
            onClick={toggleMenu}
          >
            Download Resume
          </Link>
        </li>
      </ul>
    </div>
  );
};
