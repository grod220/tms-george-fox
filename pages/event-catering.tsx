import React from 'react';
import { Helmet } from 'react-helmet';

import ShortHero from '../components/shared/short-hero';
import CateringHero from '../components/event-catering/plate-spread.jpg';
import EventCatering from '../components/event-catering/';

export default function EventCateringPage() {
  return (
    <>
      <Helmet>
        <title>Catering :: The Meatball Stoppe</title>
        <meta name="description" content="Have The Meatball Stoppe cater your next event." />
      </Helmet>
      <ShortHero image={CateringHero} headline="Event Catering" />
      <EventCatering />
    </>
  );
}
