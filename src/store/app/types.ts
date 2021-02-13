export interface AppState {
  whispers: string;
}

export const WHISPER = 'WHISPER';
export const FETCH_WHISPER = 'FETCH_WHISPER';

export interface WhisperAction {
  type: typeof WHISPER;
  payload: string;
}

export interface FetchWhisperAction {
  type: typeof FETCH_WHISPER;
  payload: string;
}

export type AppActionTypes = WhisperAction | FetchWhisperAction;
