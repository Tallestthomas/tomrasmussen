import React from 'react';
import HeroStyles from './hero.module.scss';

const Hero = ({ children }) => (
  <div className={HeroStyles.hero}>
    <div className={HeroStyles.content}>
      { children }
    </div>
  </div>
);

export default Hero;
