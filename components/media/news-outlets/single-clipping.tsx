import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 4rem;
  font-style: italic;
  color: #989898;
  text-align: justify;

  audio {
    width: 100%;
  }
`;

const LinkOut = styled.a`
  color: #902e2d;
  text-decoration: underline;
`;

const Logo = styled.img`
  max-height: 30%;
  max-width: 74%;
  display: block;
  margin: 0 auto 1rem;
`;

interface ClippingProps {
  name: string;
  image: StaticImageData;
  audio?: string;
  linkTo?: string;
  text: string;
}

const Clipping: FC<ClippingProps> = ({ name, image, audio, linkTo, text }) => (
  <Container>
    <Logo src={image.src} alt={name} />"{text}" {''}
    {linkTo ? (
      <LinkOut href={linkTo} target="_blank" rel="noopener noreferrer">
        LINK
      </LinkOut>
    ) : null}
    {audio ? (
      <div>
        <audio // eslint-disable-line jsx-a11y/media-has-caption
          controls
          src={audio}
          aria-label="play"
        />
      </div>
    ) : null}
  </Container>
);

export default Clipping;
