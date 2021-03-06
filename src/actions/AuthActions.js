import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_CONFIRM,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNUP_USER,
  SIGNUP_USER_FAIL,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const passwordConfirm = (text) => {
  return {
    type: PASSWORD_CONFIRM,
    payload: text,
  };
};

// export const loginUser = ({email, password}) => {
//   return (dispatch) => {
//     dispatch({type: LOGIN_USER});

//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((user) => loginUserSuccess(dispatch, user))
//       .catch((error) => {
//         console.log(error);

//         firebase
//           .auth()
//           .createUserWithEmailAndPassword(email, password)
//           .then((user) => loginUserSuccess(dispatch, user))
//           .catch(() => loginUserFail(dispatch));
//       });
//   };
// };

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

export const signupUser = ({email, password, confirmedPassword}) => {
  return (dispatch) => {
    dispatch({type: SIGNUP_USER});

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch(() => signupUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL});
};

const signupUserFail = (dispatch) => {
  dispatch({type: SIGNUP_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  Actions.main();
};
