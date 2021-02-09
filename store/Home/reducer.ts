import { SAVE_USER_NAME } from './types';

interface IHomeState {
  userName: string
}

const initialState = {
  userName: "",
}

interface IHomeReducerAction {
  type: typeof SAVE_USER_NAME,
  payload?: any
}

export default function reducer(
  state: IHomeState = initialState,
  { type, payload }: IHomeReducerAction) {
  switch (type) {
    case SAVE_USER_NAME:
      return {
        ...state,
        userName: payload
      }
    default:
      return {
        ...state
      }
  }
}