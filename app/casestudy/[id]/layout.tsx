'use client';
import { Navbar, Contact } from '@/components';

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
      <Contact />
    </section>
  );
}
