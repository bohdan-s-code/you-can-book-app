import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Divider,
} from '@material-ui/core';
import { formatDate } from '../../utils/date-utils';
import {
  countSelectedServicesTotalPrice,
  countSelectedServicesTotalTime,
} from '../../utils/services-utils';
import { AppState } from '../../reducers';
import {
  getSelectedSpecialist,
  getSelectedTimeslots,
  getServicesCheckedItems,
} from '../../selectors';
import { ServiceItem, Specialists, Timeslot } from '../../core/types';

const BookingSummary: FC<BookingSummaryStateProps &
  BookingSummaryDispatchProps> = ({
  selectedDate,
  selectedTimeslots,
  selectedSpecialist,
  checkedServiceItems,
}): ReactElement => {
  return (
    <List>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Обрана дата:</Typography>
          <Typography>
            {formatDate(selectedDate)}, {selectedTimeslots[0].value}
          </Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <Button variant="outlined">Змінити дату</Button>
        </ListItemSecondaryAction>
      </ListItem>

      <Divider />

      <ListItem>
        <ListItemText>
          <Typography variant="h6">
            Обрано послуг: {checkedServiceItems.length}
          </Typography>
          <Typography>
            Ціна: {countSelectedServicesTotalPrice(checkedServiceItems)}
            грн. | Тривалість:{' '}
            {countSelectedServicesTotalTime(checkedServiceItems)}
          </Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <Button variant="outlined">Змінити послугу</Button>
        </ListItemSecondaryAction>
      </ListItem>

      <Divider />

      <ListItem>
        <ListItemText>
          <Typography variant="h6">Обраний спеціаліст:</Typography>
          <Typography>{selectedSpecialist[0].name}</Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <Button variant="outlined">Змінити спеціаліста</Button>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

type BookingSummaryStateProps = {
  selectedTimeslots: Timeslot[];
  selectedDate: Date;
  checkedServiceItems: ServiceItem[];
  selectedSpecialist: Specialists[];
};

type BookingSummaryDispatchProps = {};

const mapStateToProps = (state: AppState) => ({
  selectedTimeslots: getSelectedTimeslots(state),
  selectedDate: state.form.selectedDate,
  checkedServiceItems: getServicesCheckedItems(state),
  selectedSpecialist: getSelectedSpecialist(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BookingSummary);
