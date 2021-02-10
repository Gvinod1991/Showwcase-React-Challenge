import {
  SAVE_EDUCATIONAL_EXPERIENCES_FAILED,
  SAVE_EDUCATIONAL_EXPERIENCES_SUCCESS,
  SAVE_EDUCATIONAL_EXPERIENCES_REQUEST,
  GET_UNIVERSITIES_FAILED,
  GET_UNIVERSITIES_SUCCESS,
  GET_UNIVERSITIES_REQUEST
} from './types';
import { Dispatch } from 'redux';
import { config } from '../../config';
const { API_BASE_URL } = config;

export const saveEducationalExperiences = (body: object) => (dispatch: Dispatch) => {
  dispatch({ type: SAVE_EDUCATIONAL_EXPERIENCES_REQUEST });
  dispatch({ type: SAVE_EDUCATIONAL_EXPERIENCES_SUCCESS, payload: body });
}

export const getUniversities = (query) => async (dispatch: Dispatch) => {
  dispatch({ type: GET_UNIVERSITIES_REQUEST });
  try {
    const API_URL = `${API_BASE_URL}search?name=${query}`;
    const res = await fetch(API_URL);
    const data = await res.json();
    dispatch({ type: GET_UNIVERSITIES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_UNIVERSITIES_FAILED, payload: err });
  }
}