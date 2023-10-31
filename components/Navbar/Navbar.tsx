import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle, MobileMenu } from '@/components';

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
      <h1 className='font-agbalumo text-2xl pb-1'>John Andres</h1>
      <MenuToggle toggle={() => toggleOpen()} />
      <MobileMenu isMenuOpen={isOpen} toggleMenu={() => toggleOpen()} />
    </motion.nav>
  );
};
