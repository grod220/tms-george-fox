import React, { FC } from 'react';
import styled from 'styled-components';
import { media } from '../../../utilities/media';

const RedBox = styled.div`
  background-color: #902e2d;
  color: white;
  padding: 4rem;
  width: 33rem;

  ${media.tablet`
    font-size: 1.8rem;
    padding: 1rem;
    width: inherit;`}

  ${media.phone`
    font-size: 1.8rem;
    padding: 1rem;
    width: inherit;`}
`;

const Top = styled.div`
  margin-bottom: 2rem;
`;

interface TestimonialBoxProps {
  name: string;
  city: string;
  text: string;
}

const TestimonialBox: FC<TestimonialBoxProps> = ({ name, city, text }) => (
  <RedBox>
    <Top>
      {name}
      <br />
      {city}
      <br />
      ★★★★★
    </Top>
    {text}
  </RedBox>
);

export default TestimonialBox;
