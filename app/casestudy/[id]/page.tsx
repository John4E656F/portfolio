'use client';
import React, { useEffect, useState } from 'react';
import { fetchCaseStudy, type CaseStudy } from '@/lib/contentful';
import { formatContentfulImageUrl } from '@/lib';
import { notFound } from 'next/navigation';
import { RichText, Image, ImageCarousel } from '@/components';

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
          <div className='w-full flex flex-col items-center py-16 pb-20 text-white '>
            <div className='container flex flex-col md:flex-row justify-between gap-5'>
              <div className='md:self-end sm:self-center flex flex-col gap-10 text-center'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>{caseStudyData.title}</h1>
                <h2 className='text-xl sm:text-2xl md:text-4xl'>{caseStudyData.subTitle}</h2>
                <ol className='flex flex-row flex-wrap justify-center gap-2'>
                  {caseStudyData.tags.map((tag, i) => (
                    <li key={i} className='list-none flex items-center bg-white py-1 px-3 text-black rounded-md'>
                      {tag}
                    </li>
                  ))}
                </ol>
              </div>
              <Image
                src={formatContentfulImageUrl(caseStudyData.featuredImage!.src, 'https') || '/yesjob.JPG'}
                alt='yesjob'
                width={1000}
                className='w-full max-w-4xl h-auto max-h-l object-fill grounded'
              />
            </div>
          </div>
          <div className='w-full flex flex-col items-center justify-center py-20 gap-20 bg-white'>
            <div className='flex flex-col w-4/5 lg:w-3/5 gap-20'>
              <div className='flex flex-col gap-10'>
                <h3 className='text-2xl sm:text-3xl font-semibold'>Overview</h3>
                <RichText document={caseStudyData.overview} />
              </div>
              <div className='flex flex-col md:flex-row  gap-5'>
                <div className='flex flex-col gap-10'>
                  <h3 className='text-2xl sm:text-3xl font-semibold'>Problem</h3>
                  <RichText document={caseStudyData.problem} />
                </div>
                <div className='flex flex-col gap-10'>
                  <h3 className='text-2xl sm:text-3xl font-semibold'>Solution</h3>
                  <RichText document={caseStudyData.solution} />
                </div>
              </div>
            </div>
            <div className='flex w-4/5 lg:w-3/5 '>
              <div className='flex flex-col items-center gap-5 font-semibold'>
                <h3 className='text-2xl sm:text-3xl '>Skill Sets</h3>
                <ol className='flex flex-row flex-wrap justify-center gap-2'>
                  {caseStudyData.skillSet.map((tag, i) => (
                    <li key={i} className='list-none flex items-center bg-black py-1 px-3 text-white rounded-md'>
                      {tag}
                    </li>
                  ))}
                </ol>
              </div>
              <div className='flex flex-col items-center gap-5 font-semibold'>
                <h3 className='text-2xl sm:text-3xl '>Tech Stack</h3>
                <ol className='flex flex-row flex-wrap justify-center gap-2 '>
                  {caseStudyData.techUsed.map((tag, i) => (
                    <li key={i} className='list-none flex items-center bg-black py-1 px-3 text-white rounded-md'>
                      {tag}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className='flex flex-col w-4/5 lg:w-3/5 gap-5'>
              <div>
                <h3 className='text-2xl sm:text-3xl font-semibold'>UI Strategy</h3>
                <p>{caseStudyData.uiStrategy} </p>
                <div className=' flex flex-col sm:flex-row justify-between gap-5'>
                  {caseStudyData.uiImage!.map((image, i) => (
                    <Image
                      key={i}
                      src={formatContentfulImageUrl(image!.src, 'https')}
                      alt='Yes Job UX UI Strategy, Color Palette and Font'
                      width={1000}
                      className='w-full max-w-lg h-auto max-h-l object-fill  border'
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className='text-2xl sm:text-3xl font-semibold'>UX Strategy</h3>
                <RichText document={caseStudyData.uxStrategy} />
                <div className=' flex flex-col sm:flex-row justify-between gap-5'>
                  {caseStudyData.uxImage!.map((image, i) => (
                    <Image
                      key={i}
                      src={formatContentfulImageUrl(image!.src, 'https')}
                      alt='Yes Job UX UI Strategy, Color Palette and Font'
                      width={1000}
                      className='w-full max-w-lg h-auto max-h-l object-fill  border'
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-col w-4/5 lg:w-3/5 gap-5'>
              <h3 className='text-2xl sm:text-3xl font-semibold'>Development Process</h3>
              <RichText document={caseStudyData.development} />
            </div>
            {caseStudyData.screenshots ? (
              <ImageCarousel images={caseStudyData.screenshots} />
            ) : (
              // Handle the case where caseStudyData.screenshots is null
              <p>No screenshots available</p>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default CaseStudy;
