import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import NetworkInfrastructureHero from '../components/NetworkInfrastructureHero';
import NetworkInfrastructureOverview from '../components/NetworkInfrastructureOverview';
import NetworkInfrastructureChallenges from '../components/NetworkInfrastructureChallenges';
import NetworkInfrastructureSolutions from '../components/NetworkInfrastructureSolutions';
import NetworkInfrastructureServices from '../components/NetworkInfrastructureServices';
import NetworkInfrastructureLetsGetInTouch from '../components/NetworkInfrastructureLetsGetInTouch';
import Partners from '../../../components/Partners';

export default function NetworkInfrastructurePage() {
  return (
    <>
      <Header />
      <NetworkInfrastructureHero />
      <NetworkInfrastructureOverview />
      <NetworkInfrastructureChallenges />
      <NetworkInfrastructureSolutions />
      <NetworkInfrastructureServices />
      <Partners />
      <NetworkInfrastructureLetsGetInTouch />
      <Footer />
    </>
  );
}
