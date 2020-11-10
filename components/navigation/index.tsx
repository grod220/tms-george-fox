import React, { useState } from 'react';
import Link from 'next/link';

import NavItem from './nav-item';
import { NavBar, NavLinks, DismissX, Logo, MobileMoreDetails, MobileNavBar, SubBar } from './navigation-styles';
import TmsLogo from './images/logo.svg';
import HamburgerIcon from './images/hamburger.svg';
import MiniLogo from './images/minilogo.svg';

export default function Navigation() {
  const [mobileMenu, setmMobileMenu] = useState(false);

  function showMobileMenu() {
    setmMobileMenu(!mobileMenu);
  }

  function hideMobileMenu() {
    setmMobileMenu(false);
  }

  return (
    <div>
      <NavBar mobileMenuShown={mobileMenu}>
        <NavLinks>
          <DismissX onClick={hideMobileMenu}>
            <span>✕</span>
          </DismissX>
          <NavItem path="/menu" action={hideMobileMenu}>
            Menu
          </NavItem>
          <NavItem path="/about-us" action={hideMobileMenu}>
            About Us
          </NavItem>
        </NavLinks>
        <Logo>
          <Link href="/">
            <img src={TmsLogo} alt="The Meatball Stoppe logo" />
          </Link>
        </Logo>
        <NavLinks>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.ladifferenzabakery.com">
              Bakery
            </a>
          </li>
          <NavItem path="/media" action={hideMobileMenu}>
            Media
          </NavItem>
          <MobileMoreDetails />
        </NavLinks>
      </NavBar>
      <MobileNavBar>
        <span
          onClick={showMobileMenu}
          onKeyDown={(e) => e.keyCode === 13 && showMobileMenu()}
          role="button"
          tabIndex={0}
        >
          <img src={HamburgerIcon} alt="Menu icon" />
        </span>
        <Link href="/">
          <img src={MiniLogo} alt="The Meatball Stoppe logo" />
        </Link>
        <div />
      </MobileNavBar>
      <SubBar />
    </div>
  );
}
