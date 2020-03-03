import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'));

