import {
  USER_LOGIN_IN,
  USER_REGISTER
} from '../ActionTypes';
import axios from '../../utils/axios';

export const LoginInAction = (data: any) => {
  console.log('login data: ', JSON.stringify(data));
  return async (dispatch: any) => {
    await axios.axiosRequest({
      url: '/k/login',
      method: 'post',
      data
    }).then((res) => {
      console.log('res', res);
      const action = () => {
        return {
          type: USER_LOGIN_IN,
          userInfo: data,
        }
      }
      dispatch(action);
    })
    console.log('after await login');
  }
}

export const RegisterUserAction = (data: any) => {
  return {
    type: USER_REGISTER,
    userInfo: data
  }
}


