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
        <div className="admin-table-container">
          <h2>All Users</h2>
        </div>
        <div className="admin-table-container">
          <div className="admin-table-title">
            <h3>First Name</h3>
          </div>
          <div className="admin-table-title">
            <h3>Last Name</h3>
          </div>
          <div className="admin-table-title">
            <h3>Email</h3>
          </div>
        </div>
        <div>
          <ul className="all-user-view">
            {users.map((user) => {
              return (
                <div key={user.id}>
                  <div className="admin-user-values">
                    <div className="admin-table-title">
                      <p>{user.firstName}</p>
                    </div>
                    <div className="admin-table-title">
                      <p>{user.lastName}</p>
                    </div>
                    <div className="admin-table-title">
                      <p>{user.email}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
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
