import React, { ChangeEvent, FC, ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  InputAdornment,
  List,
  Snackbar,
  TextField,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Clear, Search } from '@material-ui/icons';
import CollapseListItem from '../collapse-list-item/collapse-list-item';
import { ServiceItem, ServicesFormData } from '../../core/types';
import { AppState } from '../../reducers';
import { DeleteForever } from '@material-ui/icons';
import { getServicesCheckedItems } from '../../selectors';
import { bindActionCreators, Dispatch } from 'redux';
import { setNextStep, uncheckAllServices } from '../../actions';
import styles from './select-service-form.module.scss';
import {
  countSelectedServicesTotalPrice,
  countSelectedServicesTotalTime,
  servicesSearch,
} from '../../utils/services-utils';

const SelectServiceForm: FC<SelectServiceFormStateProps &
  SelectServiceFormDispatchProps> = ({
  services,
  checkedServiceItems,
  uncheckAllServices,
  setNextStep,
}): ReactElement => {
  const [searchValue, setSearchValue] = useState('');

  const countTotalPrice = (): number =>
    countSelectedServicesTotalPrice(checkedServiceItems);

  const countTotalDuration = (): number =>
    countSelectedServicesTotalTime(checkedServiceItems);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const clearSearch = (): void => {
    setSearchValue('');
  };

  return (
    <div className={styles.container}>
      <TextField
        value={searchValue}
        id="outlined-basic"
        placeholder="Search"
        variant="outlined"
        className={styles.searchField}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {searchValue ? (
                <IconButton edge="end" onClick={clearSearch}>
                  <Clear />
                </IconButton>
              ) : (
                <Search />
              )}
            </InputAdornment>
          ),
        }}
      />
      <List component="nav" aria-labelledby="nested-list-subheader">
        {servicesSearch(services, searchValue).map(
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
              Обрано пос: {checkedServiceItems.length}
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
          <div>
            <Button
              variant="outlined"
              onClick={uncheckAllServices}
              classes={{ root: styles.snackBarActionClear }}
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
