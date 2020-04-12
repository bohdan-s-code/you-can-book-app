import React, { FC, ReactElement } from 'react';
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  AppBar,
  Toolbar,
  Snackbar,
} from '@material-ui/core';
import { ArrowBack, DeleteForever } from '@material-ui/icons';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import SelectServiceForm from '../../components/select-service-form/select-service-form';
import SelectSpecialistForm from '../../components/select-specialist-form/select-specialist-form';
import SelectDateForm from '../../components/select-date-form/select-date-form';
import UserInfoForm from '../../components/user-info-form/user-info-form';
import { AppState } from '../../reducers';
import { getSelectedTimeslots, getServicesCheckedItems } from '../../selectors';
import { ServiceItem, TimeSlots } from '../../core/types';
import {
  setNextStep,
  setPreviousStep,
  uncheckAllServices,
  clearDateSelected,
} from '../../actions';
import styles from './book-form.module.scss';
import { formatDate } from '../../utils/date-utils';

const steps = [
  'Вибір послуги',
  'Вибір спеціаліста',
  'Вибір дати та часу',
  'Підтвердження запису',
];

export const getStepContent = (step: number): string | ReactElement => {
  switch (step) {
    case 0:
      return <SelectServiceForm />;
    case 1:
      return <SelectSpecialistForm />;
    case 2:
      return <SelectDateForm />;
    case 3:
      return <UserInfoForm />;
    default:
      return 'Unknown step';
  }
};

const BookForm: FC<BookFormProps> = ({
  checkedServiceItems,
  selectedTimeslots,
  selectedDate,
  step,
  setNextStep,
  setPreviousStep,
  uncheckAllServices,
  clearDateSelected,
}): ReactElement => {
  const handleNext = () => {
    setNextStep();
  };

  const handleBack = () => {
    setPreviousStep();
  };

  const handleUndoButton = () => {
    uncheckAllServices();
  };

  const countTotalPrice = () => {
    return checkedServiceItems.reduce((a, b) => {
      return a + b.price;
    }, 0);
  };

  const countTotalDuration = () => {
    return checkedServiceItems.reduce((a, b) => {
      return a + b.time;
    }, 0);
  };

  const renderSnackbar = (): null | ReactElement => {
    switch (step) {
      case 0:
        return (
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            classes={{ root: styles.snackBar }}
            open={!!checkedServiceItems.length}
            message={
              <div>
                <Typography variant="h6" className={styles.serviceCount}>
                  Обрана дата і час: {checkedServiceItems.length}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="caption"
                  className={styles.serviceSecondaryCount}
                >
                  Ціна: {countTotalPrice()}грн. | Тривалість:{' '}
                  {countTotalDuration()}
                </Typography>
              </div>
            }
            action={
              <div className={styles.snackBarActions}>
                <Button
                  variant="outlined"
                  onClick={handleUndoButton}
                  style={{ marginRight: '10px' }}
                >
                  Очистити вибір <DeleteForever />
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleNext}
                >
                  Далі
                </Button>
              </div>
            }
          />
        );
      case 2:
        return (
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            classes={{ root: styles.snackBar }}
            open={!!selectedTimeslots.length}
            message={
              <div>
                <Typography variant="h6" className={styles.serviceCount}>
                  Обрана дата:
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="caption"
                  className={styles.serviceSecondaryCount}
                >
                  {formatDate(selectedDate)},{' '}
                  {selectedTimeslots.length ? selectedTimeslots[0].value : ''}
                </Typography>
              </div>
            }
            action={
              <div className={styles.snackBarActions}>
                <Button
                  variant="outlined"
                  onClick={clearDateSelected}
                  style={{ marginRight: '10px' }}
                >
                  Очистити вибір <DeleteForever />
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleNext}
                >
                  Далі
                </Button>
              </div>
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <AppBar position="fixed" classes={{ root: styles.header }}>
        <Toolbar classes={{ root: styles.toolbar }}>
          {step === 0 ? (
            <Button href={'/'} classes={{ root: styles.buttonBack }}>
              <ArrowBack />
            </Button>
          ) : (
            <Button onClick={handleBack} classes={{ root: styles.buttonBack }}>
              <ArrowBack />
            </Button>
          )}
          <Typography
            variant="h6"
            className={styles.title}
            style={{ margin: '0 auto' }}
          >
            Service
          </Typography>
        </Toolbar>
      </AppBar>
      <main
        style={{
          marginBottom: checkedServiceItems.length ? '100px' : 0,
          marginTop: '56px',
        }}
      >
        <Stepper alternativeLabel activeStep={step}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(step)}
      </main>

      {renderSnackbar()}
    </div>
  );
};

interface BookFormStateProps {
  checkedServiceItems: ServiceItem[];
  selectedTimeslots: TimeSlots[];
  selectedDate: Date;
  step: number;
}

interface BookFormDispatchProps {
  setNextStep: () => void;
  setPreviousStep: () => void;
  uncheckAllServices: () => void;
  clearDateSelected: () => void;
}

export interface BookFormProps
  extends BookFormStateProps,
    BookFormDispatchProps {}

const mapStateToProps = (state: AppState): BookFormStateProps => ({
  checkedServiceItems: getServicesCheckedItems(state),
  selectedTimeslots: getSelectedTimeslots(state),
  selectedDate: state.form.selectedDate,
  step: state.stepper.step,
});

const mapDispatchToProps = (dispatch: Dispatch): BookFormDispatchProps =>
  bindActionCreators(
    { setNextStep, setPreviousStep, uncheckAllServices, clearDateSelected },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
