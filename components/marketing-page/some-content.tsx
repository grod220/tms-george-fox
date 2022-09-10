import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/media';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;

  ${media.phone`
    width: 90vw;`};
`;

export const SomeContent = () => (
  <Container>
    <div>
      <Link href="/order/building">
        <a>
          <button>this is cool</button>
        </a>
      </Link>
    </div>
  </Container>
);
