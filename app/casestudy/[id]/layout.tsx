'use client';
import { Navbar } from '@/components';

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
