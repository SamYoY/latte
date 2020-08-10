import {
  USER_LOGIN_IN,
  USER_REGISTER
} from '../ActionTypes';

export default (state: {}, actions: any) => {
  switch(actions.type) {
    case USER_LOGIN_IN:
      return {
        ...state,
        userInfo: Object.assign({}, actions.userInfo)
      }
    case USER_REGISTER:
      return {
        ...state,
        userInfo: Object.assign({}, actions.userInfo)
      }
    default:
      return {
        ...state
      }
  }
}

