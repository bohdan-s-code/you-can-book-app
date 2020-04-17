import React, { FC, ReactElement, useState } from 'react';
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
  Tabs,
  Tab,
} from '@material-ui/core';
import * as mockData from '../../core/mock-data';
import { generateMapsLink } from '../../utils/generate-maps-link';
import styles from './home-page.module.scss';
import barberLogo from '../../assets/barber_logo.jpg';
import placeOne from '../../assets/place1.jpg';
import placeTwo from '../../assets/place2.jpg';

const HomePage: FC = (): ReactElement => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabsChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    setTabValue(newValue);
  };

  const renderTabs = (): ReactElement | null => {
    switch (tabValue) {
      case 0:
        return (
          <main className={styles.mainContent}>
            <section>
              <Typography variant="h6">Оберіть заклад:</Typography>
              <Divider style={{ marginBottom: 10 }} />
              <div className={styles.cards}>
                {mockData.businessData.map((service, index) => (
                  <Card key={index} className={styles.card} elevation={3}>
                    <CardMedia
                      className={styles.cardMedia}
                      image={index === 0 ? placeOne : placeTwo}
                    />
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
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <AppBar position="fixed" classes={{ root: styles.header }}>
        <Toolbar classes={{ root: styles.toolbar }}>
          <img src={barberLogo} className={styles.logo} alt="logo" />
          <Typography variant="h6">{mockData.BUSINESS_NAME}</Typography>
        </Toolbar>
        <Tabs centered value={tabValue} onChange={handleTabsChange}>
          <Tab label="Запис" />
          <Tab label="Контакти" />
        </Tabs>
      </AppBar>

      {renderTabs()}
    </div>
  );
};

export default HomePage;
