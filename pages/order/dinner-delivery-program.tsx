import React, { FC } from 'react';
import Head from 'next/head';

import ShortHero from '../../components/shared/short-hero';
import DeliveryPicHero from '../../components/marketing-page/delivery-pic.jpg';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getFamilyDeliveryMenu } from '../../utilities/contentful';
import { MenuVersion } from '../../utilities/contentful-types';
import OrderApp from '../../components/order-app';

const DinnerDeliveryProgram: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ menus }) => {
  return (
    <>
      <Head>
        <title>Dinner Delivery Program :: The Meatball Stoppe</title>
        <meta name="description" content="Delivered straight to your office" />
      </Head>
      <ShortHero image={DeliveryPicHero} headline="Dinner Delivery Program" />
      <OrderApp type="business" menus={menus} />
    </>
  );
};

export const getStaticProps: GetStaticProps<{ menus: MenuVersion[] }> = async (context) => {
  return {
    props: {
      menus: await getFamilyDeliveryMenu(),
    },
  };
};

export default DinnerDeliveryProgram;
