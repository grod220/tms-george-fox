import React from 'react';
import Head from 'next/head';

import ShortHero from '../../components/shared/short-hero';
import MeatballHero from '../../components/order-online/five-ball.jpg';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getNormalMenus } from '../../utilities/contentful';
import { MenuVersion } from '../../utilities/contentful-types';
import OrderApp from '../../components/order-app';

export default function Pickup({ menus }: { menus: MenuVersion[] }): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <>
      <Head>
        <title>Pickup :: The Meatball Stoppe</title>
        <meta name="description" content="Order a pickup so it'll be ready when you arrive" />
      </Head>
      <ShortHero image={MeatballHero} headline="Pickup Order" />
      <OrderApp menus={menus} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      menus: await getNormalMenus(),
    },
  };
};
