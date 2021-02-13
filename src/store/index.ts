import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import appReducer from './app/reducer';

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;

export default store;
