import React from 'react';
import { Link } from 'gatsby';
import { header, headerBrand, headerNav, headerWrapper } from './header.module.scss';

const Header = () => (
  <header className={header}>
    <div className={headerWrapper}>
      <h4 className={headerBrand}><Link to="/">Tom Rasmussen</Link></h4>

      <Link to="/" className={headerNav}>
        Home
      </Link>
    </div>
  </header>
);

export default Header;


