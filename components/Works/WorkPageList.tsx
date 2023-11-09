import { useRef, useState, useEffect } from 'react';
import { Link } from '..';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import type { RefProps } from '@/types';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

interface WorkProps extends RefProps {
  title: string;
  subTitle: string;
  image: string;
  website: string;
  github: string;
  right: boolean;
  referenceId: string;
}

export const WorkPageList: React.FC<WorkProps> = ({ parentRef, title, subTitle, image, website, github, right, referenceId }) => {
  const { scrollYProgress } = useScroll({ target: parentRef });

  const xLeftInput = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xRightInput = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  const xLeft = useSpring(xLeftInput, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const xRight = useSpring(xRightInput, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <article className='flex flex-col justify-center gap-5 py-10'>
      <div className='flex flex-col gap-1'>
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ x: right ? xRight : xLeft }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'
        >
          {title}
        </motion.h1>
      </div>
    </article>
  );
};
