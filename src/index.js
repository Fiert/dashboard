import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import theme from './utils/theme';
import history from './utils/history';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route component={App}/>
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
