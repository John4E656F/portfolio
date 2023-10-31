import React, { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '..';

export const MenuItem: FC<{ href: string; onClick?: () => void; text: string; delay: number }> = ({ href, onClick, text, delay }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <li>
      <Link
        href={href}
        className='block text-center py-2 px-3 hover:font-semibold text-black rounded hover:bg-gray-100'
        onClick={onClick}
        aria-current='page'
      >
        <AnimatePresence>
          {isMounted && (
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: delay }}
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </li>
  );
};
