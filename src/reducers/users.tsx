// Promise
// pending
// fulfilled
// rejected
const initalState = {
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
export default function usersReducer(state:any = initalState, action: Action) {
  let users;
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return { ...state, loading: true };
    case 'FETCH_USER_FULFILLED':
      users = action.payload.data.results;
      return { ...state, loading: false, users };
    case 'FETCH_USER_REJECTED':
      return { ...state, loading: false, error: `${action.payload.message}` };
    default:
      return state;
  }
}
