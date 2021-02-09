import {
  SAVE_EDUCATIONAL_EXPERIENCES_FAILED,
  SAVE_EDUCATIONAL_EXPERIENCES_SUCCESS,
  SAVE_EDUCATIONAL_EXPERIENCES_REQUEST
} from './types';
import { Dispatch } from 'redux';

export const saveEducationalExperiences = (body: object) => (dispatch: Dispatch) => {
  dispatch({ type: SAVE_EDUCATIONAL_EXPERIENCES_REQUEST });
  dispatch({ type: SAVE_EDUCATIONAL_EXPERIENCES_SUCCESS, payload: body });
}