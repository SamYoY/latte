import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';

import loadable from '@loadable/component';
import '../assets/scss/common.scss';
import LoginRouter from '../route/login';

import store from '../redux/store';

const history = createBrowserHistory();

const initScale = () => {
  const baseSize = 28;
  const setSize = () => {
    const scale = 375 / 750;
    console.log(`scale:${scale};document.documentElement.clientWidth:${document.documentElement.clientWidth};document.body.clientWidth:${document.body.clientWidth}`);
    document.documentElement.style.fontSize = `${baseSize * window.Math.min(scale, 2)}px`;
  }
  setSize();
  window.onresize = () => {
    setSize();
  };
}

const HomeView = () => {
  return (
    <div>
      {'HomeView'}
    </div>
  )
}

export default () => {
  initScale();
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          {/* <div>rz platform</div> */}
          <div className="k-rz-platform-container">
            <Link to="/login">{'to login'}</Link>
            <Switch>
              <Route path="/home" component={HomeView}/>
              <LoginRouter></LoginRouter>
              <Route path="/">
                <div>{'default page'}</div>
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  )
};
