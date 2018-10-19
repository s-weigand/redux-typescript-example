import { Reducer, AnyAction } from 'redux'
import { UsersActionTypes, UsersState, UserAction } from '../types'

const initalState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// REDCUER
const reducer: Reducer<UsersState, UserAction> = (state: UsersState=initalState, action: UserAction):UsersState => {
  let users;
  switch (action.type) {
    case UsersActionTypes.FETCH_USER_PENDING:
      return { ...state, loading: true };
    case UsersActionTypes.FETCH_USER_FULFILLED:
      users = action.payload.data.results;
      return { ...state, loading: false, users};
    case UsersActionTypes.FETCH_USER_REJECTED:
      return { ...state, loading: false, error: `${action.payload.message}` };
    default:
      return state;
  }
}

export { reducer as usersReducer }