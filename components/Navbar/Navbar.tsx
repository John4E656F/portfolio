import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { Link, MenuToggle, MobileMenu, MenuItem } from '@/components';

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={100}
      ref={containerRef}
      className='sticky  z-10 top-0 w-full py-3 pt-5 flex justify-center bg-white'
    >
      <div className='container flex justify-between items-center'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='font-agbalumo text-2xl pb-1'
        >
          John Andres
        </motion.h1>
        <ul className='hidden md:flex gap-2 items-center list-none'>
          <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}>
            <Link href='/home' className=' hover:font-semibold' aria-current='page'>
              Home
            </Link>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}>
            <Link href='/works' className='block text-center py-2 px-3 hover:font-semibold text-black rounded hover:bg-gray-100' aria-current='page'>
              Work
            </Link>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}>
            <Link
              href='#contact'
              className='block text-center py-2 px-3 hover:font-semibold text-black rounded hover:bg-gray-100'
              aria-current='page'
            >
              Contact
            </Link>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}>
            <motion.a
              href='/JohnAndresCV.pdf'
              download
              className='ml-3 py-2 pl-3 pr-2 text-center rounded text-white bg-black hover:bg-gray-200 hover:text-black mt-5'
            >
              Download Resume
            </motion.a>
          </motion.li>
        </ul>
        <MenuToggle toggle={() => toggleOpen()} />
        <MobileMenu isMenuOpen={isOpen} toggleMenu={() => toggleOpen()} />
      </div>
    </motion.nav>
  );
};
