import * as React from 'react';

import {  UserType } from '../types';

export interface UserProfileProps{
  userProfile:UserType
}

export default class UserProfile extends React.Component<UserProfileProps>{
  constructor(props: UserProfileProps) {
    super(props);
  }
  render(){
    const { userProfile } = this.props;
    return (
    userProfile ?
    <div className='container'>
      <img src={`${userProfile.picture.large}`} />
      <span>{`${userProfile.name.title}, ${userProfile.name.first} ${userProfile.name.last}`}</span>
      <span>{userProfile.email}</span>
    </div>
    : <h1>Looks like you haven't selected a user</h1>
    )
  }
}