import React from 'react';
import LazyLoad from 'react-lazyload';
import { Helmet } from 'react-helmet';
import BigHero from '../components/homepage/big-hero';
import OrderBar from '../components/homepage/order-bar';
import SocialBar from '../components/homepage/social-bar';
import MenuPreview from '../components/homepage/menu-preview';
import TestimonialTaster from '../components/homepage/testimonial-taster';
import LaDifferenzaPromo from '../components/homepage/la-differenza-promo';
import Map from '../components/homepage/map';
import Passion from '../components/homepage/passion';
import Footer from '../components/homepage/footer';
import { YelpReservations } from '../components/homepage/yelp-reservations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getFullMenu } from '../utilities/contentful';
import { Category } from '../utilities/contentful-types';

export default function Index({ fullMenu }: { fullMenu: Category[] }): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <>
      <Helmet>
        <title>The Meatball Stoppe :: Love & Famiglia, All Rolled Up</title>
        <meta
          name="description"
          content="An authentic Italian restaurant loved by Guy Fieri & the entire community. Orlando's #1 ranked most family-friendly restaurant by USA Today."
        />
      </Helmet>
      {/*<Overlay />*/}
      <BigHero />
      <OrderBar />
      <LazyLoad height={100}>
        <YelpReservations />
      </LazyLoad>
      <LazyLoad height={350}>
        <SocialBar />
      </LazyLoad>
      <LazyLoad height={400}>
        <MenuPreview menu={fullMenu} />
      </LazyLoad>
      <LazyLoad height={350}>
        <TestimonialTaster />
      </LazyLoad>
      <LazyLoad height={400}>
        <LaDifferenzaPromo />
      </LazyLoad>
      <LazyLoad height={450}>
        <Map />
      </LazyLoad>
      <LazyLoad height={400}>
        <Passion />
      </LazyLoad>
      <LazyLoad height={160}>
        <Footer />
      </LazyLoad>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      fullMenu: await getFullMenu(),
    },
  };
};
