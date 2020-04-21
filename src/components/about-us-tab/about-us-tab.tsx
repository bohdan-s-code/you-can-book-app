import React, { FC, ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import { aboutUsContent, aboutUsText } from '../../core/mock-data';
import CarouselSlider from '../carousel-slider/carousel-slider';
import styles from './about-us-tab.module.scss';

const AboutUsTab: FC = (): ReactElement => {
  return (
    <div className={styles.container}>
      <CarouselSlider
        dots
        infinite
        autoPlay={5000}
        animationSpeed={1000}
        adverts={aboutUsContent.photos}
      />
      <Typography component="span" variant="h6" className={styles.title}>
        {aboutUsText.title}
      </Typography>{' '}
      - <Typography component="span">{aboutUsText.content}</Typography>
    </div>
  );
};

export default AboutUsTab;
