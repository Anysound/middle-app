import React from 'react';
import HeaderMenu from './HeaderMenu';
import {Link, animateScroll as scroll} from 'react-scroll';

export const Header = () => {
  scroll.scrollToTop();
  return (
    <div className="header">
      <HeaderMenu/>
      <Link 
        to="about" 
        className="scroll-text"
        smooth={true}
        duration={500}>scroll down to see more</Link>
    </div>
  )
}