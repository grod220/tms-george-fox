import React from 'react';
import Head from 'next/head';
import ShortHero from '../components/shared/short-hero';
import AboutUsHero from '../components/about-us/family-drone-pic.jpg';
import { SomeContent } from '../components/marketing-page/some-content';

export default function SomeSpecialThing() {
  return (
    <>
      <Head>
        <title>Some special thing :: The Meatball Stoppe</title>
        {/* TODO: tags */}
        <meta
          name="description"
          content="Making amazing Italian food and bringing families together has been our story from the beginning."
        />
      </Head>
      <ShortHero image={AboutUsHero} headline="About the Stoppe Famiglia" />
      <SomeContent />
    </>
  );
}
