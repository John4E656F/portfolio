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
  techStack?: string[];
  referenceId: string;
  page: boolean;
}

export const Work: React.FC<WorkProps> = ({ parentRef, title, subTitle, image, website, github, right, techStack, referenceId, page }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [linksVisible, setLinksVisible] = useState(false);

  const { scrollYProgress } = useScroll({ target: parentRef });

  const xLeftInput = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xRightInput = useTransform(scrollYProgress, [0, 1], [-100, 0]);

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
    <article className={`flex flex-col justify-center items-center ${page && 'md:flex-row md:justify-between'}  gap-5 py-10`}>
      <div className='flex flex-col text-center gap-1 '>
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
        {page && (
          <div className='flex flex-col gap-3 bg-black text-white rounded p-5 mt-5 '>
            <div>
              <h5 className='text-xl sm:text-2xl font-semibold'>Tech Stack</h5>
              <div>
                <ul className='flex flex-wrap justify-center gap-2 list-none leading-4'>
                  {techStack &&
                    techStack.map((tech, i) => (
                      <li className='' key={i}>
                        - {tech} -
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <h5 className='text-xl sm:text-2xl font-semibold'>Project Links</h5>
            <motion.div
              initial={{ scale: 0, translateY: '-200px', opacity: 0 }}
              animate={isInView ? { scale: 1, translateY: '0px', opacity: 1 } : { scale: 0, translateY: '-200px', opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
                duration: 3,
                delay: isInView ? 2.2 : 0,
                ease: [0.17, 0.55, 0.55, 1],
              }}
            >
              {referenceId && (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className='bg-gray-600 py-3 px-5 rounded-full'
                >
                  <Link href={`/casestudy/${referenceId}`} className='font-bold text-xl'>
                    Case Study
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </div>
      <div ref={ref} className='relative flex flex-col items-center justify-center'>
        <motion.img
          src={image}
          animate={isInView ? 'visible' : 'hidden'}
          variants={imageVariant}
          transition={{ duration: 2, ease: 'easeOut' }}
          className={`rounded w-full max-w-2xl h-full object-fill ${page ? 'max-h-96' : 'max-h-80'}`}
        />
        {!page && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={linksVisible ? { opacity: 0.8 } : { opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className='hidden md:absolute md:flex flex-col justify-center items-center gap-5 rounded bg-gray-500 w-full max-w-2xl h-full cursor-pointer'
            >
              <div className='flex justify-center items-center gap-5'>
                {website && (
                  <motion.a
                    href={website}
                    target='_blank'
                    initial={{ scale: 0, translateY: '-200px', opacity: 0 }}
                    animate={isInView ? { scale: 1, translateY: '0px', opacity: 1 } : { scale: 0, translateY: '-200px', opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 17,
                      duration: 3,
                      delay: isInView ? 2 : 0,
                      ease: [0.17, 0.55, 0.55, 1],
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className='bg-gray-600 p-3 rounded-full'
                    >
                      <AiFillEye size={50} />
                    </motion.div>
                  </motion.a>
                )}
                {github && (
                  <motion.a
                    href={github}
                    target='_blank'
                    initial={{ scale: 0, translateY: '-200px', opacity: 0 }}
                    animate={isInView ? { scale: 1, translateY: '0px', opacity: 1 } : { scale: 0, translateY: '-200px', opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 17,
                      duration: 3,
                      delay: isInView ? 2 : 0,
                      ease: [0.17, 0.55, 0.55, 1],
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className='bg-gray-600 p-3 rounded-full'
                    >
                      <AiFillGithub size={50} />
                    </motion.div>
                  </motion.a>
                )}
              </div>
              <motion.div
                initial={{ scale: 0, translateY: '-200px', opacity: 0 }}
                animate={isInView ? { scale: 1, translateY: '0px', opacity: 1 } : { scale: 0, translateY: '-200px', opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 17,
                  duration: 3,
                  delay: isInView ? 2.2 : 0,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
              >
                {referenceId && (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className='bg-gray-600 py-3 px-5 rounded-full'
                  >
                    <Link href={`/casestudy/${referenceId}`} className='font-bold text-xl'>
                      Case Study
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
            <div className='md:hidden flex justify-center items-center gap-5 pt-5 cursor-pointer'>
              {website && (
                <motion.a
                  href={website}
                  target='_blank'
                  initial={{ scale: 0, translateY: '-200px', opacity: 0 }}
                  animate={isInView ? { scale: 1, translateY: '0px', opacity: 1 } : { scale: 0, translateY: '-200px', opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                    duration: 3,
                    delay: isInView ? 2 : 0,
                    ease: [0.17, 0.55, 0.55, 1],
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className='bg-gray-600 p-3 rounded-full'
                  >
                    <AiFillEye size={50} />
                  </motion.div>
                </motion.a>
              )}
              <motion.div
                initial={{ scale: 0, translateY: '-200px', opacity: 0 }}
                animate={isInView ? { scale: 1, translateY: '0px', opacity: 1 } : { scale: 0, translateY: '-200px', opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 17,
                  duration: 3,
                  delay: isInView ? 2.2 : 0,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
              >
                {referenceId && (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className='bg-gray-600 py-3 px-5 rounded-full'
                  >
                    <Link href={`/casestudy/${referenceId}`} className='font-bold text-xl '>
                      Case Study
                    </Link>
                  </motion.div>
                )}
              </motion.div>
              {github && (
                <motion.a
                  href={github}
                  target='_blank'
                  initial={{ scale: 0, translateY: '-200px', opacity: 0 }}
                  animate={isInView ? { scale: 1, translateY: '0px', opacity: 1 } : { scale: 0, translateY: '-200px', opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                    duration: 3,
                    delay: isInView ? 2 : 0,
                    ease: [0.17, 0.55, 0.55, 1],
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className='bg-gray-600 p-3 rounded-full'
                  >
                    <AiFillGithub size={50} />
                  </motion.div>
                </motion.a>
              )}
            </div>
          </>
        )}
      </div>
    </article>
  );
};
