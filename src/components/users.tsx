import * as React from 'react';
import Button from './button';
import UserItem from './userItem';
import {UserType} from '../types'


// interface UserProps{
//   data:{
//     results:string,
//     users:{
//       key: number,
//       user: string,
//     }

//   }
//   fetchUsers: any,
//   setUser:any
// }

export default class Users extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { data, fetchUsers, setUser } = this.props;
    return (
      <div className='container'>
        <Button
          onClick={fetchUsers}
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