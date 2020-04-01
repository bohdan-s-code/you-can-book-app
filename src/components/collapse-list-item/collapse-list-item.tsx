import React, { FC, ReactElement, useState } from 'react';
import {
  Typography,
  ListItem,
  ListItemText,
  Collapse,
  List,
  Divider,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { ServicesFormData } from '../../core/types';
import CheckboxItem, {
  CheckboxItemProps,
} from '../checkbox-item/checkbox-item';

const CollapseListItem: FC<CollapseListItemProps> = ({
  service,
}): ReactElement => {
  const { label, items } = service;
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderLabel = () => {
    return <Typography variant="h6">{label}</Typography>;
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={renderLabel()} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map(
            (item): ReactElement<CheckboxItemProps> => (
              <CheckboxItem key={item.id} item={item} parentId={service.id} />
            )
          )}
        </List>
      </Collapse>
    </>
  );
};

export interface CollapseListItemProps {
  service: ServicesFormData;
}

export default CollapseListItem;
