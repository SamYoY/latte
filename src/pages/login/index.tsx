import React, { Component, useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../assets/scss/login.scss';

import {
  LoginInAction
} from '../../redux/actions/loginAction';

import {
  List,
  InputItem,
  Button
} from 'antd-mobile';

function LoginWrapper(props: any) {
  const [loginName, setLoginName] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [verifiedCode, setVerifiedCode] = useState('');
  const onLoginIn = () => {
    props.loginIn({
      userName: loginName,
      password: loginPwd,
      userPhone,
      verifiedCode
    });
  };
  const onRegisterUser = () => {
    props.history.push('/register');
  }

  const onForgetPwd = () => {
    props.history.push('/forgetPwd')
  }
 
  const onLoginNameChange = useCallback((value: any) => {
    setLoginName(value);
  }, [loginName]);
  const onPasswordChange = useCallback((value: any) => {
    setLoginPwd(value);
  }, [loginPwd]);
  const onPhoneChange = useCallback((value: any) => {
    setUserPhone(value);
  }, [userPhone]);
  const onVeriCodeChange = useCallback((value: any) => {
    setVerifiedCode(value);
  }, [verifiedCode]);

  return (
    <div className="zr-platform">
      <List>
        <List.Item>
          <div className="login-title">登录</div>
        </List.Item>
        <InputItem
          value={loginName}
          onChange={onLoginNameChange}
        >
          用户名
        </InputItem>
        <InputItem
          className="login-input"
          type="password"
          value={loginPwd}
          onChange={onPasswordChange}
        >
          密码
        </InputItem>
        <InputItem
          className="login-input"
          type="phone"
          value={userPhone}
          onChange={onPhoneChange}
        >
          手机号码
        </InputItem>
        {/* <div className="login-verifiedcode">
          <InputItem
            className="login-input"
            value={verifiedCode}
            onChange={onVeriCodeChange}
          />
          <button className="verified-btn">验证码</button>
        </div> */}
        <div className="login-bottom">
          <Button
            type="primary"
            className="login-btn"
            onClick={onLoginIn}
          >
            登录
          </Button>
          <Button
            type="primary"
            className="login-btn"
            onClick={onRegisterUser}
          >
            注册
          </Button>
        </div>
        <div className="login-forget"
          onClick={onForgetPwd}
        >
          <span>忘记密码</span>
        </div>
      </List>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    userInfo: {
      userName: 'loginName',
      password: 'loginPwd',
      userPhone: '',
      verifiedCode: ''
    }
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loginIn(userInfo: any) {
      dispatch(LoginInAction(userInfo));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginWrapper));

