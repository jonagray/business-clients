import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  PASSWORD_CONFIRM,
  SIGNUP_USER,
  SIGNUP_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmedPassword: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case PASSWORD_CONFIRM:
      return {...state, confirmedPassword: action.payload};
    case LOGIN_USER:
      return {...state, loading: true, error: ''};
    case SIGNUP_USER:
      return {...state, loading: true, error: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload};
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed.',
        password: '',
        confirmedPassword: '',
        loading: false,
      };
    case SIGNUP_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed.',
        password: '',
        confirmedPassword: '',
        loading: false,
      };
    default:
      return state;
  }
};
