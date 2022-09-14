import React, { FC } from 'react';
import Head from 'next/head';

import ShortHero from '../../components/shared/short-hero';
import MeatballHero from '../../components/order-online/five-ball.jpg';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getNormalMenus } from '../../utilities/contentful';
import { MenuVersion } from '../../utilities/contentful-types';
import OrderApp from '../../components/order-app';

const FamilyDeliveryProgram: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ menus }) => {
  return (
    <>
      <Head>
        <title>Special Order :: The Meatball Stoppe</title>
        <meta name="description" content="Delivered straight to your office" />
      </Head>
      <ShortHero image={MeatballHero} headline="Family Delivery Program" />
      <OrderApp type="business" menus={menus} />
    </>
  );
};

export const getStaticProps: GetStaticProps<{ menus: MenuVersion[] }> = async (context) => {
  return {
    props: {
      menus: await getNormalMenus(),
    },
  };
};

export default FamilyDeliveryProgram;
