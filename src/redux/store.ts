import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './reducers/loginReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  routing: routerReducer,
  loginReducer,
});

const win = window;
// const storeEnhancers = compose(
//   (win && win.devToolsExtension) ? win.devToolsExtension() : (f:any) => f,
// );
const storeEnhancers = applyMiddleware(thunk);

const initiaState = {};  // store初始值的作用，怎么使用
const store = createStore(reducer, initiaState, storeEnhancers);

export default store;
