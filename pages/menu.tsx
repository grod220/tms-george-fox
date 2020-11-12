import React from 'react';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import TopText from '../components/menu/top-text';
import ShortHero from '../components/shared/short-hero';
import MenuHero from '../components/menu/food-image-tiles.jpg';
import MenuGrid from '../components/menu/menu-grid';
import { getFullMenu } from '../utilities/contentful';
import { Category } from '../utilities/contentful-types';

export default function Menu({ fullMenu }: { fullMenu: Category[] }): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <div>
      <Head>
        <title>Menu :: The Meatball Stoppe</title>
        <meta name="description" content="We have the best Italian food you'll find in Orlando" />
      </Head>
      <ShortHero image={MenuHero} headline="Our delicious menu" />
      <TopText />
      <MenuGrid menu={fullMenu} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      fullMenu: await getFullMenu(),
    },
  };
};
