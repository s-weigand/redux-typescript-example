import { connect } from 'react-redux';
import UserProfile from '../components/userProfile';
import { UserType } from '../types';

interface GlobalUserProfileState{
  userProfile: UserType
}

const mapStateToProps = (state: GlobalUserProfileState) => ({
  userProfile: state.userProfile,
})

const UserProfileContainer = connect(
  mapStateToProps,
)(UserProfile)

export default UserProfileContainer;