import React from 'react';
import { Link } from 'gatsby';
import { header, headerBrand, headerNav } from './header.module.scss';

const Header = () => (
  <header className={header}>
    <h4 className={headerBrand}><Link to="/">Tom Rasmussen</Link></h4>

    <Link to="/" className={headerNav}>
      Home
    </Link>
  </header>
);

export default Header;


