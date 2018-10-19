import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import Users from '../components/users';
import { fetchUsers, setUser } from '../actions/users';
import { UsersState, UserType } from '../types';

interface GlobalUsersState{
  users: UsersState
}


const mapStateToProps = (state: GlobalUsersState) => ({
  data: state.users,
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
    },
    setUser: (user: UserType) => {
      dispatch(setUser(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users)

// export default UsersContainer;