import React from 'react';
import HeroStyles from './hero.module.scss';

const Hero = ({ children }) => (
  <div className={HeroStyles.hero}>
    { children }
  </div>
);

export default Hero;
