'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar, SplashScreen } from '../components/';

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${isHidden === false ? 'overflow-y-scroll no-scrollbar' : ''}`}>
      <AnimatePresence>
        {!isHidden ? (
          <motion.div
            id='animation'
            className={`w-screen h-screen flex flex-col items-center justify-center cursor-none bg-black`}
            initial={{ opacity: 1, y: '0%' }}
            animate={animationComplete ? { opacity: 0, y: '100%' } : { opacity: 1, y: '0%' }}
            transition={{
              delay: 4,
              duration: 1,
              ease: 'easeInOut',
              onComplete: () => setIsHidden(true),
            }}
            exit={{ opacity: 0, y: '100%' }}
          >
            <SplashScreen />
            <motion.h1
              className='font-agbalumo text-2xl text-white'
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
          </motion.div>
        ) : (
          <div className='container'>
            <Navbar />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
