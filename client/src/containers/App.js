import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';
import theme from '../theme/theme';
import Countries from './Countries';
import Experiences from './Experiences';
import { Layout } from '../components';
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Router>
            <div>
              <nav>
                <Link to='/'>
                  <Typography variant='h5'>Countries</Typography>
                </Link>
                <Link to='/Experiences'>
                  <Typography variant='h5'>Experiences</Typography>
                </Link>
              </nav>
              <Switch>
                <Route path='/Experiences'>
                  <Experiences />;
                </Route>
                <Route path='/'>
                  <Countries />
                </Route>
              </Switch>
            </div>
          </Router>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
