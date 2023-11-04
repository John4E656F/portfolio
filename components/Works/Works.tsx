import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Work } from '..';
import type { RefProps } from '@/types';

import { TypeWorkList } from '@/types/contentful';
import { getAllWorkList } from '@/lib/api';

export const Works: React.FC<RefProps> = ({ parentRef }) => {
  const [workData, setWorkData] = useState<TypeWorkList[]>([]);
  const { scrollYProgress } = useScroll({ target: parentRef });
  const bgColor = useTransform(scrollYProgress, [0, 0.5], ['#ffffff', '#000000']);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllWorkList();

        const mappedData: TypeWorkList[] = response.map((item: TypeWorkList<any>) => ({
          title: item.fields.title,
          subTitle: item.fields.subTitle,
          featuredImage: item.fields.featuredImage?.fields.file.url,
          githubLink: item.fields.githubLink,
          websiteLink: item.fields.websiteLink,
          right: item.fields.right,
        }));

        setWorkData(mappedData);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <motion.section
      id='works'
      className='overflow-hidden w-full py-20 my-10 text-white flex justify-center'
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
            image={workData.featuredImage}
            website={workData.websiteLink}
            github={workData.githubLink}
            right={workData.right}
          />
        ))}
      </div>
    </motion.section>
  );
};
