import {AppState, AppActionTypes, WHISPER, FETCH_WHISPER} from './types';

const initialState: AppState = {
  whispers: 'not implemented',
};

const app = (state = initialState, action: AppActionTypes) => {
  switch (action.type) {
    case WHISPER:
      return {
        ...state,
        whispers: [action.payload],
      };

    case FETCH_WHISPER:
      return {
        ...state,
        whispers: action.payload,
      };

    default:
      return state;
  }
};

export default app;
