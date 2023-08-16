import React from 'react';
import styled from 'styled-components';
import NavItem from '../navigation/nav-item/';
import Link from 'next/link';

const Container = styled.div`
  padding: 5rem 5rem;
  background: #2d2d2d;
  color: #969595;
  display: flex;
  justify-content: center;
`;

const AllText = styled.div`
  display: flex;
  font-size: 2rem;
  flex-wrap: wrap;

  ul {
    list-style: none;
    margin-top: 0;
    padding: 0;
  }

  ul:first-child {
    margin-right: 6rem;
  }

  ul:nth-child(2) {
    margin-right: 6rem;
  }

  span {
    font-size: 1.4rem;
  }
`;

const Footer = () => (
  <Container>
    <AllText>
      <ul>
        <NavItem path="/menu">Menu</NavItem>
        <NavItem path="/event-catering">Catering</NavItem>
        <NavItem path="/about-us">About Us</NavItem>
        <NavItem path="/media">Media</NavItem>
      </ul>
      <ul>
        <li>407-267-6033</li>
        <li>Orlando, Florida</li>
        <br />
        <li>
          <Link href="/order">Order Online</Link>
        </li>
        <Link href="/order/catering">
          <li>Order Catering</li>
        </Link>
      </ul>
      <span>© 2017 The Meatball Stoppe. All rights reserved.</span>
    </AllText>
  </Container>
);

export default Footer;
