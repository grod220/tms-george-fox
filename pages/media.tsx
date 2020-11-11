import React from 'react';
import { Helmet } from 'react-helmet';

import ShortHero from '../components/shared/short-hero';
import MediaHero from '../components/media/camera-and-studio.jpg';
import TripleD from '../components/media/triple-d';
import NewsOutlets from '../components/media/news-outlets';
import VideoClips from '../components/media/video-clips';
import MoreVidsText from '../components/media/more-vids-text';

export default function Media() {
  return (
    <>
      <Helmet>
        <title>Media :: The Meatball Stoppe</title>
        <meta name="description" content="Guy Fieri loves us and so does the greater Orlando community" />
      </Helmet>
      <ShortHero image={MediaHero} headline="In the media" />
      <TripleD />
      <NewsOutlets />
      <VideoClips />
      <MoreVidsText />
    </>
  );
}
