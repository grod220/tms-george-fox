import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NavItem = ({ children, path, action }) => (
  <li>
    <Link href={path} onClick={action}>
      {children}
    </Link>
  </li>
);

NavItem.propTypes = {
  path: PropTypes.string,
  action: PropTypes.func,
};

export default NavItem;
