import { RefObject } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

interface HeroProps {
  parentRef: RefObject<HTMLElement>;
}

export const Hero: React.FC<HeroProps> = ({ parentRef }) => {
  const { scrollYProgress } = useScroll({ target: parentRef });
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Page scroll: ', latest);
  });

  const xLeftInput = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const xRightInput = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const xLeft = useSpring(xLeftInput, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const xRight = useSpring(xRightInput, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section className='container w-full flex flex-col gap-20 py-10 md:py-20'>
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
    </section>
  );
};
