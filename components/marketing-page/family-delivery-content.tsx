import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/media';
import Link from 'next/link';
import { getBusinessOrderConfig } from '../order-app/checkout/fulfillment/business-fulfillment/config';
import { format } from 'date-fns';
import Highlight from '../shared/highlight';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`;

const Centered = styled.div`
  width: 78vw;
  ${media.tablet`
    width: 94vw;`}
  ${media.phone`
    width: 94vw;`};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const OrderButton = styled.button`
  background-color: #3d94f6;
  border-radius: 28px;
  border: 1px solid #337fed;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 21px;
  padding: 13px 45px;
  text-decoration: none;
  text-shadow: 0 1px 0 #1570cd;

  &:hover {
    background-color: #1e62d0;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

const Width100 = styled.div`
  width: 100%;
`;

export const FamilyDeliveryContent = () => (
  <Container>
    <Centered>
      <div>
        Need a break? Tired of running, cooking and eating the same dishes? Why make costly last-minute shopping trips
        to the grocery store? We save your most precious commodity of time and money. Let The STOPPE take this off your
        plate and fill it with the best scratch made food prepared with the freshest ingredients. No preservatives in
        our food!
      </div>
      <div>
        Order your family meal for one day or more, Individual or Date Night ($30 minimum order). Our food has great
        shelf life in the fridge and freezer too! We have everything you need and will deliver to your office building
        or you can “ STOPPE” by on your way home for your Family Dinner.
      </div>
      <div>
        <Link href="/order/dinner-delivery-program">
          <a>
            <OrderButton>Order Now →</OrderButton>
          </a>
        </Link>
      </div>

      <Width100>
        <Highlight b i>
          Dinner for Four - $45 + tax:
          <ul>
            <li>8 meatballs of choice</li>
            <li>Linguine, Rigatoni or Parpadelle with choice of one sauce</li>
            <li>Stoppe Salad</li>
            <li>Focaccia Bread</li>
          </ul>
        </Highlight>
      </Width100>

      <Width100>
        <div>Delivery locations & times:</div>
        <ul>
          {getBusinessOrderConfig().map((item) => {
            return (
              <li key={item.buildingName}>
                <b>{item.buildingName}</b> - {item.addr}
                <ul>
                  {item.deliveryTimes.map((date) => (
                    <li key={date.toISOString()}>{format(date, 'EEEE, MMM do @ h:mm a')}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Width100>
    </Centered>
  </Container>
);
