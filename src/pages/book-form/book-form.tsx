import React, { FC, ReactElement, useState } from 'react';
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
import SelectServiceForm from '../../components/select-service-form/select-service-form';
import SelectSpecialistForm from '../../components/select-specialist-form/select-specialist-form';
import { specialists } from '../../core/mock-data';
import styles from './book-form.module.scss';
import { AppState } from '../../reducers';
import { getServicesCheckedItems } from '../../selectors';
import { ServiceItem } from '../../core/types';

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
      return <SelectSpecialistForm data={specialists} />;
    case 2:
      return 'Step 3: This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
};

const BookForm: FC<BookFormProps> = ({ checkedServiceItems }): ReactElement => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{ bottom: 'auto', top: 0, background: 'white' }}
      >
        <Toolbar>
          {activeStep === 0 ? (
            <Button href={'/'}>
              <ArrowBack />
            </Button>
          ) : (
            <Button onClick={handleBack}>Back</Button>
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
      <main style={{ marginBottom: '56px', marginTop: '56px' }}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
      </main>

      <AppBar
        position="fixed"
        style={{ top: 'auto', bottom: 0, background: 'white' }}
      >
        <Toolbar>
          <Typography
            variant="subtitle1"
            style={{ margin: '0 auto', color: 'black' }}
          >
            Обрано послуг: {checkedServiceItems.length}
          </Typography>
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Place order' : 'Продовжити'}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

interface BookFormStateProps {
  checkedServiceItems: ServiceItem[];
}

interface BookFormDispatchProps {}

export interface BookFormProps
  extends BookFormStateProps,
    BookFormDispatchProps {}

const mapStateToProps = (state: AppState): BookFormStateProps => ({
  checkedServiceItems: getServicesCheckedItems(state),
});

const mapDispatchToProps = (): BookFormDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
