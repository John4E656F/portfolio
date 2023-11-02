import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
export const Contact = () => {
  return (
    <section className='flex flex-col gap-10 py-10 text-center justify-center'>
      <h5 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Hit me up!</h5>
      <div className='flex flex-col gap-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
        <a href='mailto:john4e656f@gmail.com' target='_blank'>
          john4e656f@gmail.com
        </a>
        <div className='flex justify-center gap-10'>
          <a href='https://www.linkedin.com/in/john4e656f/' target='_blank'>
            <BsLinkedin color='blue' />
          </a>
          <a href='https://www.linkedin.com/in/john4e656f/' target='_blank'>
            <BsGithub />
          </a>
        </div>
      </div>
    </section>
  );
};
