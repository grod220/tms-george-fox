import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

interface NavItemProps {
  path: string;
  action?: () => void;
  children: ReactNode
}

const NavItem: FC<NavItemProps> = ({ children, path, action }) => (
  <li>
    <Link href={path}>
      <a onClick={action}>{children}</a>
    </Link>
  </li>
);

export default NavItem;
