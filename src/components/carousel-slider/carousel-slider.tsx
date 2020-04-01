import React, { FC, ReactElement } from 'react';
import { Paper } from '@material-ui/core';
import Carousel, { CarouselProps } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styles from './carousel-slider.module.scss';

const CarouselSlider: FC<CarouselSliderProps> = ({
  adverts,
  ...carouselProps
}): ReactElement => {
  return (
    <div>
      <Carousel {...carouselProps}>
        {adverts.map((advert, index) => (
          <Paper key={index} elevation={3} className={styles.papers}>
            {advert}
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

interface CarouselSliderProps extends CarouselProps {
  adverts: string[];
}

export default CarouselSlider;
