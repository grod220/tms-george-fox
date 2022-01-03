import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/media';
import Link from 'next/link';
import { isClosedForHoliday } from './modal-overlay';

const RedBar = styled.div`
  background: #902e2d;
  display: flex;
  justify-content: center;
  ${media.phone`
      height: 17rem;`};
`;

const Container = styled.div`
  width: 80vw;
  display: flex;
  a {
    width: 25%;
    display: flex;
    ${media.tablet`
      width: 100%;
      margin-left: 3rem;
      max-width: 33rem;`};
    ${media.phone`
      width: 100%;`};
  }
  a + a {
    ${media.tablet`
      margin-right: 3rem;`};
  }
  ${media.tablet`
    width: 100%;
    justify-content: space-evenly;`};
  ${media.phone`
    flex-direction: column;
    width: 91vw;
    justify-content: space-evenly;`};
`;

const OrderButton = styled.button`
  font-family: inherit;
  margin: 2rem 1.5rem;
  padding: 0.6rem 1.2rem;
  flex: 1;
  cursor: pointer;
  border: 0.2rem solid;
  outline: 0.3rem solid;
  font-size: 1.6vw;
  text-transform: uppercase;
  transition: transform 0.6s;

  &:hover {
    transform: scale(1.03);
  }

  ${media.tablet`
    font-size: 2.4rem;
    margin: 2rem 0`};
  ${media.phone`
    font-size: 2.4rem;
    margin: 0;`};
`;

const WhiteButton = styled(OrderButton)`
  background: #fff;
  color: #902e2d;
  border-color: #902e2d;
  outline-color: #fff;
`;

const RedButton = styled(OrderButton)`
  background: #902e2d;
  color: #fff;
  border-color: #fff;
  outline-color: #8b1a19;
  box-shadow: -0.5rem 0.1rem 1rem 0 rgba(0, 0, 0, 0.3);
`;

const Announcement = styled.div`
  width: 50%;
  text-align: center;
  margin: 0;
  position: relative;
  font-style: italic;
  color: white;

  ${media.phone`
    width: 100%;
  `};
`;

const MainText = styled.h3`
  font-size: 31px;
  font-weight: normal;
  margin-top: 15px;
  margin-bottom: 40px;
`;

const MiniSubtext = styled.h4`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 19px;
  font-size: 15px;
  font-weight: normal;
  margin: 0;
`;

const OrderBar = () => (
  <RedBar>
    <Container>
      {isClosedForHoliday() ? (
        <Announcement>
          <MainText>⚠️ Closed for Holidays 🎉️</MainText>
          <MiniSubtext>We'll be back soon!</MiniSubtext>
        </Announcement>
      ) : (
        <>
          <Link href="/order">
            <a>
              <WhiteButton>Order Online</WhiteButton>
            </a>
          </Link>
          <Link href="/order/catering">
            <a>
              <RedButton>Order Catering</RedButton>
            </a>
          </Link>
        </>
      )}
    </Container>
  </RedBar>
);

export default OrderBar;
