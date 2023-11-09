import React from 'react';
// import { WorkPageList } from '@/components';

const WorksPage = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='container w-full flex flex-col py-16 pb-20 bg-red-300'>
        <h3 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>All my projects</h3>
        {/* <WorkPageList /> */}
      </div>
    </section>
  );
};

export default WorksPage;
