'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { SplashScreen } from '../components/';

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000); // Change this timing according to your need

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center  '>
      <SplashScreen />
      <motion.h1
        className='font-agbalumo text-2xl'
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: '0%' }}
        transition={{
          delay: 5,
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        Frontend Developer
      </motion.h1>
    </div>
  );
}
