'use client';

import MainLayout from './components/layout/MainLayout';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import RecentProjectsSection from './components/home/RecentProjectsSection';
import CtaSection from './components/home/CtaSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <RecentProjectsSection />
      <CtaSection />
    </MainLayout>
  );
}
