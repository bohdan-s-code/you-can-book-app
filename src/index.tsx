import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import theme from './theme';
import { store } from './store';
import App from './app';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'moment/locale/uk';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils} locale="ua">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
