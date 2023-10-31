'use client';
import React, { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, MenuItem } from '..';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0 },
};

export const MobileMenu: FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  if (!isMenuOpen) return null;

  return (
    <motion.ul
      className='absolute bg-white top-10 right-0 p-5 md:hidden min:w-3/5 border border-gray-300 rounded-md overflow-hidden'
      id='navbar-menu'
      initial='closed'
      animate={isMenuOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ damping: 20, stiffness: 100 }}
      style={{ transformOrigin: 'top right' }}
    >
      <MenuItem href='/' onClick={toggleMenu} text='Home' delay={0.2} />
      <MenuItem href='/work' onClick={toggleMenu} text='Work' delay={0.4} />
      <MenuItem href='/contact' onClick={toggleMenu} text='Contact' delay={0.6} />
      <motion.li
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
      >
        <Link
          href='/assets/JohnAndresCV.pdf'
          className='block whitespace-nowrap py-2 px-3 text-center rounded hover:font-semibold bg-red-400 hover:bg-red-500 mt-5'
          onClick={toggleMenu}
        >
          Download Resume
        </Link>
      </motion.li>
    </motion.ul>
  );
};
