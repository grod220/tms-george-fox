import React from 'react';
import Head from 'next/head';
import ShortHero from '../components/shared/short-hero';
import { FamilyDeliveryContent } from '../components/marketing-page/family-delivery-content';
import MeatballHero from '../components/order-online/five-ball.jpg';

export default function FamilyDeliveryProgram() {
  return (
    <>
      <Head>
        <title>Family Delivery Program :: The Meatball Stoppe</title>
        <meta name="description" content="Order a meal for your family, delivered right to your office." />
      </Head>
      <ShortHero image={MeatballHero} headline="Family Delivery Program" />
      <FamilyDeliveryContent />
    </>
  );
}
