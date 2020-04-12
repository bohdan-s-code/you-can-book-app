import React, { FC, ReactElement } from 'react';
import { Paper, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import styles from './user-info-form.module.scss';

const UserInfoForm: FC = (): ReactElement => {
  const initialValues: userInfoFormInitialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  };

  return (
    <Paper className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
      >
        <Form className={styles.userInfoForm}>
          <Field
            required
            component={TextField}
            variant="outlined"
            name="firstName"
            type="text"
            label="Ім'я"
            margin="dense"
          />
          <Field
            component={TextField}
            variant="outlined"
            name="lastName"
            type="text"
            label="Прізвище"
            margin="dense"
          />
          <Field
            required
            component={TextField}
            variant="outlined"
            name="phoneNumber"
            type="text"
            label="Мобільний телефон"
            margin="dense"
          />
          <Field
            component={TextField}
            variant="outlined"
            name="email"
            type="email"
            label="Електронна пошта"
            margin="dense"
          />
          <Button type="submit" variant="contained" color="primary">
            Записатись
          </Button>
        </Form>
      </Formik>
    </Paper>
  );
};

type userInfoFormInitialValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export default UserInfoForm;
