import React, { FC, ReactElement } from 'react';
import { Link, Typography, Paper, Button } from '@material-ui/core';
import {
  LocationOn,
  Schedule,
  LocalPhone,
  Facebook,
  Instagram,
  YouTube,
} from '@material-ui/icons';
import * as mockData from '../../core/mock-data';
import { SocialNetworks } from '../../core/enums';
import { generateMapsLink } from '../../utils/generate-maps-link';
import styles from './contacts-tab.module.scss';

const ContactsTab: FC = (): ReactElement => {
  const renderSocialNetworks = (key: SocialNetworks): ReactElement | null => {
    switch (key) {
      case SocialNetworks.Facebook:
        return <Facebook fontSize="large" />;
      case SocialNetworks.Instagram:
        return <Instagram fontSize="large" />;
      case SocialNetworks.Youtube:
        return <YouTube fontSize="large" />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {mockData.contactInfo.map(contact => (
        <Paper key={contact.id} className={styles.contactSection}>
          <div className={styles.location}>
            <LocationOn />
            <Link
              href={generateMapsLink(
                contact.location.mapParams,
                contact.location.value
              )}
              className={styles.text}
              target="_blank"
            >
              {contact.location.value}
            </Link>
          </div>
          <div className={styles.location}>
            <Schedule />
            <Typography className={styles.text}>
              Щодня з {contact.time}
            </Typography>
          </div>
          <div className={styles.location}>
            <LocalPhone />
            <Link
              href={`tel:${contact.phone.value}`}
              className={styles.text}
              target="_blank"
            >
              {contact.phone.label}
            </Link>
          </div>
        </Paper>
      ))}

      <footer className={styles.footer}>
        {mockData.SOCIAL_NETWORKS.map(
          ({ key, link }, index): ReactElement => (
            <Button key={index} target="_blank" href={link}>
              {renderSocialNetworks(key)}
            </Button>
          )
        )}
      </footer>
    </div>
  );
};

export default ContactsTab;
