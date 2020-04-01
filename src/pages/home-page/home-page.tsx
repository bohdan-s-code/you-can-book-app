import React, { FC, ReactElement } from 'react';
import {
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  Link,
} from '@material-ui/core';
import { WallpaperOutlined, ImageOutlined } from '@material-ui/icons';
import * as mockData from '../../core/mock-data';
import CarouselSlider from '../../components/carousel-slider/carousel-slider';
import styles from './home-page.module.scss';
import { generateMapsLink } from '../../utils/generate-maps-link';

const HomePage: FC = (): ReactElement => {
  return (
    <div>
      <header className={styles.header}>
        <WallpaperOutlined className={styles.logo} />
        <h2>{mockData.BUSINESS_NAME}</h2>
      </header>

      <CarouselSlider
        adverts={mockData.adverts}
        dots={true}
        autoPlay={5000}
        animationSpeed={1000}
        infinite={true}
      />

      <main>
        <Typography variant="h6">Оберіть заклад:</Typography>
        <Divider style={{ marginBottom: 10 }} />
        <div className={styles.cards}>
          {mockData.businessData.map((service, index) => (
            <Card key={index} className={styles.card} elevation={3}>
              <CardMedia classes={{ root: styles.cardMedia }}>
                <ImageOutlined style={{ fontSize: 200 }} />
              </CardMedia>
              <CardContent classes={{ root: styles.cardContent }}>
                <div className={styles.contentText}>
                  <Typography variant="h6">{service.name}</Typography>
                  <Link
                    className={styles.link}
                    href={generateMapsLink(service.mapParams, service.location)}
                    target="_blank"
                  >
                    {service.location}
                  </Link>
                  <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
                    {service.workHours}
                  </Typography>
                </div>
                <div className={styles.rating}>
                  <Chip
                    label={service.rating}
                    classes={{ root: styles.ratingChip }}
                  />
                  <Typography variant="subtitle2">
                    {service.numberOfReviews} відгуків
                  </Typography>
                </div>
              </CardContent>
              <Button variant="contained" href={'/book-form'}>Записатись</Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
