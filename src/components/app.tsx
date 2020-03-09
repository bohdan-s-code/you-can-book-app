import React, { FC, ReactElement } from 'react';
import { Container } from '@material-ui/core';
import HomePage from '../pages/home-page';

const App: FC = (): ReactElement => {
  return (
    <Container maxWidth="md" style={{ minWidth: 360 }}>
      <HomePage />
    </Container>
  );
};

export default App;
