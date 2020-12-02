import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Bar = styled.div`
  background-color: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ text }) => text};
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
`;

const Highlight = styled.span`
  text-decoration: underline;
`;

const CateringHighlightPromos = () => {
  return (
    <Container>
      <Bar background="#f7d68c" text="#d79c1b">
        <div>
          Need to scale up? We cater big parties and large-scale events.{' '}
          <Highlight>
            <Link href="/event-catering">
              <a>Learn more</a>
            </Link>
          </Highlight>
        </div>
      </Bar>
      <Bar background="#f0ad5b" text="white">
        <div>
          Honor us by joining our customer loyalty program,{' '}
          <span role="img" aria-label="phone">
            📞
          </span>{' '}
          call for details.
        </div>
      </Bar>
    </Container>
  );
};
export default CateringHighlightPromos;
