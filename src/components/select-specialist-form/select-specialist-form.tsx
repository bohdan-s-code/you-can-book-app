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
import { Specialists } from '../../core/types';
import styles from './select-specialist-form.module.scss';

const SelectSpecialistForm: FC<SelectSpecialistFormProps> = ({
  data,
}): ReactElement => {
  return (
    <List>
      {data.map(
        ({ name, type, avatar, rating }): ReactElement => (
          <div>
            <ListItem button>
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

export interface SelectSpecialistFormProps {
  data: Specialists[];
}

export default SelectSpecialistForm;
