import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { Link, MenuToggle, MobileMenu, MenuItem } from '@/components';

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
    scale: [0.9, 1.09, 1, 1.09, 0.9],
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

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={100}
      ref={containerRef}
      className='relative w-full h-10 flex justify-between items-center'
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='font-agbalumo text-2xl pb-1'
      >
        John Andres
      </motion.h1>
      <ul className='hidden md:flex gap-2 items-center'>
        <motion.li
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        >
          <Link href='/' className=' hover:font-semibold' aria-current='page'>
            Home
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        >
          <Link href='/work' className='block text-center py-2 px-3 hover:font-semibold text-black rounded hover:bg-gray-100' aria-current='page'>
            Work
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
        >
          <Link href='/contact' className='block text-center py-2 px-3 hover:font-semibold text-black rounded hover:bg-gray-100' aria-current='page'>
            Contact
          </Link>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
        >
          <Link
            href='/assets/JohnAndresCV.pdf'
            className='ml-3 py-2 pl-3 pr-2 text-center rounded hover:font-semibold bg-red-400 hover:bg-red-500 mt-5'
          >
            Download Resume
          </Link>
        </motion.li>
      </ul>
      <MenuToggle toggle={() => toggleOpen()} />
      <MobileMenu isMenuOpen={isOpen} toggleMenu={() => toggleOpen()} />
    </motion.nav>
  );
};
