import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import LogoStrip from '../components/LogoStrip';
import OurServices from '../components/OurServices';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import PricingPlan from '../components/PricingPlan';
import Secure from '../components/Secure';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <LogoStrip />
      <OurServices />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlan />
      <Secure />
      <BlogSection />
      <Newsletter />
    </>
  );
}

export default Home;