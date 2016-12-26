import createReducer from '../lib/createReducer'
import * as Types from '../actions/types'
import initialState from './initialState'

export const menu = createReducer(initialState, {
  [Types.SET_MENU](state, action) {
    return Object.assign({}, state, {isOpen: action.flag});
  },
});
