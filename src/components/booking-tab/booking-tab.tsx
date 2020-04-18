import React, { FC, ReactElement } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Typography,
} from '@material-ui/core';
import * as mockData from '../../core/mock-data';
import { generateMapsLink } from '../../utils/generate-maps-link';
import styles from './booking-tab.module.scss';

const BookingTab: FC = (): ReactElement => {
  return (
    <div className={styles.cards}>
      {mockData.businessData.map((service, index) => (
        <Card key={index} className={styles.card} elevation={3}>
          <CardMedia className={styles.cardMedia} image={service.photo} />
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
              <Typography variant="subtitle1" className={styles.workingHours}>
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
  );
};

export default BookingTab;
