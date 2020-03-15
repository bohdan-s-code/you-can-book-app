import React, { FC, ReactElement } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home-page';
import BookForm from './pages/book-form';
import NotFound from './pages/not-found';

const Routes: FC = (): ReactElement => (
  <Switch>
    <Route exact path={'/'} component={HomePage} />
    <Route path={'/book-form'} component={BookForm} />
    <Route path={'/not-found'} component={NotFound} />
    <Redirect to={'/not-found'} />
  </Switch>
);

export default Routes;
