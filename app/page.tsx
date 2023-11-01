'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SplashScreen, Navbar, Hero, Works, ParallaxText } from '../components/';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiMui,
  SiSass,
  SiTailwindcss,
  SiNodedotjs,
  SiVite,
  SiExpress,
  SiFastify,
} from 'react-icons/si';

export default function Home() {
  const ref = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className={`flex justify-center ${isHidden === false ? 'overflow-y-scroll no-scrollbar' : ''}`}>
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
          <div className='w-full flex flex-col items-center'>
            <Navbar />
            <Hero parentRef={ref} />
            <figure className='w-full py-5'>
              <ParallaxText baseVelocity={-2}>Javascript-Typescript-</ParallaxText>
              <ParallaxText baseVelocity={2}>React-NextJs-React Native-Expo-</ParallaxText>
              <ParallaxText baseVelocity={-2}>Mui-Sass-Tailwinds-</ParallaxText>
              <ParallaxText baseVelocity={2}>NodeJs-Vite-ExpressJs-Fastify-</ParallaxText>
            </figure>
            <Works />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
