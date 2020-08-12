import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Routes from './route/index';
import RoutesTest from './route/route-test';
import 'antd-mobile/dist/antd-mobile.css';

ReactDom.render(
  <Routes></Routes>,
  document.getElementById('app')
);