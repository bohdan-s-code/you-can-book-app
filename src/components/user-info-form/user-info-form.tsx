import React, { FC, ReactElement } from 'react';
import { Paper, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setNextStep } from '../../actions';
import styles from './user-info-form.module.scss';
import BookingSummary from '../booking-summary/booking-summary';

const UserInfoForm: FC<UserInfoFormStateProps &
  UserInfoFormDispatchProps> = ({}): ReactElement => {
  const initialValues: UserInfoFormInitialValues = {
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

          <BookingSummary />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            // onClick={setNextStep}
          >
            Записатись
          </Button>
        </Form>
      </Formik>
    </Paper>
  );
};

type UserInfoFormInitialValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

type UserInfoFormStateProps = {};

type UserInfoFormDispatchProps = {
  setNextStep: () => void;
};

const mapStateToProps = (): UserInfoFormStateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): UserInfoFormDispatchProps =>
  bindActionCreators({ setNextStep }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);
