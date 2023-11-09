'use client';
import { Navbar, Contact } from '@/components';

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='select-none'>
      <Navbar />
      {children}
      <Contact />
    </section>
  );
}
