import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function RegisterUser(props: any) {

  return (
    <div>register</div>
  )
}

const mapStateToProps = (state: any) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterUser));

