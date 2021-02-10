import {
  SAVE_EDUCATIONAL_EXPERIENCES_FAILED,
  SAVE_EDUCATIONAL_EXPERIENCES_REQUEST,
  SAVE_EDUCATIONAL_EXPERIENCES_SUCCESS,
  GET_UNIVERSITIES_FAILED,
  GET_UNIVERSITIES_REQUEST,
  GET_UNIVERSITIES_SUCCESS
} from './types';

interface IShowcaseState {
  educationalExperiencesList: any[],
  loading: boolean,
  message: string,
  universitiesList: any[]
}

const initialState = {
  educationalExperiencesList: [],
  loading: false,
  message: "Educational experience saving failed!",
  universitiesList: []
}


interface IShowcaseReducerAction {
  type: string,
  payload?: any
}

export default function reducer(
  state: IShowcaseState = initialState,
  { type, payload }: IShowcaseReducerAction) {
  switch (type) {
    case SAVE_EDUCATIONAL_EXPERIENCES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SAVE_EDUCATIONAL_EXPERIENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        educationalExperiencesList: [payload, ...state.educationalExperiencesList]
      }
    case SAVE_EDUCATIONAL_EXPERIENCES_FAILED:
      return {
        ...state,
        loading: false,
        message: state.message
      }
    case GET_UNIVERSITIES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_UNIVERSITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        universitiesList: payload
      }
    case GET_UNIVERSITIES_FAILED:
      return {
        ...state,
        loading: false,
        message: payload.message
      }
    default:
      return {
        ...state
      }
  }
}