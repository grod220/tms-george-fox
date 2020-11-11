import React from 'react';
import { Helmet } from 'react-helmet';

import ShortHero from '../../components/shared/short-hero';
import CateringHero from '../../components/order-online/baked-pasta.jpg';
import OrderApp from '../../components/order-app';

export default function Catering() {
  return (
    <>
      <Helmet>
        <title>Catering Order :: The Meatball Stoppe</title>
        <meta name="description" content="Order some catering for pickup or delivery." />
      </Helmet>
      <ShortHero image={CateringHero} headline="Catering Order" />
      <OrderApp catering />
    </>
  );
}
