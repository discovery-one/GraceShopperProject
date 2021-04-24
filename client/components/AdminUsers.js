import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/redux/users';
import { Link } from 'react-router-dom';

class AllProducts extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const users = this.props.users;
    return (
      <div>
        <h1>All Users</h1>
        <ul className="all-user-view">
          {users.map((user) => {
            return (
              <div key={user.id}>
                <div>
                  <span>
                    <h2>
                      {user.firstName} {user.lastName}
                    </h2>
                  </span>
                  <span>
                    <h2>{user.email}</h2>
                  </span>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  loadUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
