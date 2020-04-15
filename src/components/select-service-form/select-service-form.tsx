import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  List,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import CollapseListItem from '../collapse-list-item/collapse-list-item';
import { ServiceItem, ServicesFormData } from '../../core/types';
import { AppState } from '../../reducers';
import { DeleteForever } from '@material-ui/icons';
import { getServicesCheckedItems } from '../../selectors';
import { bindActionCreators, Dispatch } from 'redux';
import { setNextStep, uncheckAllServices } from '../../actions';
import styles from './select-service-form.module.scss';

const SelectServiceForm: FC<SelectServiceFormStateProps &
  SelectServiceFormDispatchProps> = ({
  services,
  checkedServiceItems,
  uncheckAllServices,
  setNextStep,
}): ReactElement => {
  const countTotalPrice = (): number =>
    checkedServiceItems.reduce((a, b) => {
      return a + b.price;
    }, 0);

  const countTotalDuration = (): number =>
    checkedServiceItems.reduce((a, b) => {
      return a + b.time;
    }, 0);

  return (
    <div className={styles.container}>
      <TextField
        id="outlined-basic"
        placeholder="Search"
        variant="outlined"
        className={styles.searchField}
      />
      <List component="nav" aria-labelledby="nested-list-subheader">
        {services.map(
          (service): ReactElement => (
            <CollapseListItem key={service.id} service={service} />
          )
        )}
      </List>
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
              Ціна: {countTotalPrice()}грн. | Тривалість: {countTotalDuration()}
            </Typography>
          </div>
        }
        action={
          <div className={styles.snackBarActions}>
            <Button
              variant="outlined"
              onClick={uncheckAllServices}
              style={{ marginRight: '10px' }}
            >
              Очистити вибір <DeleteForever />
            </Button>
            <Button color="primary" variant="contained" onClick={setNextStep}>
              Далі
            </Button>
          </div>
        }
      />
    </div>
  );
};

interface SelectServiceFormStateProps {
  services: ServicesFormData[];
  checkedServiceItems: ServiceItem[];
}

interface SelectServiceFormDispatchProps {
  setNextStep: () => void;
  uncheckAllServices: () => void;
}

const mapStateToProps = (state: AppState): SelectServiceFormStateProps => ({
  services: state.form.services,
  checkedServiceItems: getServicesCheckedItems(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch
): SelectServiceFormDispatchProps =>
  bindActionCreators({ setNextStep, uncheckAllServices }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectServiceForm);
