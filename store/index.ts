import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const middleWares = [thunkMiddleware];

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWares)
)