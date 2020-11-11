import React from 'react';
import Head from 'next/head';

import ShortHero from '../../components/shared/short-hero';
import MeatballHero from '../../components/order-online/five-ball.jpg';
import OrderOnline from '../../components/order-online';

export default function OrderIndex() {
  return (
    <div>
      <Head>
        <title>Order Online :: The Meatball Stoppe</title>
        <meta name="description" content="Pickup from the store or sit back and enjoy the couch with delivery." />
      </Head>
      <ShortHero image={MeatballHero} headline="Order Online" />
      <OrderOnline />
    </div>
  );
}
