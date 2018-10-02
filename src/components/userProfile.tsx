import * as React from 'react';

export default class UserProfile extends React.Component{
  constructor(props) {
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