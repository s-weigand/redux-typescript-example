import { Reducer, AnyAction } from 'redux'
import { UsersActionTypes, UsersState } from '../types'

const initalState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

interface Action{
  type: string,
  payload: {
    message:string,
    data:{
      results:string
    }
  }
}

// REDCUER
const reducer: Reducer<any> = (state:UsersState = initalState, action: AnyAction) => {
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