import React from 'react';
import { Helmet } from 'react-helmet';

import MediaHero from './camera-and-studio.jpg';
import TripleD from './triple-d/';
import NewsOutlets from './news-outlets/';
import VideoClips from './video-clips/';
import MoreVidsText from './more-vids-text/';
import ShortHero from '../shared/short-hero';

const Media = () => (
  <div>
    <Helmet>
      <title>Media :: The Meatball Stoppe</title>
      <meta name="description" content="Guy Fieri loves us and so does the greater Orlando community" />
    </Helmet>
    <ShortHero image={MediaHero} headline="In the media" />
    <TripleD />
    <NewsOutlets />
    <VideoClips />
    <MoreVidsText />
  </div>
);

export default Media;
