import React from 'react';
import Head from 'next/head';
import ShortHero from '../components/shared/short-hero';
import AboutUsHero from '../components/about-us/family-drone-pic.jpg';
import TopIntro from '../components/about-us/top-intro';
import LocationInfo from '../components/about-us/location-info';
import DiningRoom from '../components/about-us/dining-room';
import AboutOwners from '../components/about-us/about-owners';
import GivingBack from '../components/about-us/giving-back';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us :: The Meatball Stoppe</title>
        <meta
          name="description"
          content="Making amazing Italian food and bringing families together has been our story from the beginning."
        />
      </Head>
      <ShortHero image={AboutUsHero} headline="About the Stoppe Famiglia" />
      <TopIntro />
      <LocationInfo />
      <DiningRoom />
      <AboutOwners />
      <GivingBack />
    </>
  );
}
