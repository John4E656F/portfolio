import { RefObject } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  parentRef: RefObject<HTMLElement>;
}

export const Works: React.FC<HeroProps> = ({ parentRef }) => {
  const { scrollYProgress } = useScroll({ target: parentRef });
  const bgColor = useTransform(scrollYProgress, [0, 0.9], ['#ffffff', '#000000']);
  return (
    <motion.section
      className='h-screen w-full py-10 my-10 text-white'
      style={{
        backgroundColor: bgColor,
        mixBlendMode: 'overlay',
      }}
    >
      <div className='container'>
        <h3 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Selected Works</h3>
      </div>
    </motion.section>
  );
};
