import { connect, DispatchProp } from 'react-redux';
import Users from '../components/users';
import { fetchUsers, setUser } from '../actions/users';
import { UsersState, UserType } from '../types';


const mapStateToProps = (state) => ({
  data: state.usersReducer,
})

const mapDispatchToProps = (dispatch) => {
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