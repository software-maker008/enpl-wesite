import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SoftwareAutomationHero from './components/SoftwareAutomationHero';
import SoftwareAutomationOverview from './components/SoftwareAutomationOverview';
import SoftwareAutomationServices from './components/SoftwareAutomationServices';
import SoftwareAutomationBenefits from './components/SoftwareAutomationBenefits';
import SoftwareAutomationCTA from './components/SoftwareAutomationCTA';
import Partners from '../../components/Partners';

export default function SoftwareAutomationPage() {
  return (
    <>
      <Header />
      <SoftwareAutomationHero />
      <SoftwareAutomationOverview />
      <SoftwareAutomationServices />
      <SoftwareAutomationBenefits />
      {/* <Partners /> */}
      <SoftwareAutomationCTA />
      <Footer />
    </>
  );
}
