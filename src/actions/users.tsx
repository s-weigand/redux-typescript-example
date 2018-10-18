import axios from 'axios'
import { action, createAsyncAction } from 'typesafe-actions'
import { UsersActionTypes, UserType } from '../types'


export function fetchUsers() {
  return {
    type: UsersActionTypes.FETCH_USER,
    payload: axios.get('https://randomuser.me/api/?results=10')
  };
}

// export const fetchUsers = () => action(UsersActionTypes.FETCH_USER, {payload: axios.get('https://randomuser.me/api/?results=10')})
// export const fetchUsers = () => createAsyncAction(
// 	UsersActionTypes.FETCH_USER_PENDING,
// 	UsersActionTypes.FETCH_USER_FULFILLED,
// 	UsersActionTypes.FETCH_USER_REJECTED
// 	)<any, any, any>
export const setUser = (user: UserType) => action(UsersActionTypes.SET_USER, user)