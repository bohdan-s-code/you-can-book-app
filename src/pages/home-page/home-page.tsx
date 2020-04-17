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
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { ImageOutlined } from '@material-ui/icons';
import * as mockData from '../../core/mock-data';
import CarouselSlider from '../../components/carousel-slider/carousel-slider';
import { generateMapsLink } from '../../utils/generate-maps-link';
import styles from './home-page.module.scss';
import barberLogo from '../../assets/barber_logo.jpg';

const HomePage: FC = (): ReactElement => {
  return (
    <div className={styles.container}>
      <AppBar position="fixed" classes={{ root: styles.header }}>
        <Toolbar classes={{ root: styles.toolbar }}>
          <img src={barberLogo} className={styles.logo} alt="logo"/>
          <Typography variant="h6">{mockData.BUSINESS_NAME}</Typography>
        </Toolbar>
      </AppBar>

      <main className={styles.mainContent}>
        <CarouselSlider
          adverts={mockData.adverts}
          dots={true}
          autoPlay={5000}
          animationSpeed={1000}
          infinite={true}
        />

        <section>
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
                      href={generateMapsLink(
                        service.mapParams,
                        service.location
                      )}
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
                    <Link
                      target="_blank"
                      href={service.reviewsLink}
                      className={styles.reviewLink}
                    >
                      {service.numberOfReviews} відгуків
                    </Link>
                  </div>
                </CardContent>
                <Button
                  color="primary"
                  variant="contained"
                  href="/book-form"
                  className={styles.bookButton}
                >
                  Записатись
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
