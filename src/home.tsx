import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Routes from './route/index';
// import 'antd-mobile/dist/antd-mobile.css';

ReactDom.render(
  <Routes></Routes>,
  document.getElementById('app')
);