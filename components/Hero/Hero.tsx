import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Page scroll: ', latest);
  });
  const xLeftInput = useTransform(scrollYProgress, [0, 0.1, 1], [0, -200, -200]);
  const xRightInput = useTransform(scrollYProgress, [0, 0.1, 1], [0, 200, 200]);

  const xLeft = useSpring(xLeftInput, { stiffness: 100, damping: 20 });
  const xRight = useSpring(xRightInput, { stiffness: 100, damping: 20 });

  return (
    <section ref={ref} className='w-full h-screen py-5  bg-red-200'>
      <motion.h1 className='flex flex-col gap-5 text-4xl whitespace-nowrap'>
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1 }}
          style={{ x: xLeft }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
          className={`pl-10 translate-x-${xLeft}`}
        >
          Bonjour,
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1 }}
          style={{ x: xRight }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.2 }}
          className='pl-5'
        >
          I&apos;m a belgian
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ x: xLeft }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.4 }}
          className='font-bold'
        >
          Frontend developer
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ x: xRight }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.6 }}
          className='text-right font-bold'
        >
          Based in Belgium
        </motion.span>
      </motion.h1>
    </section>
  );
};
