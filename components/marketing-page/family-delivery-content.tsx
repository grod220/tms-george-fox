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

const DeliveryTimes = styled.div`
  width: 100%;
`;

export const FamilyDeliveryContent = () => (
  <Container>
    <Centered>
      <div>
        Need a break? Tired of running, cooking and eating the same dishes? Let The <Highlight i>STOPPE</Highlight> take
        it off your plate and fill it with the best scratch made food made from the freshest ingredients. Order your
        family meal for one day or more. Our food has great shelf life in the fridge and freezer too! We’ll have
        everything you need will deliver it to your office building or you can <Highlight i>"STOPPE"</Highlight> by on
        your way home for your Family Dinner.
      </div>
      <div>
        <Link href="/order/family-dinner-delivery">
          <a>
            <OrderButton>Order Now →</OrderButton>
          </a>
        </Link>
      </div>
      <div>
        <Highlight b i>
          Dinner for Four - $45 + tax:
          <ul>
            <li>Linguine, Rigatoni or Parpadelle with choice of one sauce</li>
            <li>8 meatballs of choice</li>
            <li>Stoppe Salad</li>
            <li>Focaccia Bread</li>
          </ul>
        </Highlight>
        All meals will be delivered on{' '}
        <Highlight b i>
          Wednesday or Thursday at 4pm
        </Highlight>{' '}
        to the designated building and location. Wednesday orders must be placed by Monday 12pm. Thursday orders must be
        placed by Tuesday 12pm.
      </div>
      <div>
        <div>
          <b>Why you’ll love the Family Dinner Delivery Program</b>
        </div>
        Are you ready for a break? Tired of eating the same dishes? We save you your most precious commodity of time and
        money. EVERYTHING made from scratch daily using the freshest ingredients. No preservatives in our food! Order
        your family meal for one day or more. Our food has great shelf life in the fridge and freezer too! Why make
        last-minute shopping trips to the grocery store or restaurants that would cost you so much more money? We’ll
        have everything you need and will deliver it to your office building or you can “ STOPPE” by on your way home
        for your Family Dinner.
      </div>
      <DeliveryTimes>
        <div>Delivery locations & times (all deliveries at 4pm):</div>
        <ul>
          {getBusinessOrderConfig().map((item) => {
            return (
              <li key={item.buildingName}>
                <b>{item.buildingName}</b> - {item.addr}
                <ul>
                  {item.deliveryTimes.map((date) => (
                    <li key={date.toISOString()}>{format(date, 'EEEE, MMM do')}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </DeliveryTimes>
    </Centered>
  </Container>
);