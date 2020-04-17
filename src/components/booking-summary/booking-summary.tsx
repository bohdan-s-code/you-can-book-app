import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
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
import styles from './booking-summary.module.scss';

const BookingSummary: FC<BookingSummaryStateProps &
  BookingSummaryDispatchProps> = ({
  selectedDate,
  selectedTimeslots,
  selectedSpecialist,
  checkedServiceItems,
}): ReactElement => {
  return (
    <List>
      <ListItem className={styles.listItem}>
        <ListItemText>
          <Typography variant="h6" className={styles.textPrimary}>
            Обрана дата:
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
            className={styles.textSecondary}
          >
            {formatDate(selectedDate)}, {selectedTimeslots[0].value}
          </Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <Tooltip title="Змінити дату">
            <IconButton edge="end">
              <Edit />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>

      <Divider />

      <ListItem className={styles.listItem}>
        <ListItemText>
          <Typography variant="h6" className={styles.textPrimary}>
            Обрано послуг: {checkedServiceItems.length}
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
            className={styles.textSecondary}
          >
            Ціна: {countSelectedServicesTotalPrice(checkedServiceItems)}
            грн. | Тривалість:{' '}
            {countSelectedServicesTotalTime(checkedServiceItems)}
          </Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <Tooltip title="Змінити послуги">
            <IconButton edge="end">
              <Edit />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>

      <Divider />

      <ListItem className={styles.listItem}>
        <ListItemText>
          <Typography variant="h6" className={styles.textPrimary}>
            Обраний спеціаліст:
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
            className={styles.textSecondary}
          >
            {selectedSpecialist[0].name}
          </Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <Tooltip title="Змінити спеціаліста">
            <IconButton edge="end">
              <Edit />
            </IconButton>
          </Tooltip>
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
