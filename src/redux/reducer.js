// @flow

import {combineReducers} from 'redux';
import reduceReducers from 'reduce-reducers';
import {createRPCReducer} from 'fusion-rpc-redux';

import {ActionIds} from './action-ids';

export const Status = Object.freeze({
  INIT: 'init',
  LOADING: 'loading',
  OK: 'ok',
  FAIL: 'fail',
});

export const reducer = combineReducers({
  home: reduceReducers(
    createRPCReducer(
      ActionIds.rpc__fetchHome,
      {
        start(state, action) {
          return {...state, status: Status.LOADING};
        },

        success(state, action) {
          return {...state, status: Status.OK};
        },

        failure(state, action) {
          return {...state, status: Status.FAIL};
        },
      },
      {status: Status.INIT}
    )
  ),
});

export default reducer;
