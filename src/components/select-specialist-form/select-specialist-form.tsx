import React, { FC, ReactElement } from 'react';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Specialists } from '../../core/types';
import { AppState } from '../../reducers';
import { selectSpecialist, setNextStep } from '../../actions';
import styles from './select-specialist-form.module.scss';

const SelectSpecialistForm: FC<SelectSpecialistFormProps> = ({
  specialists,
  selectSpecialist,
  setNextStep,
}): ReactElement => {
  const handleListItemClick = (id: string): void => {
    selectSpecialist(id);
    setNextStep();
  };

  return (
    <List>
      {specialists.map(
        ({ id, name, type, avatar, rating, selected }): ReactElement => (
          <div key={id}>
            <ListItem
              button
              selected={selected}
              onClick={(): void => {
                handleListItemClick(id);
              }}
            >
              <ListItemAvatar>
                {avatar ? (
                  <Avatar src={avatar} alt={name} />
                ) : (
                  <Avatar>{name[0].toUpperCase()}</Avatar>
                )}
              </ListItemAvatar>
              <ListItemText primary={name} secondary={type} />
              <div className={styles.ratingContainer}>
                <Rating readOnly value={rating.value} size="small" />
                <Typography variant="caption" className={styles.ratingLabel}>
                  {rating.numberOfReviews} відгуків
                </Typography>
              </div>
            </ListItem>
            <Divider />
          </div>
        )
      )}
    </List>
  );
};

export interface SelectSpecialistFormProps
  extends SelectSpecialistFormStateProps,
    SelectSpecialistFormDispatchProps {}

interface SelectSpecialistFormStateProps {
  specialists: Specialists[];
}

interface SelectSpecialistFormDispatchProps {
  selectSpecialist: (id: string) => void;
  setNextStep: () => void;
}

export const mapStateToProps = (
  state: AppState
): SelectSpecialistFormStateProps => ({
  specialists: state.form.specialists,
});

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ selectSpecialist, setNextStep }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectSpecialistForm);
