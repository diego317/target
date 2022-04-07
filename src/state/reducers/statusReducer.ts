import { ActionReducerMapBuilder, AsyncThunk, createReducer } from '@reduxjs/toolkit';

import { FULFILLED, REJECTED, PENDING, RESET } from 'constants/actionStatus';

export type GenericAsyncThunk = AsyncThunk<unknown, any, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

const DELIMITER = '/';

const getActionKey = (type: string) => {
  let types = type.split(DELIMITER);
  types.pop();
  return types.join(DELIMITER);
};

const initialState: Record<string, any> = {}

export default createReducer(initialState, (builder: ActionReducerMapBuilder<any>) => {
  builder
    .addMatcher(
      (action): action is RejectedAction => action.type.endsWith(`/${REJECTED}`),
      (state, { type, error }) => {
        state[getActionKey(type)] = { status: REJECTED, error: error || undefined };
      },
    )
    .addMatcher(
      (action): action is FulfilledAction => action.type.endsWith(`/${FULFILLED}`),
      (state, { type }) => {
        state[getActionKey(type)] = { status: FULFILLED };
      },
    )
    .addMatcher(
      (action): action is PendingAction => action.type.endsWith(`/${PENDING}`),
      (state, { type }) => {
        state[getActionKey(type)] = { status: PENDING };
      },
    )
    .addMatcher(
      ({ type }) => type.endsWith(`/${RESET}`),
      (state, { type }) => {

        delete state[getActionKey(type)];
        return state;
      }
    )
    .addDefaultCase(() => {});
});
