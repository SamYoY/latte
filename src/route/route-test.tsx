import React, { useEffect } from 'react';
import { Router, Link, Route, Switch, useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  Provider,
} from 'react-redux';
import store from '../redux/Store';

const PageB = () => {
  const history = useHistory();
  useEffect(() => {
    return () => {
      history.push('/home/pagea');
      console.log('回退');
    };
  }, []);

  return <h1>PageB</h1>;
};
const history = createBrowserHistory();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Link to='/home/pagea/pageb'>page-b</Link>
          <Switch>
            <Route path='/home' exact>
              <h3>home</h3>
            </Route>
            <Route path='/home/pagea/pageb'>
              <PageB />
            </Route>
            <Route path='/home/pagea'>
              <h3>page-a</h3>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;