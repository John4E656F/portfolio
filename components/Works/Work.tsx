import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
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
}

export const Work: React.FC<WorkProps> = ({ parentRef, title, subTitle, image, website, github, right }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [linksVisible, setLinksVisible] = useState(false);

  const { scrollYProgress } = useScroll({ target: parentRef });

  const xLeftInput = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xRightInput = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const xLeft = useSpring(xLeftInput, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const xRight = useSpring(xRightInput, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const imageVariant = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: { opacity: 0, scale: 0.65, y: 50 },
  };

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setLinksVisible(true);
      }, 2000); // delay in ms (match this with the image transition duration)
    } else {
      setLinksVisible(false);
    }
  }, [isInView]);

  return (
    <article className='flex flex-col justify-cente gap-5 py-10'>
      <div className='flex flex-col text-center gap-1'>
        <motion.h4
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ x: right ? xRight : xLeft }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'
        >
          {title}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ x: right ? xRight : xLeft }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
          className='text-xl sm:text-1xl md:text-2xl lg:text-3xl '
        >
          {subTitle}
        </motion.p>
      </div>
      <div ref={ref} className='relative flex justify-center'>
        <motion.img
          src={image}
          animate={isInView ? 'visible' : 'hidden'}
          variants={imageVariant}
          transition={{ duration: 2, ease: 'easeOut' }}
          className='rounded w-full max-w-2xl'
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={linksVisible ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className='absolute flex justify-center items-center gap-5 rounded bg-gray-500 w-full max-w-2xl h-full cursor-pointer'
        >
          {website && (
            <Link href={website}>
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className='bg-gray-600 p-3 rounded-full'
              >
                <AiFillEye size={50} />
              </motion.div>
            </Link>
          )}
          {github && (
            <Link href={github}>
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className='bg-gray-600 p-3 rounded-full'
              >
                <AiFillGithub size={50} />
              </motion.div>
            </Link>
          )}
        </motion.div>
      </div>
    </article>
  );
};
