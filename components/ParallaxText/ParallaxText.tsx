import { useRef, ReactNode } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { wrap } from '@/lib';

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
}

export const ParallaxText = ({ children, baseVelocity = 100 }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(0, -30, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.6 }}
      className='overflow-hidden m-0 tracking-tighter flex flex-nowrap whitespace-nowrap'
    >
      <motion.p className='text-5xl font-semibold flex flex-nowrap whitespace-nowrap pb-3' style={{ x }}>
        <span className='block'>{children}</span>
        <span className='block'>{children}</span>
        <span className='block'>{children}</span>
        <span className='block'>{children}</span>
        <span className='block'>{children}</span>
        <span className='block'>{children}</span>
        <span className='block'>{children}</span>
        <span className='block'>{children}</span>
        <span className='block'>{children}</span>
        <span className='block'>{children}</span>
      </motion.p>
    </motion.div>
  );
};
