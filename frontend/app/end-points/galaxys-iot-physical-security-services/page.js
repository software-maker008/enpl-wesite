import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IoTSecurityHero from './components/IoTSecurityHero';
import IoTManagement from './components/IoTManagement';
import AIEdgeInfrastructure from './components/AIEdgeInfrastructure';
import SmartBuildingSolution from './components/SmartBuildingSolution';
import PhysicalSecurityManagement from './components/PhysicalSecurityManagement';
import Partners from '../../components/Partners';

export default function IoTSecurityPage() {
  return (
    <>
      <Header />
      <IoTSecurityHero />
      <IoTManagement />
      <AIEdgeInfrastructure />
      <SmartBuildingSolution />
      <PhysicalSecurityManagement />
      <Partners />
      <Footer />
    </>
  );
}
