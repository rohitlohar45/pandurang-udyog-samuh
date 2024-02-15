// Initial state for click actions
const initialState = {
  clicks: 0,
};

// Reducer function for click-related actions
const clickActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_CLICK":
      return {
        ...state,
        clicks: state.clicks + 1,
      };
    // Handle other actions as needed
    default:
      return state;
  }
};

export default clickActionReducer;
