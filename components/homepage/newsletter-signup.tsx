import React from 'react';
import styled from 'styled-components';
import NewsletterIcon from './newsletter-icon.svg';

const Container = styled.div`
  padding: 8rem 8rem;
  background: #c57c35;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (max-width: ${770 / 16}em) {
    padding: 5rem 5rem;
  }
`;

const SectionTitle = styled.span`
  font-size: 6rem;
  font-family: 'Dancing Script', cursive;
  margin: 1rem 0;

  @media (max-width: ${770 / 16}em) {
    font-size: 4rem;
  }

  @media (max-width: ${700 / 16}em) {
    margin: 0 0 1rem 0;
  }
`;

const SignupButton = styled.button`
  margin-top: 14px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background: #ffc477 linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
  border-radius: 6px;
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 18px;
  padding: 8px 28px;
  text-decoration: none;
  text-shadow: 0 1px 0 #cc9f52;
  transition: 0.3s;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;

const NewsletterImg = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 8px;

  @media (max-width: ${770 / 16}em) {
    width: 30px;
    height: 30px;
  }
`;

const FORM_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSdyXYgwf2UjDQjQp09JchTeBqYxoNxD8xVH_YdeX4MS4Lu5aQ/viewform?usp=sf_link';

const NewsletterSignup = () => (
  <Container>
    <SectionTitle>
      Join the Famiglia <NewsletterImg src={NewsletterIcon} alt="Newsletter icon" />
    </SectionTitle>
    <div>Stay on top of the latest specials, events, and news from The Meatball Stoppe 💛</div>
    <a href={FORM_LINK} target="_blank" rel="noopener noreferrer">
      <SignupButton>Signup here →</SignupButton>
    </a>
  </Container>
);

export default NewsletterSignup;
