import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import type { RefProps } from '@/types';

export const Hero: React.FC<RefProps> = ({ parentRef }) => {
  const { scrollYProgress } = useScroll({ target: parentRef });

  const xLeftInput = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const xRightInput = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const xLeft = useSpring(xLeftInput, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const xRight = useSpring(xRightInput, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section id='home' className='overflow-hidden w-full flex justify-center'>
      <div className='container flex flex-col gap-20 pb-2 pt-10 md:pt-20'>
        <motion.h1 className='flex flex-col px-5 sm:px-10 md:px-20 lg:px-32 gap-10 sm:gap-15 md:gap-20 lg:gap-24 text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap'>
          <motion.span
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ x: xLeft }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
            className={`pl-10`}
          >
            Bonjour,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ x: xRight }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.2 }}
            className='pl-5'
          >
            I&apos;m a belgian
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ x: xLeft }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.4 }}
            className='font-bold'
          >
            Frontend developer
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ x: xRight }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.6 }}
            className='text-right font-bold'
          >
            Based in Belgium
          </motion.span>
        </motion.h1>
        <motion.h2 className='flex flex-col px-5 sm:px-10 md:px-20 lg:px-32 gap-10 sm:gap-15 md:gap-20 lg:gap-24 text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap'>
          <motion.span
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ x: xLeft }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
          >
            My name is John Andres
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ x: xRight }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.2 }}
            className=''
          >
            I build awesome
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ x: xLeft }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.4 }}
            className='font-bold text-right'
          >
            web apps with
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
};
