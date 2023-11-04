import React from 'react';

const CaseStudy = () => {
  return (
    <section className='w-full flex flex-col items-center select-none'>
      <div className='container flex flex-col py-5 gap-10'>
        <div className='flex flex-col md:flex-row bg-red-200'>
          <div className=''>
            <h1>Yes Job</h1>
            <h2>Horeca Hiring Made Easy: A Case Study</h2>
          </div>
          <img src='/yesjob.JPG' className='rounded w-full max-w-2xl' />
        </div>
        <div className='h-screen bg-blue-200'>Hello World</div>
      </div>
    </section>
  );
};

export default CaseStudy;
