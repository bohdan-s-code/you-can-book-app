import React, { FC, ReactElement } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import BookForm from './pages/book-form/book-form';
import SuccessBookingPage from './pages/success-booking-page/success-booking-page';

const Routes: FC = (): ReactElement => (
  <Switch>
    <Route exact path={'/'} component={HomePage} />
    <Route path={'/book-form'} component={BookForm} />
    <Route path={'/success-booking'} component={SuccessBookingPage} />
    <Redirect to={'/'} />
  </Switch>
);

export default Routes;
