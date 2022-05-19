import React, { FC } from 'react';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import TopText from '../components/menu/top-text';
import ShortHero from '../components/shared/short-hero';
import MenuHero from '../components/menu/meatball-options.jpg';
import { getFullMenuPreview } from '../utilities/contentful';
import { Category } from '../utilities/contentful-types';
import dynamic from 'next/dynamic';

const MenuGrid = dynamic(() => import('../components/menu/menu-grid'), { ssr: false });

const Menu: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ fullMenu }) => {
  return (
    <>
      <Head>
        <title>Menu :: The Meatball Stoppe</title>
        <meta name="description" content="We have the best Italian food you'll find in Orlando" />
      </Head>
      <ShortHero image={MenuHero} headline="Our delicious menu" />
      <TopText />
      <MenuGrid menu={fullMenu} />
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

export default Menu;
