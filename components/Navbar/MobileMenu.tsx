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

const heartbeat = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  grow: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.8,
    },
  },
  animate: {
    scale: [0.9, 1.09, 1, 1.09, 0.9, 0.9, 0.9],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const MobileMenu: FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMenuOpen) return null;

  return (
    <motion.ul
      className='absolute top-10 right-0 p-5 md:hidden justify-self-center w-1/2 border border-gray-300 rounded-md bg-brand-lightbg '
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
      <motion.li variants={heartbeat} initial='initial' animate={isMounted ? ['grow', 'animate'] : 'initial'} whileHover='rest'>
        <Link
          href='/assets/JohnAndresCV.pdf'
          className='block py-2 pl-3 pr-4 text-center rounded bg-red-400 hover:bg-red-500 mt-5'
          onClick={toggleMenu}
        >
          Download Resume
        </Link>
      </motion.li>
    </motion.ul>
  );
};
