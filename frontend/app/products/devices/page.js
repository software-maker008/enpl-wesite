import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EndPointsHero from './components/EndPointsHero';
import EnterpriseDesktops from './components/EnterpriseDesktops';
import Workstations from './components/Workstations';
import Laptops from './components/Laptops';
import Tablets from './components/Tablets';
import AppleProducts from './components/AppleProducts';
import Partners from '../../components/Partners';

export default function LaptopsDesktopsMobilePage() {
  return (
    <>
      <Header />
      <EndPointsHero />
      <EnterpriseDesktops />
      <Workstations />
      <Laptops />
      <Tablets />
      <AppleProducts />
      <Partners />
      <Footer />
    </>
  );
}
