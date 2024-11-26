import React from 'react';
import Image from 'next/image';
import css from './Header.module.css';
import logoImage from '../../../../public/altiment_logo_white.png';

export default function Header() {
  return (
    <div className={`container ${css.headerContainer}`}>
      <nav className={css.headerNav}>
        <a className={css.headerLogo} href="">
          <Image
            src={logoImage}
            alt="Altiment Logo"
            className={css.headerLogoImg}
          />
        </a>
        <ul className={css.headerMenuList}>
          <li className={css.headerMenuItem}>
            <a className={css.headerMenuLink} href="">
              Home
            </a>
          </li>
          <li className={css.headerMenuItem}>
            <a className={css.headerMenuLink} href="">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
