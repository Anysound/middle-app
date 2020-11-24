import React from 'react';
import {AboutMenu} from './AboutMenu';
import {AboutContent} from './AboutContent';

export const About = () => {
  return (
    <div className="about">
      <AboutMenu/>
      <AboutContent/>
    </div>
  )
}