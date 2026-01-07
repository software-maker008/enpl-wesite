import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SoftwaresHero from './components/SoftwaresHero';
import SoftwaresCapabilities from './components/SoftwaresCapabilities';
import SoftwaresServices from './components/SoftwaresServices';
import SoftwaresUseCases from './components/SoftwaresUseCases';
import SoftwaresTechnologies from './components/SoftwaresTechnologies';
import SoftwaresCTA from './components/SoftwaresCTA';

export default function SoftwaresSolutionsPage() {
  return (
    <>
      <Header />
      <SoftwaresHero />
      <SoftwaresCapabilities />
      <SoftwaresServices />
      <SoftwaresUseCases />
      <SoftwaresTechnologies />
      <SoftwaresCTA />
      <Footer />
    </>
  );
}
