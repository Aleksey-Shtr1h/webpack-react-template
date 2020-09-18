import {combineReducers} from 'redux';
import {NameSpace} from "./name-space.js";
import {appReducer} from './app/app-reducer.js';

export const rootReducer = combineReducers({
  [NameSpace.APP]: appReducer,
});

