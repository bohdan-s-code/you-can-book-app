import React, { FC, ReactElement } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import BookForm from './pages/book-form/book-form';

const Routes: FC = (): ReactElement => (
  <Switch>
    <Route exact path={'/'} component={HomePage} />
    <Route path={'/book-form'} component={BookForm} />
    <Redirect to={'/'} />
  </Switch>
);

export default Routes;
