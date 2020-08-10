import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';

export default () => {
  return (
    <>
      <Route path="/login" component={loadable(() => import('../pages/login/index'))}></Route>
    </>
  )
}
