import {WHISPER} from './types';

export const createWhisper = (dispatch: any) => (/* payload */) =>
  new Promise((resolve) => {
    dispatch({
      type: WHISPER,
      payload: 'ok',
    });
    resolve(true);
  });

export const fetchWhispers = (dispatch: any) => (/* payload */) =>
  new Promise((resolve) => {
    dispatch({
      type: WHISPER,
      payload: 'ok',
    });
    resolve(true);
  });
