import React from 'react';
import LazyLoad from 'react-lazyload';
import { Helmet } from 'react-helmet';
import BigHero from '../components/homepage/big-hero';
import OrderBar from '../components/homepage/order-bar';
import SocialBar from '../components/homepage/social-bar';
// import MenuPreview from '../components/homepage/menu-preview';
import TestimonialTaster from '../components/homepage/testimonial-taster';
import LaDifferenzaPromo from '../components/homepage/la-differenza-promo';
import Map from '../components/homepage/map';
import Passion from '../components/homepage/passion';
import Footer from '../components/homepage/footer';
import { YelpReservations } from '../components/homepage/yelp-reservations';

export default function Index() {
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
      {/*<OrderBar />*/}
      {/*<LazyLoad height={100}>*/}
      {/*  <YelpReservations />*/}
      {/*</LazyLoad>*/}
      {/*<LazyLoad height={350}>*/}
      {/*  <SocialBar />*/}
      {/*</LazyLoad>*/}
      {/*<LazyLoad height={400}>*/}
      {/*  <MenuPreview />*/}
      {/*</LazyLoad>*/}
      {/*<LazyLoad height={350}>*/}
      {/*  <TestimonialTaster />*/}
      {/*</LazyLoad>*/}
      {/*<LazyLoad height={400}>*/}
      {/*  <LaDifferenzaPromo />*/}
      {/*</LazyLoad>*/}
      {/*<LazyLoad height={450}>*/}
      {/*  <Map />*/}
      {/*</LazyLoad>*/}
      {/*<LazyLoad height={400}>*/}
      {/*  <Passion />*/}
      {/*</LazyLoad>*/}
      {/*<LazyLoad height={160}>*/}
      {/*  <Footer />*/}
      {/*</LazyLoad>*/}
    </>
  );
}
