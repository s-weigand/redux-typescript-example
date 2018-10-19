import * as React from 'react';
import { Link } from 'react-router-dom';
import { UserType, ReactDefaultProps } from '../types'


interface UserItemProps{
	key: number,
	user: UserType,
	onClick: ReactDefaultProps["onClick"]
}

// /user:orangeleopard347
const UserItem = (props: UserItemProps) => (
  <Link
    className='box'
    onClick={props.onClick}
    to={`/user-${props.user.login.username}`}
  >
    <img src={props.user.picture.thumbnail} />
    <span>{props.user.login.username}</span>
  </Link>
)

// UserItem.propTypes = {
//   user: React.PropTypes.isRequired,
// };

export default UserItem