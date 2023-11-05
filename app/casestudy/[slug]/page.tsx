import React from 'react';
import Image from 'next/image';

const CaseStudy = () => {
  return (
    <section className='w-full flex flex-col items-center select-none bg-black  '>
      <div className='w-full flex flex-col items-center py-16 pb-20 text-white '>
        <div className='container flex flex-col md:flex-row justify-between '>
          <div className='self-end flex flex-col gap-10'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Yes Job</h1>
            <h2 className='text-xl sm:text-2xl md:text-4xl'>Horeca Hiring Made Easy: A Case Study</h2>
          </div>
          <Image src='/yesjob.JPG' alt='yesjob' width={500} height={500} className='rounded max-w-lg' />
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center py-20 gap-20 bg-white'>
        <div className='flex flex-col w-3/5 gap-20'>
          <div className='flex flex-col gap-10'>
            <h3 className='text-2xl sm:text-3xl font-semibold'>Overview</h3>
            <p className='text-lg'>
              As a product designer, I am deeply passionate about web accessibility and the positive impact it can have on people's lives. Ensuring
              that digital content is accessible and usable for everyone, regardless of their abilities, is not only a legal requirement but also an
              ethical responsibility. I believe that web accessibility promotes inclusion, creating a more equitable online experience that can lead
              to increased user satisfaction, higher engagement, and better conversion rates. Moreover, businesses that prioritize web accessibility
              can benefit from improved compliance with disability discrimination laws, as well as gaining a competitive edge in the market.
            </p>
          </div>

          <div className='flex flex-col gap-10'>
            <h3 className='text-2xl sm:text-3xl font-semibold'>Why Redesign Reddit?</h3>
            <p>
              As a product designer, I am deeply passionate about web accessibility and the positive impact it can have on people's lives. Ensuring
              that digital content is accessible and usable for everyone, regardless of their abilities, is not only a legal requirement but also an
              ethical responsibility. I believe that web accessibility promotes inclusion, creating a more equitable online experience that can lead
              to increased user satisfaction, higher engagement, and better conversion rates. Moreover, businesses that prioritize web accessibility
              can benefit from improved compliance with disability discrimination laws, as well as gaining a competitive edge in the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
