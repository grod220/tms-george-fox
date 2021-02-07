import React from 'react';
import Head from 'next/head';

import MediaHero from './camera-and-studio.jpg';
import TripleD from './triple-d/';
import NewsOutlets from './news-outlets/';
import VideoClips from './video-clips/';
import MoreVidsText from './more-vids-text/';
import ShortHero from '../shared/short-hero';

const Media = () => (
  <div>
    <Head>
      <title>Media :: The Meatball Stoppe</title>
      <meta name="description" content="Guy Fieri loves us and so does the greater Orlando community" />
    </Head>
    <ShortHero image={MediaHero} headline="In the media" />
    <TripleD />
    <NewsOutlets />
    <VideoClips />
    <MoreVidsText />
  </div>
);

export default Media;
