import React, { FC, ReactElement } from 'react';
import { Paper, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import NumberFormat from 'react-number-format';
import { TextField } from 'formik-material-ui';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setNextStep } from '../../actions';
import BookingSummary from '../booking-summary/booking-summary';
import { userInfoSchema } from '../../core/validation-schema';
import styles from './user-info-form.module.scss';

type CustomNumberFormatProps = {
  name: string;
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
};

const CustomNumberFormat = ({
  inputRef,
  onChange,
  ...otherInputProps
}: CustomNumberFormatProps): ReactElement => {
  return (
    <NumberFormat
      {...otherInputProps}
      allowEmptyFormatting
      mask="_"
      format="+38 (###) ### ####"
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: otherInputProps.name,
            value: values.value,
          },
        });
      }}
    />
  );
};

const UserInfoForm: FC<UserInfoFormStateProps & UserInfoFormDispatchProps> = ({
  setNextStep,
}): ReactElement => {
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
        validationSchema={userInfoSchema}
        onSubmit={setNextStep}
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
            InputProps={{
              inputComponent: CustomNumberFormat as any,
            }}
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

          <Button type="submit" variant="contained" color="primary">
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
