import React, { FC, ReactElement } from 'react';
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import SelectServiceForm from '../../components/select-service-form/select-service-form';
import SelectSpecialistForm from '../../components/select-specialist-form/select-specialist-form';
import SelectDateForm from '../../components/select-date-form/select-date-form';
import UserInfoForm from '../../components/user-info-form/user-info-form';
import { AppState } from '../../reducers';
import { setPreviousStep } from '../../actions';
import SuccessBookingPage from '../success-booking-page/success-booking-page';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { STEPPER_STEPS } from '../../core/mock-data';
import { StepperSteps } from '../../core/enums';
import styles from './book-form.module.scss';

const BookForm: FC<BookFormProps> = ({
  step,
  setPreviousStep,
}): ReactElement => {
  const { width } = useWindowDimensions();

  const getStepContent = (): null | ReactElement => {
    switch (step) {
      case StepperSteps.Services:
        return <SelectServiceForm />;
      case StepperSteps.Specialists:
        return <SelectSpecialistForm />;
      case StepperSteps.DateForm:
        return <SelectDateForm />;
      case StepperSteps.UserInfo:
        return <UserInfoForm />;
      case StepperSteps.SuccessBooking:
        return <SuccessBookingPage />;
      default:
        return null;
    }
  };

  const renderHeaderToolbarActions = (): ReactElement | null => {
    switch (step) {
      case StepperSteps.Services:
        return (
          <Button href="/" classes={{ root: styles.buttonBack }}>
            <ArrowBack />
          </Button>
        );
      case StepperSteps.SuccessBooking:
        return null;
      default:
        return (
          <Button
            onClick={setPreviousStep}
            classes={{ root: styles.buttonBack }}
          >
            <ArrowBack />
          </Button>
        );
    }
  };

  return (
    <div className={styles.container}>
      <AppBar position="fixed" classes={{ root: styles.header }}>
        <Toolbar classes={{ root: styles.toolbar }}>
          {renderHeaderToolbarActions()}
          <Typography variant="h6" className={styles.title}>
            Service
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={styles.main}>
        {step < 4 ? (
          <Stepper alternativeLabel activeStep={step}>
            {STEPPER_STEPS.map(label => (
              <Step key={label}>
                <StepLabel>{width > 600 ? label : null}</StepLabel>
              </Step>
            ))}
          </Stepper>
        ) : null}
        {getStepContent()}
      </main>
    </div>
  );
};

interface BookFormStateProps {
  step: number;
}

interface BookFormDispatchProps {
  setPreviousStep: () => void;
}

export interface BookFormProps
  extends BookFormStateProps,
    BookFormDispatchProps {}

const mapStateToProps = (state: AppState): BookFormStateProps => ({
  step: state.stepper.step,
});

const mapDispatchToProps = (dispatch: Dispatch): BookFormDispatchProps =>
  bindActionCreators({ setPreviousStep }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
