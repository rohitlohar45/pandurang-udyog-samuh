import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import clickActionReducer from "../reducers/clickActionReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  clickAction: clickActionReducer,
});

const preloadedState = {}; // Ensure preloaded state matches reducer structure

const store = createStore(rootReducer, preloadedState);

export default store;
