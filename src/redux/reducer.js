import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as formReducer } from 'redux-form';
import auth from './modules/auth';
import info from './modules/info';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form: formReducer,
  auth,
  info,
});
