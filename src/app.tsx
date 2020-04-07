import React, { FC, ReactElement } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App: FC = (): ReactElement => {
  return (
    <Container maxWidth="md" style={{ minWidth: 360, height: '100%' }}>
      <Router>
        <Routes />
      </Router>
    </Container>
  );
};

export default App;
