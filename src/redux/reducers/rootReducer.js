import {SET_TOTAL_PAGES, SET_TOTAL_USERS, SET_USER_LIST} from '../actions/types';

const initialState = {
  userList: [],
  totalPages: 0,
  totalUsers: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LIST:
      return {
        ...state,
        userList: action.payload
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      };
    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.payload,
      }
    default:
      return state;
  }
};

export default rootReducer;