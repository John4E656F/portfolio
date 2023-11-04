import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Work } from '..';
import type { RefProps } from '@/types';
import { Entry } from 'contentful';
import { client } from '@/lib/api';
import { TypePortfolio } from '@/types';
import { getAllWorkList } from '@/lib/api';

interface WorkData {
  title: string;
  subTitle: string;
  featuredImage: string;
  githubLink: string;
  websiteLink: string;
  right: boolean;
}

async function getWorkData() {
  const res = await getAllWorkList();
  if (!res) {
    throw new Error('Failed to fetch data');
  }
  return res;
}

export const Works: React.FC<RefProps> = ({ parentRef }) => {
  const [workData, setWorkData] = useState<TypePortfolio[]>([]);
  const { scrollYProgress } = useScroll({ target: parentRef });
  const bgColor = useTransform(scrollYProgress, [0, 0.5], ['#ffffff', '#000000']);

  useEffect(() => {
    // Fetch data from Contentful here
    async function fetchData() {
      try {
        const response = await getAllWorkList();

        const mappedData: TypePortfolio[] = response.map((item: TypePortfolio<any>) => ({
          title: item.fields.title,
          subTitle: item.fields.subTitle,
          featuredImage: item.fields.featuredImage?.fields.file.url,
          githubLink: item.fields.githubLink,
          websiteLink: item.fields.websiteLink,
          right: item.fields.right,
        }));
        console.log(mappedData);

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
