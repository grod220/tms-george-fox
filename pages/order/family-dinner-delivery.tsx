import React, { FC } from 'react';
import Head from 'next/head';

import ShortHero from '../../components/shared/short-hero';
import DeliveryPicHero from '../../components/marketing-page/delivery-pic.jpg';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getFamilyDeliveryItemsWithIdsOnly, getFamilyDeliveryMenu } from '../../utilities/contentful';
import { MenuVersion } from '../../utilities/contentful-types';
import OrderApp from '../../components/order-app';

const FamilyDinnerDelivery: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ menus }) => {
  return (
    <>
      <Head>
        <title>Special Order :: The Meatball Stoppe</title>
        <meta name="description" content="Delivered straight to your office" />
      </Head>
      <ShortHero image={DeliveryPicHero} headline="Family Dinner Delivery" />
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

export default FamilyDinnerDelivery;
