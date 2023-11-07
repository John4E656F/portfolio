import { useState } from 'react';
import { Image } from '..';
import { formatContentfulImageUrl } from '@/lib';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

interface ImagesProps {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}
export const ImageCarousel = ({ images }: { images: ImagesProps[] }) => {
  console.log(images);

  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className='flex flex-col items-center justify-between'>
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <div className='relative w-full max-w-[1500px] flex items-center overflow-hidden'>
          <AnimatePresence>
            {isFocus && (
              <motion.div
                className='absolute left-2 right-2 flex justify-between z-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onHoverStart={() => setIsFocus(true)}
                onHoverEnd={() => setIsFocus(false)}
              >
                <button onClick={onPrevClick}>Left</button>
                <button onClick={onNextClick}>Right</button>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            className='flex gap-4 flex-nowrap w-4/5'
            animate={{ x: `calc(10% - ${current * 100}%)` }}
            onHoverStart={() => setIsFocus(true)}
            onHoverEnd={() => setIsFocus(false)}
          >
            {images.map((image, i) => (
              <Image
                key={i}
                src={formatContentfulImageUrl(image!.src, 'https')}
                alt='Yes Job UX UI Strategy, Color Palette and Font'
                width={1000}
                className=' object-contain border'
              />
            ))}
          </motion.div>
          <div className='absolute left-1/2 transform -translate-x-1/2 z-10 place-self-end'>
            <div className='flex gap-3 px-3 py-2 bg-gray-400 rounded-full opacity-80'>
              {[...images].map((_, idx) => (
                <button key={idx} onClick={() => setCurrent(idx)}>
                  <div className={`w-2 h-2 rounded-full ${idx === current ? 'bg-white' : 'bg-zinc-600'}`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
};
