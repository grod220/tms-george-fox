import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/media';
import Link from 'next/link';
import { getBusinessOrderConfig } from '../order-app/checkout/fulfillment/business-fulfillment/config';
import { format } from 'date-fns';

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac scelerisque leo. Praesent sit amet odio in
        lorem tempus porta non ultrices ligula. Cras purus elit, bibendum nec justo tempus, laoreet maximus est. In
        vitae pretium sapien. Donec et diam congue, dictum dolor quis, sollicitudin diam. Aenean ut sapien lectus. In in
        finibus justo. Ut eget mauris id odio mattis congue. Nunc vehicula luctus metus ut ultricies. Quisque tincidunt
        purus porta erat sollicitudin viverra fermentum sit amet magna. Donec ex erat, efficitur sit amet massa sit
        amet, posuere ultricies ante. Nunc ac leo vitae orci egestas consequat sit amet non ipsum. Pellentesque egestas
        massa vitae scelerisque vestibulum.
      </div>
      <div>
        <Link href="/order/family-delivery-program">
          <a>
            <OrderButton>Order Now →</OrderButton>
          </a>
        </Link>
      </div>
      <DeliveryTimes>
        <div>Delivery locations & times (all deliveries at 4pm):</div>
        <ul>
          {getBusinessOrderConfig().map((item) => {
            return (
              <li>
                <b>{item.buildingName}</b> - {item.addr}
                <ul>
                  {item.deliveryTimes.map((date) => (
                    <li>{format(date, 'EEEE, MMM do')}</li>
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
