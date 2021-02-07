import React from 'react';
import Head from 'next/head';

import ShortHero from '../components/shared/short-hero';
import CateringHero from '../components/event-catering/plate-spread.jpg';
import EventCatering from '../components/event-catering/';

export default function EventCateringPage() {
  return (
    <>
      <Head>
        <title>Catering :: The Meatball Stoppe</title>
        <meta name="description" content="Have The Meatball Stoppe cater your next event." />
      </Head>
      <ShortHero image={CateringHero} headline="Event Catering" />
      <EventCatering />
    </>
  );
}
