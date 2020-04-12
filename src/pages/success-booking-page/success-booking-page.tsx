import React, { FC, ReactElement } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { AssignmentTurnedIn } from '@material-ui/icons';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import styles from './success-booking-page.module.scss';
import { getSelectedTimeslots } from '../../selectors';
import { Timeslot } from '../../core/types';
import { formatDate } from '../../utils/date-utils';

const SuccessBookingPage: FC<SuccessBookingPageStateProps &
  SuccessBookingPageDispatchProps> = ({
  selectedDate,
  selectedTimeslot,
}): ReactElement => {
  return (
    <div>
      <h2>Success booking</h2>
      <Paper className={styles.messageBody}>
        <AssignmentTurnedIn className={styles.icon} />
        <div className={styles.messageText}>
          <Typography variant="h6" className={styles.success}>
            Запис підтверджено
          </Typography>
          {selectedTimeslot.length ? (
            <Typography variant="subtitle2">
              {formatDate(selectedDate)}, {selectedTimeslot[0].value}
            </Typography>
          ) : null}
        </div>
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
