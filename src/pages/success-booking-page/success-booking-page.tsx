import React, { FC, ReactElement } from 'react';
import { Button, ButtonGroup, Paper, Typography } from '@material-ui/core';
import { AssignmentTurnedIn } from '@material-ui/icons';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import { getSelectedTimeslots } from '../../selectors';
import { Timeslot } from '../../core/types';
import { formatDate } from '../../utils/date-utils';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import styles from './success-booking-page.module.scss';

const SuccessBookingPage: FC<SuccessBookingPageStateProps &
  SuccessBookingPageDispatchProps> = ({
  selectedDate,
  selectedTimeslot,
}): ReactElement => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.container}>
      <Paper className={styles.messageBody}>
        <AssignmentTurnedIn className={styles.icon} />
        <div className={styles.messageText}>
          <Typography variant="h6" className={styles.success}>
            Запис підтверджено
          </Typography>
          {selectedTimeslot.length ? (
            <div className={styles.secondaryTextContainer}>
              <Typography
                component="span"
                variant="subtitle2"
                color="textSecondary"
                className={styles.secondary}
              >
                Чекаємо вас:
              </Typography>
              <Typography component="span" className={styles.important}>
                {formatDate(selectedDate)} о {selectedTimeslot[0].value}
              </Typography>
            </div>
          ) : null}
        </div>

        <ButtonGroup
          orientation={width < 600 ? 'vertical' : 'horizontal'}
          classes={{ root: styles.buttonGroup }}
        >
          <Button
            href="/book-form"
            variant="contained"
            color="primary"
            style={{
              marginRight: width < 600 ? 0 : '15px',
              marginBottom: width < 600 ? '10px' : 0,
            }}
          >
            Забронювати новий візит
          </Button>
          <Button href="/" variant="contained">
            На головну сторінку
          </Button>
        </ButtonGroup>
      </Paper>
    </div>
  );
};

type SuccessBookingPageStateProps = {
  selectedDate: Date;
  selectedTimeslot: Timeslot[];
};

type SuccessBookingPageDispatchProps = {};

const mapStateToProps = (state: AppState): SuccessBookingPageStateProps => ({
  selectedDate: state.form.selectedDate,
  selectedTimeslot: getSelectedTimeslots(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch
): SuccessBookingPageDispatchProps => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SuccessBookingPage);
