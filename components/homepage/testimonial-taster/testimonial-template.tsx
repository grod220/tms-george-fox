import React, { FC } from 'react';
import styled from 'styled-components';
import { media } from '../../../utilities/media';

import Highlight from '../../shared/highlight';

const AlignOnSmallScreens = styled.p`
  ${media.tablet`
    text-align: right;`}

  ${media.phone`
    text-align: right;`};
`;

interface TestimonialProps {
  text: string;
  author: string;
  urlText: string;
  url: string;
  className?: string;
}

const Testimonial: FC<TestimonialProps> = ({ text, author, urlText, url, className }) => {
  return (
    <div className={className}>
      <p>
        <em>{text}</em>
      </p>
      <AlignOnSmallScreens>
        {author},{' '}
        <Highlight>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {urlText}
          </a>
        </Highlight>
      </AlignOnSmallScreens>
    </div>
  );
};

export default Testimonial;
