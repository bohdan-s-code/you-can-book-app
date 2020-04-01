import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { List, TextField } from '@material-ui/core';
import CollapseListItem from '../collapse-list-item/collapse-list-item';
import { ServicesFormData } from '../../core/types';
import styles from '../../pages/book-form/book-form.module.scss';
import { AppState } from '../../reducers';

const SelectServiceForm: FC<SelectServiceFormProps> = ({
  services,
}): ReactElement => {
  return (
    <div>
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
    </div>
  );
};

interface SelectServiceFormStateProps {
  services: ServicesFormData[];
}

interface SelectServiceFormDispatchProps {}

export interface SelectServiceFormProps
  extends SelectServiceFormStateProps,
    SelectServiceFormDispatchProps {}

const mapStateToProps = (state: AppState): SelectServiceFormStateProps => ({
  services: state.form.services,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SelectServiceForm);
