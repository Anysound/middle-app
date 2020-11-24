import React from 'react';
import imgPath from '../images/jason_wood.png';

export const AboutContent = () => {
  return (
    <div className="about__wrapper">
      <div className="about__content">
        <div className="about__img"></div>
        <div className="about__text description">
          <h2 className="description__title">About me</h2>
          <p className="description__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className="description__info description__info--no-mobile">Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className="description__name">Jason Wood</p>
        </div>
      </div>
      <span className="scroll-text scroll-text--gray">keep scrolling, there is still more to come.</span>
    </div>
  )
}