import { combineReducers } from 'redux'
import * as TestReducers from './test'

export default combineReducers(Object.assign(
  TestReducers,
));
