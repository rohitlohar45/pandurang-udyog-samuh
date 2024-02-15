import firebase from './initialise';
import { loginRequest, loginSuccess, loginFailure } from './authSlice';

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const registerUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
