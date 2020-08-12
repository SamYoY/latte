import React from 'react';
// import {Router, Route} from 'react-router';
import { Router, Route, Switch, Link} from 'react-router-dom';
import {
  Provider,
} from 'react-redux';
import { createBrowserHistory } from 'history';
import loadable from '@loadable/component';
import '../assets/scss/common.scss';

import store from '../redux/Store';

const initScale = () => {
  const baseSize = 28;
  const setSize = () => {
    const scale = document.documentElement.clientWidth / 750;
    document.documentElement.style.fontSize = `${baseSize * window.Math.min(scale, 2)}px`;
  }
  setSize();
  window.onresize = () => {
    window.setTimeout(() => {
      setSize();
    }, 10);
  };
}

const HomeView = () => {
  return (
    <div>
      {'HomeView'}
    </div>
  )
}

const history = createBrowserHistory();

const getRouter = () => {
  initScale();
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <div className="k-rz-platform-container">
            <Link to='/login'>link</Link>
            <Switch>
              <Route path="/login" component={loadable(() => import('../pages/login/index'))}/>
              <Route path="/register" component={loadable(() => import('../pages/login/register'))}/>
              <Route path="/" component={loadable(() => import('../pages/home/index'))}></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default getRouter;
