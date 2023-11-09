'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WorkPageList, Work } from '@/components';
import type { RefProps } from '@/types';
import { fetchWorkList, type WorkList } from '@/lib/contentful';

const WorksPage = () => {
  const ref = useRef(null);

  const [workData, setWorkData] = useState<WorkList[]>([]);
  const { scrollYProgress } = useScroll({ target: ref });
  const bgColor = useTransform(scrollYProgress, [0, 0.5], ['#ffffff', '#000000']);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchWorkList({ preview: false });
        setWorkData(response);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    }

    fetchData();
  }, []);
  console.log(workData);

  return (
    <div ref={ref} className='w-full flex flex-col items-center'>
      <div className='container w-full flex flex-col py-16 pb-20 gap-20 bg-red-300'>
        <h3 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>All my projects</h3>
        {workData.map((workData, index) => (
          <Work
            key={index}
            parentRef={ref}
            title={workData.title}
            subTitle={workData.subTitle}
            image={workData.featuredImage!.src}
            website={workData.websiteLink}
            github={workData.githubLink}
            right={workData.right}
            referenceId={workData.referenceId}
            page={true}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksPage;
