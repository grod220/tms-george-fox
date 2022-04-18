import React from 'react';
import styled from 'styled-components';

import SizzleTrailer from './video/sizzle.mp4';
import FirstFrame from './video/first-frame.png';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LoopingVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VideoBackground = () => (
  <Container>
    <LoopingVideo poster={FirstFrame.src} src={SizzleTrailer} loop muted autoPlay />
  </Container>
);
