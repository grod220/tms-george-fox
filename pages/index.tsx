import React, { FC } from 'react';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';
import BigHero from '../components/homepage/big-hero';
import OrderBar from '../components/homepage/order-bar';
import SocialBar from '../components/homepage/social-bar';
import MenuPreview from '../components/homepage/menu-preview';
import TestimonialTaster from '../components/homepage/testimonial-taster';
import Map from '../components/homepage/map';
import Passion from '../components/homepage/passion';
import Footer from '../components/homepage/footer';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getFullMenuPreview } from '../utilities/contentful';
import { Category } from '../utilities/contentful-types';
import NewsletterSignup from '../components/homepage/newsletter-signup';
import { MeatballDisplay } from '../components/shared/meatball-display';
import Overlay, { overlayShouldDisplay, isClosedForHoliday } from '../components/homepage/modal-overlay';

const Index: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ fullMenu }) => {
  return (
    <>
      <Head>
        <title>The Meatball Stoppe :: Love & Famiglia, All Rolled Up</title>
        <meta
          name="description"
          content="An authentic Italian restaurant loved by Guy Fieri & the entire community. Orlando's #1 ranked most family-friendly restaurant by USA Today."
        />
      </Head>
      {/*{overlayShouldDisplay() && <Overlay />}*/}
      <BigHero />
      <OrderBar />
      {/*<LazyLoad height={100}>*/}
      {/*  <YelpReservations />*/}
      {/*</LazyLoad>*/}
      <LazyLoad height={400}>
        <SocialBar />
      </LazyLoad>
      <LazyLoad height={400}>
        <MenuPreview menu={fullMenu} />
      </LazyLoad>
      <LazyLoad height={400}>
        <MeatballDisplay />
      </LazyLoad>
      <LazyLoad height={350}>
        <TestimonialTaster />
      </LazyLoad>
      {/*<LazyLoad height={400}>*/}
      {/*  <LaDifferenzaPromo />*/}
      {/*</LazyLoad>*/}
      <LazyLoad height={450}>
        <Map />
      </LazyLoad>
      <LazyLoad height={400}>
        <Passion />
      </LazyLoad>
      <LazyLoad height={200}>
        <NewsletterSignup />
      </LazyLoad>
      <LazyLoad height={160}>
        <Footer />
      </LazyLoad>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ fullMenu: Category[] }> = async (context) => {
  return {
    props: {
      fullMenu: await getFullMenuPreview(),
    },
  };
};

export default Index;
