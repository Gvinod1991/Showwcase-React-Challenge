import { SAVE_USER_NAME } from './types';
import { Dispatch } from 'redux';

export const saveUserName = (userName: string) => (dispatch: Dispatch) => {
  console.log(userName);
  dispatch({ type: SAVE_USER_NAME, payload: userName });
}