import * as Types from './types'

export function test(flag) {
  return (dispatch, getState) => {
    return dispatch(setMenu(flag))
  }
}

export function setMenu(flag) {
  return {
    type: Types.SET_MENU,
    flag,
  }
}
