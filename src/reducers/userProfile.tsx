import { Reducer } from 'redux'
import { UsersActionTypes } from '../types'

const reducer: Reducer<any> =  (state = null, action) => {
  switch (action.type) {
    // case 'SET_USER':
    case UsersActionTypes.SET_USER:
      return action.payload;
    default:
      return state;
  }
}
export { reducer as userProfileReducer }