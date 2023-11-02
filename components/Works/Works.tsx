import { RefObject } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Work } from '..';
import type { RefProps } from '@/types';
import workData from '@/data/works.json';

export const Works: React.FC<RefProps> = ({ parentRef }) => {
  const { scrollYProgress } = useScroll({ target: parentRef });
  const bgColor = useTransform(scrollYProgress, [0, 0.9], ['#ffffff', '#000000']);
  console.log(workData);

  return (
    <motion.section
      className='w-full py-10 my-10 text-white flex justify-center'
      style={{
        backgroundColor: bgColor,
        mixBlendMode: 'overlay',
      }}
    >
      <div className='container flex flex-col justify-center gap-5'>
        <h3 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Selected Works</h3>
        {workData.map((workData, index) => (
          <Work
            key={index}
            parentRef={parentRef}
            title={workData.title}
            subTitle={workData.subTitle}
            image={workData.image}
            website={workData.website}
            github={workData.github}
            right={workData.right}
          />
        ))}
      </div>
    </motion.section>
  );
};
