import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ITConsultingHero from './components/ITConsultingHero';
import ITConsultingOverview from './components/ITConsultingOverview';
import ITConsultingServices from './components/ITConsultingServices';
import ITConsultingBenefits from './components/ITConsultingBenefits';
import ITConsultingCTA from './components/ITConsultingCTA';
import Partners from '../../components/Partners';

export default function ITConsultingPage() {
  return (
    <>
      <Header />
      <ITConsultingHero />
      <ITConsultingOverview />
      <ITConsultingServices />
      <ITConsultingBenefits />
      {/* <Partners /> */}
      <ITConsultingCTA />
      <Footer />
    </>
  );
}
