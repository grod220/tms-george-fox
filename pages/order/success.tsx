import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import ShortHero from '../../components/shared/short-hero';
import FamilyStorePic from '../../components/about-us/family-drone-pic.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  text-align: center;
`;

const Headline = styled.div`
  font-size: 27px;
  font-weight: bold;
`;

export default function Success() {
  return (
    <>
      <Head>
        <title>Order Successful :: The Meatball Stoppe</title>
      </Head>
      <ShortHero image={FamilyStorePic} headline="Order successful" />
      <Container>
        <div>
          <Headline>
            Your order was a success{' '}
            <span role="img" aria-label="thumbs up">
              👍
            </span>
          </Headline>
          <div>
            Check your email for the receipt. If you have questions about your order, feel free to reach out to us
            directly at 407-270-6505.
          </div>
        </div>
      </Container>
    </>
  );
}
