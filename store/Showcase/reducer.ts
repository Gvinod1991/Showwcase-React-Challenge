import {
  SAVE_EDUCATIONAL_EXPERIENCES_FAILED,
  SAVE_EDUCATIONAL_EXPERIENCES_REQUEST,
  SAVE_EDUCATIONAL_EXPERIENCES_SUCCESS
} from './types';

interface IShowcaseState {
  educationalExperiencesList: any[],
  loading: boolean,
  message: string
}

const initialState = {
  educationalExperiencesList: [],
  loading: false,
  message: "Educational experience saving failed!"
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
    default:
      return {
        ...state
      }
  }
}