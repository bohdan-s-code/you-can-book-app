import React, { FC, ReactElement } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Result } from 'antd';
import styles from './not-found.module.scss';

const NotFound: FC = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Result status="404" />
      <Typography variant="h3">404</Typography>
      <Typography variant="subtitle1" className={styles.subtitle}>
        Sorry, the page you visited does not exist.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Back to Home Page
      </Button>
    </div>
  );
};

export default NotFound;
