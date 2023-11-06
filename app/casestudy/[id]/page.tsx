'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchCaseStudy, type CaseStudy } from '@/lib/contentful';
import { notFound } from 'next/navigation';
import { RichText } from '@/components';

interface CaseStudyPageParams {
  id: string;
}
interface CaseStudyPageProps {
  params: CaseStudyPageParams;
}

const CaseStudy: React.FC<CaseStudyPageProps> = ({ params }) => {
  const [caseStudyData, setCaseStudyData] = useState<CaseStudy>();
  useEffect(() => {
    async function fetchData() {
      try {
        const caseStudyResult = await fetchCaseStudy({ preview: false, id: params.id });
        console.log(caseStudyResult);
        setCaseStudyData(caseStudyResult);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    }

    fetchData();
  }, [params]);

  console.log(caseStudyData);
  // if (!caseStudyData) {
  //   return notFound();
  // }
  return (
    <section className='w-full flex flex-col items-center select-none bg-black  '>
      {caseStudyData && (
        <>
          {' '}
          <div className='w-full flex flex-col items-center py-16 pb-20 text-white '>
            <div className='container flex flex-col md:flex-row justify-between '>
              <div className='self-end flex flex-col gap-10 text-center'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>{caseStudyData.title}</h1>
                <h2 className='text-xl sm:text-2xl md:text-4xl'>{caseStudyData.subTitle}</h2>
                <ol className='flex justify-center gap-2'>
                  {caseStudyData.tags.map((tag, i) => (
                    <li key={i} className='bg-white py-1 px-3 text-black rounded-md'>
                      {tag}
                    </li>
                  ))}
                </ol>
              </div>
              <Image src='/yesjob.JPG' alt='yesjob' width={450} height={500} className='rounded max-w-lg' />
            </div>
          </div>
          <div className='w-full flex flex-col items-center justify-center py-20 gap-20 bg-white'>
            <div className='flex flex-col w-3/5 gap-20'>
              <div className='flex flex-col gap-10'>
                <h3 className='text-2xl sm:text-3xl font-semibold'>Overview</h3>
                <div className='text-lg'>{caseStudyData.overview}</div>
              </div>

              <div className='flex flex-col gap-10'>
                <h3 className='text-2xl sm:text-3xl font-semibold'>Problem</h3>
                <RichText document={caseStudyData.problem} />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CaseStudy;
