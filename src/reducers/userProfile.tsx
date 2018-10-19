import { Reducer, AnyAction } from 'redux'
import { UsersActionTypes, UserType, UserProfileAction } from '../types'

const reducer: Reducer<UserType|null, UserProfileAction> = (state: UserType|null = null, action:UserProfileAction):UserType|null => {
  switch (action.type) {
    case UsersActionTypes.SET_USER:
      return action.payload;
    default:
      return state;
  }
}
export { reducer as userProfileReducer }