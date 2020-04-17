import React, { FC, ReactElement } from 'react';
import { Paper, Typography, Button, Snackbar } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { DatePicker } from '@material-ui/pickers';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  clearDateSelected,
  setBookingDate,
  setNextStep,
  setTimeslotSelected,
} from '../../actions';
import { AppState } from '../../reducers';
import { Timeslot } from '../../core/types';
import { formatDate } from '../../utils/date-utils';
import { getSelectedTimeslots } from '../../selectors';
import styles from './select-date-form.module.scss';

const SelectDateForm: FC<SelectDateFormDispatchProps &
  SelectDateFormStateProps> = ({
  setBookingDate,
  setTimeslotSelected,
  timeSlots,
  date,
  selectedTimeslots,
  selectedDate,
  clearDateSelected,
  setNextStep,
}): ReactElement => {
  const handleDatePickerChange = (date: any): void => {
    setBookingDate(new Date(date));
  };

  return (
    <div className={styles.container}>
      <Paper className={styles.picker} square>
        <DatePicker
          autoOk
          orientation="portrait"
          variant="static"
          openTo="date"
          value={date}
          onChange={handleDatePickerChange}
          disablePast={true}
          PopoverProps={{
            className: styles.picker,
          }}
        />
      </Paper>
      <Paper className={styles.times} square>
        <Typography variant="h6" className={styles.timesTitle}>
          Оберіть час візиту:
        </Typography>
        <div className={styles.timeSlots}>
          {timeSlots.map(({ id, value, selected }) => (
            <Button
              key={id}
              color={selected ? 'primary' : 'default'}
              variant={selected ? 'contained' : 'outlined'}
              classes={{ root: styles.item }}
              onClick={(): void => {
                setTimeslotSelected(id);
              }}
            >
              {value}
            </Button>
          ))}
        </div>
      </Paper>
      {selectedTimeslots.length ? (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          classes={{ root: styles.snackBar }}
          open={true}
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
            <div>
              <Button
                variant="outlined"
                onClick={clearDateSelected}
                classes={{ root: styles.clearDate }}
              >
                Очистити вибір <DeleteForever />
              </Button>
              <Button color="primary" variant="contained" onClick={setNextStep}>
                Далі
              </Button>
            </div>
          }
        />
      ) : (
        <Snackbar open={true} classes={{ root: styles.snackBarAlter }}>
          <Alert severity="info" classes={{ root: styles.alert }}>
            Оберіть дату та час візиту!
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

type SelectDateFormStateProps = {
  date: Date;
  timeSlots: Timeslot[];
  selectedTimeslots: Timeslot[];
  selectedDate: Date;
};

type SelectDateFormDispatchProps = {
  setBookingDate: (date: Date) => void;
  setTimeslotSelected: (id: string) => void;
  clearDateSelected: () => void;
  setNextStep: () => void;
};

const mapStateToProps = (state: AppState): SelectDateFormStateProps => ({
  date: state.form.selectedDate,
  timeSlots: state.form.timeSlots,
  selectedTimeslots: getSelectedTimeslots(state),
  selectedDate: state.form.selectedDate,
});

const mapDispatchToProps = (dispatch: Dispatch): SelectDateFormDispatchProps =>
  bindActionCreators(
    { setNextStep, setBookingDate, setTimeslotSelected, clearDateSelected },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SelectDateForm);
