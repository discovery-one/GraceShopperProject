import axios from 'axios';

const initialState = [];

const TOKEN = 'token';

//action types
const SET_USERS = 'SET_USERS';

//action creators
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

//thunk creators
export const fetchUsers = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);

    try {
      const { data } = await axios.get('/api/users', {
        headers: {
          authorization: token,
        },
      });
      dispatch(setUsers(data));
    } catch (err) {
      console.log("something's wrong w/ setUsers! --->", err);
    }
  };
};

//reducer
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
}
