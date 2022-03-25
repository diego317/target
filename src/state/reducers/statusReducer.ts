import { ActionReducerMapBuilder, AsyncThunk, createReducer } from '@reduxjs/toolkit';

import { FULFILLED, REJECTED, PENDING } from 'constants/actionStatus';

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

const DELIMITER = '/';

const getActionKey = (type: string) => {
  let types = type.split(DELIMITER);
  types.pop();
  return types.join(DELIMITER);
};

export default createReducer({}, (builder: ActionReducerMapBuilder<any>) => {
  builder
    .addMatcher(
      (action): action is RejectedAction => action.type.endsWith(`/${REJECTED}`),
      (state, { type, payload }) => {
        state[getActionKey(type)] = { status: REJECTED, error: payload || undefined };
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
    .addDefaultCase(() => {});
});