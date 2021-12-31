import React, { FC } from 'react';
import Head from 'next/head';

import ShortHero from '../../components/shared/short-hero';
import CateringHero from '../../components/order-online/baked-pasta.jpg';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getCateringMenu } from '../../utilities/contentful';
import { MenuVersion } from '../../utilities/contentful-types';
import OrderApp from '../../components/order-app';

const Catering: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ menus }) => {
  return (
    <>
      <Head>
        <title>Catering Order :: The Meatball Stoppe</title>
        <meta name="description" content="Order some catering for pickup or delivery." />
      </Head>
      <ShortHero image={CateringHero} headline="Catering Order" />
      <OrderApp catering menus={menus} />
    </>
  );
};

export const getStaticProps: GetStaticProps<{ menus: MenuVersion[] }> = async (context) => {
  return {
    props: {
      menus: await getCateringMenu(),
    },
  };
};

export default Catering;
