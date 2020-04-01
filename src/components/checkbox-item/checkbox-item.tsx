import React, { FC, ReactElement, MouseEvent } from 'react';
import {
  Checkbox,
  FormControlLabel,
  ListItem,
  Typography,
} from '@material-ui/core';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import { updateServices } from '../../actions';
import styles from './checkbox-item.module.scss';
import { ServiceItem } from '../../core/types';

const CheckboxItem: FC<CheckboxItemProps> = ({
  item,
  parentId,
  updateServices,
}): ReactElement => {
  const { label, price, time, checked } = item;

  const handleClick = (event: MouseEvent): void => {
    event.preventDefault();
    updateServices(parentId, item.id);
  };

  const renderLabel = (): ReactElement => {
    return (
      <div className={styles.checkboxLabel}>
        <Typography variant="h5" className={styles.itemName}>
          {label}
        </Typography>
        <Typography variant="subtitle1" className={styles.itemSecondary}>
          {price} | {time}
        </Typography>
      </div>
    );
  };

  return (
    <ListItem button onClick={handleClick}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            name="checkedB"
            color="primary"
            style={{ marginLeft: 'auto' }}
          />
        }
        label={renderLabel()}
        labelPlacement="start"
        style={{ width: '100%' }}
      />
    </ListItem>
  );
};

interface CheckboxItemStateProps {}

interface CheckboxItemDispatchProps {
  updateServices: (parentId: string, serviceId: string) => void;
}

export interface CheckboxItemProps
  extends CheckboxItemStateProps,
    CheckboxItemDispatchProps {
  item: ServiceItem;
  parentId: string;
}

const mapStateToProps = (): CheckboxItemStateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): CheckboxItemDispatchProps =>
  bindActionCreators({ updateServices }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxItem);
