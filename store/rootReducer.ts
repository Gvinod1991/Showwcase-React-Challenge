import { combineReducers } from 'redux';
import HomeReducer from './Home/reducer';
import ShowcaseReducer from './Showcase/reducer';

export default combineReducers({
  HomeReducer,
  ShowcaseReducer
})