import React from 'react';

export const AboutMenu = () => {
  return (
    <nav className="nav nav--about">
      <ul className="menu menu--about">
        <li><a className="menu__link" href="#">Home</a></li>
        <li><a className="menu__link" href="#">About me</a></li>
        <li><a className="menu__link" href="#">Portfolio</a></li>
        <li><a className="menu__link" href="#">Contact</a></li>
      </ul>
    </nav>
  )
}