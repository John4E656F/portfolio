import React, { useRef } from 'react';
import { motion, sync, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { MenuItem } from './MenuItems';

const itemIds = [0, 1, 2, 3, 4];

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
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
      className=' w-full bg-orange-300 flex justify-between items-center'
    >
      <h1 className='font-agbalumo text-2xl'>John Andres</h1>
      <div className='flex justify-center md:w-auto bg-red-400' id='navbar-default'>
        <MenuToggle toggle={() => toggleOpen()} />
      </div>
      <motion.div className='background' variants={sidebar} />
      <motion.ul variants={variants}>
        {itemIds.map((i) => (
          <MenuItem key={i} />
        ))}
      </motion.ul>
    </motion.nav>
  );
};
