import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FBSmallIcon from './images/fblogo.svg';
import { useFetch } from 'use-http';
import { media } from '../../../utilities/media';

const OuterBox = styled.div`
  box-shadow: -0.5rem 0.1rem 1.3rem 0 rgba(0, 0, 0, 0.5);
  margin: -12.5rem 0 2rem 0;
  background: #fff;
  padding: 1rem;
  transition: all 0.6s;

  &:hover {
    transform: scale(1.03);
    box-shadow: -0.5rem 0.1rem 5rem 0 rgba(0, 0, 0, 0.4);
  }

  ${media.tablet`
    margin: -4.5rem 0 2rem 0;
  `}

  ${media.phone`
    margin: -4.5rem 0 2rem 0;
  `}
`;

const SocialWrapper = styled.div`
  height: 42rem;
  overflow: hidden;
  position: relative;
  color: #337ab7;

  &:hover {
    color: coral;
  }

  ${media.tablet`
    height: 37rem;
  `}

  ${media.phone`
    height: 37rem;
  `}
`;

const FBImage = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;
  background-image: url(${(props) => props.src});
  animation: ${(props) => props.activated && 'fadeIn 1s'};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ContentBlock = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: hsla(0, 0%, 100%, 0.85);
  line-height: 2.8rem;
  display: flex;
`;

const Caption = styled.div`
  font-size: 2rem;
  padding: 2rem;
  width: 85%;
`;

const SmallFBIcon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-right: 1.8rem;
`;

const LoadingAnimation = styled.div`
  opacity: ${(props) => (props.activated ? 1 : 0)};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 80rem 10.4rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  transition: 0.6s all;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -80rem 0;
    }
    100% {
      background-position: 80rem 0;
    }
  }
`;

const loadImageIntoMemory = (imageUrl, setLoaded) => {
  if (!imageUrl) return;
  const img = new Image();
  img.src = imageUrl;
  img.onload = () => setLoaded(true);
};

const LivePost = () => {
  const { data = {} } = useFetch(
    'https://us-central1-tms-f-f-bruce.cloudfunctions.net/function/facebook/most-recent-post',
    [],
  );
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => loadImageIntoMemory(data.full_picture, setImageLoaded), [data.full_picture]);

  return (
    <div>
      <a rel="noopener noreferrer" target="_blank" href={data.permalink_url}>
        <OuterBox>
          <SocialWrapper>
            <LoadingAnimation activated={!imageLoaded} />
            <FBImage src={data.full_picture} activated={imageLoaded} />
            <ContentBlock>
              <Caption>{data.message}</Caption>
              <SmallFBIcon>
                <img src={FBSmallIcon} alt="Facebook icon" width="40" height="40" />
              </SmallFBIcon>
            </ContentBlock>
          </SocialWrapper>
        </OuterBox>
      </a>
    </div>
  );
};

export default LivePost;
