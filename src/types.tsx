// following https://dev.to/resir014/redux-4--typescript-29-a-type-safe-approach-2lf4
import * as React from "react"


export interface ReactDefaultProps{
	children?: JSX.Element[]| Element[]|JSX.Element| Element
	onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined
	className?: string
	text?: string
}

export interface UserAction{
	type: string
	payload: {
		data: {
			results: UserType[]
		}
		message: string	
	}
}

export interface UserProfileAction{
	type: string
	payload:  UserType
}

export const enum UsersActionTypes{
	FETCH_USER = '@@users/FETCH_USER',
	FETCH_USER_PENDING = '@@users/FETCH_USER_PENDING',
	FETCH_USER_FULFILLED = '@@users/FETCH_USER_FULFILLED',
	FETCH_USER_REJECTED = '@@users/FETCH_USER_REJECTED',
	SET_USER = '@@users/SET_USER'

}


export interface UserType{
	cell: string,
	dob: {date: string, age: number},
	email: string,
	gender: "male"|"female",
	id: {name: string, 
		value: string},
	location: {street: string, 
		city: string, 
		state: string, 
		postcode: string, 
		coordinates: {latitude: string, 
			longitude: string}, 
		timezone: {offset: string, 
			description: string}
		},
	login: {uuid: string, 
		username: string, 
		password: string, 
		salt: string, 
		md5: string},
	name: {title: string, 
		first: string, 
		last: string},
	nat: string,
	phone: string,
	picture: {large: string, 
		medium: string, 
		thumbnail: string},
	registered: {date: string, 
		age: number}
}

export interface UsersState {
  readonly loading: boolean
  readonly users: UserType[]
  readonly error?: string|null
}
