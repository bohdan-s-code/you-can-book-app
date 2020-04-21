import React, { FC, ReactElement, useState } from 'react';
import { Typography, AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import * as mockData from '../../core/mock-data';
import BookingTab from '../../components/booking-tab/booking-tab';
import styles from './home-page.module.scss';
import barberLogo from '../../assets/barber_logo.jpg';
import AboutUsTab from '../../components/about-us-tab/about-us-tab';
import ContactsTab from '../../components/contacts-tab/contacts-tab';

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
        return <BookingTab />;
      case 1:
        return <AboutUsTab />;
      case 2:
        return <ContactsTab />;
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
          <Tab label="Онлайн-запис" />
          <Tab label="Про нас" />
          <Tab label="Контакти" />
        </Tabs>
      </AppBar>

      <main className={styles.mainContent}>{renderTabs()}</main>
    </div>
  );
};

export default HomePage;
