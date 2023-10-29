'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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
    <div className='w-screen h-screen flex items-center justify-center  '>
      <SplashScreen />
    </div>
  );
}
