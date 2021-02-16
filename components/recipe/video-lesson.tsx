import React, { useEffect, useState } from 'react';
import Separator from './separator';
import styled from 'styled-components';

const VideoEmbed = styled.iframe`
  width: 100%;
  margin-top: 15px;
`;

const Sponsorships = styled.p`
  font-size: 18px;
  font-style: italic;
  color: gray;
  text-align: right;
  margin: 0 0 -10px 0;

  a {
    text-decoration: underline;
  }
`;

const VideoLesson = ({ youtubeEmbedId }: { youtubeEmbedId: string }) => {
  const [vidHeight, setVidHeight] = useState(450);

  useEffect(() => {
    const containerWidth = document.getElementById('yt-embed').offsetWidth;
    const proportionedHeight = (containerWidth * 9) / 16;
    setVidHeight(proportionedHeight < 400 ? proportionedHeight : 400);
  });

  return (
    <div id="yt-embed">
      <Separator title="Video lesson" />
      <VideoEmbed
        height={vidHeight}
        src={`https://www.youtube.com/embed/${youtubeEmbedId}?modestbranding=1&rel=0`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Sponsorships>
        Video sponsors: <a href="https://www.flovideography.com/">Flo Videography</a>,{' '}
        <a href="https://www.clincloudresearch.com/">CLINCLOUD</a>, & <a href="https://adrccares.org/">ADRC</a>
      </Sponsorships>
    </div>
  );
};

export default VideoLesson;
