// Initial state for authentication
const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

// Reducer function for authentication-related actions
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
      };
    // Handle other actions as needed
    default:
      return state;
  }
};

export default authReducer;
