import React, { FC, ReactElement } from 'react';
import { Paper, List, ListItem, Card } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setBookingDate, setTimeslotSelected } from '../../actions';
import styles from './select-date-form.module.scss';
import { AppState } from '../../reducers';
import { TimeSlots } from '../../core/types';

const SelectDateForm: FC<SelectDateFormDispatchProps &
  SelectDateFormStateProps> = ({
  setBookingDate,
  setTimeslotSelected,
  timeSlots,
  date,
}): ReactElement => {
  const handleDatePickerChange = (date: any): void => {
    setBookingDate(new Date(date));
  };

  const handleTimeSlotClick = (id: string): void => {
    setTimeslotSelected(id);
  };

  return (
    <div className={styles.container}>
      <Paper className={styles.picker}>
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
      <Paper className={styles.times}>
        {timeSlots.map(({ id, value, selected }) => (
          <List key={id} className={styles.slot}>
            <Card>
              <ListItem
                button
                onClick={(): void => {
                  handleTimeSlotClick(id);
                }}
                selected={selected}
              >
                {value}
              </ListItem>
            </Card>
          </List>
        ))}
      </Paper>
    </div>
  );
};

type SelectDateFormStateProps = {
  date: Date;
  timeSlots: TimeSlots[];
};

type SelectDateFormDispatchProps = {
  setBookingDate: (date: Date) => void;
  setTimeslotSelected: (id: string) => void;
};

const mapStateToProps = (state: AppState) => ({
  date: state.form.selectedDate,
  timeSlots: state.form.timeSlots,
});

const mapDispatchToProps = (dispatch: Dispatch): SelectDateFormDispatchProps =>
  bindActionCreators({ setBookingDate, setTimeslotSelected }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectDateForm);
