import React, { FC, ReactElement } from 'react';
import {  Typography, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import styles from './book-form.module.scss';

const BookForm: FC = (): ReactElement => {
  return (
    <div>
      <header className={styles.header}>
        <section>
        <IconButton classes={{ root: styles.arrowBack }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" className={styles.title}>Service</Typography>
        </section>
      </header>
    </div>
  );
};

export default BookForm;
