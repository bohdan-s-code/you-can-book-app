import React, { FC, ReactElement } from 'react';
import { Paper } from '@material-ui/core';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styles from './carousel-slider.module.scss';

const CarouselSlider: FC = (): ReactElement => {
  const adverts = [1, 2];

  return (
    <div>
      <Carousel dots>
        {adverts.map((advert, index) => (
          <Paper key={index} elevation={3} className={styles.papers}>
            {advert}
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
