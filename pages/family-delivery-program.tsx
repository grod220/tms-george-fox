import React from 'react';
import Head from 'next/head';
import ShortHero from '../components/shared/short-hero';
import { FamilyDeliveryContent } from '../components/marketing-page/family-delivery-content';
import DeliveryPicHero from '../components/marketing-page/delivery-pic.jpg';

export default function FamilyDeliveryProgram() {
  return (
    <>
      <Head>
        <title>Family Delivery Program :: The Meatball Stoppe</title>
        <meta name="description" content="Order a meal for your family, delivered right to your office." />
      </Head>
      <ShortHero image={DeliveryPicHero} headline="Family Delivery Program" />
      <FamilyDeliveryContent />
    </>
  );
}
