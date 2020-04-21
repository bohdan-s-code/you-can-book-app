import React, { FC, ReactElement } from 'react';
import { Paper, Button } from '@material-ui/core';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import NumberFormat from 'react-number-format';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setNextStep, setUserInfoValues } from '../../actions';
import BookingSummary from '../booking-summary/booking-summary';
import { userInfoSchema } from '../../core/validation-schema';
import { UserInfoFormValues } from '../../core/types';
import { AppState } from '../../reducers';
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
  userInfo,
  setUserInfoValues,
}): ReactElement => {
  const handleSubmit = (
    values: UserInfoFormValues,
    formikHelpers: FormikHelpers<any>
  ): void => {
    setUserInfoValues(values);
    setNextStep();
    formikHelpers.setSubmitting(false);
  };

  return (
    <Paper className={styles.container}>
      <Formik
        initialValues={userInfo}
        validationSchema={userInfoSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.userInfoForm}>
          <Field
            component={TextField}
            variant="outlined"
            name="name"
            type="text"
            label="Ім'я"
            margin="dense"
          />
          <Field
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
            type="checkbox"
            component={CheckboxWithLabel}
            name="callBack"
            Label={{
              label: 'Нагадайте дзвінком за день до зустрічі',
              classes: { root: styles.checkbox },
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
          <Field
            multiline
            rows={4}
            component={TextField}
            variant="outlined"
            name="comment"
            type="text"
            label="Додаткові коментарі"
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

type UserInfoFormStateProps = {
  userInfo: UserInfoFormValues;
};

type UserInfoFormDispatchProps = {
  setNextStep: () => void;
  setUserInfoValues: (formValues: UserInfoFormValues) => void;
};

const mapStateToProps = (state: AppState): UserInfoFormStateProps => ({
  userInfo: state.form.userInfo,
});

const mapDispatchToProps = (dispatch: Dispatch): UserInfoFormDispatchProps =>
  bindActionCreators({ setNextStep, setUserInfoValues }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);
