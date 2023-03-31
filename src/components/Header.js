import React from 'react';
import headerLogo from '../images/logo-pts.png';

function Header() {
  return (
    <header className="header">
      <img
        src={headerLogo}
        alt="логотип проекта"
        className="header__logo"
      />
    </header>
  )
}
export default Header