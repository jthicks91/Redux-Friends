import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  USER_UNAUTHORIZED,
  DELETE_START,
  DELETE_SUCCESS
} from "../actions";

const initialState = {
  friends: [],
  loggingIn: false,
  deletingFriend: false,
  error: "",
  errorStatusCode: null,
  fetchingFriends: false,
  token: localStorage.getItem("token")
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingFriends: false,
        friends: action.payload
      };
    case DELETE_START:
      return {
        ...state,
        deletingFriend: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        error: "",
        errorStatusCode: null,
        friends: action.payload
      };
    case USER_UNAUTHORIZED:
      console.log(action);
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingFriends: false
      };
    default:
      return state;
  }
};

export default reducer;
