import * as React from 'react';
import Button from './button';
import UserItem from './userItem';
import { UserType, UsersState, ReactDefaultProps } from '../types'


export interface UserProps{
  data:{
    users: UserType[]
  }
  fetchUsers: Function,
  setUser: Function
}

export default class Users extends React.Component<UserProps> {
  constructor(props: UserProps) {
    super(props);
  }

  render() {
    const { data, fetchUsers, setUser } = this.props;
    return (
      <div className='container'>
        <Button
          onClick={() => fetchUsers()}
          text={'Fetch Users'}
          className={'btn btn-blue'}
        />
        <div id={'users'}>
          {data.users.map((user: UserType, i: number) => {
            return <UserItem
              key={i}
              user={user}
              onClick={() => setUser(user)}
            />
          })}
        </div>
      </div>
    )
  }
}

// export default Users;