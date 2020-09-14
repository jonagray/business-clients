import {
  CONTACT_UPDATE,
  CONTACT_CREATE,
  CLEAR_CONTACT_FORM,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  notes: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTACT_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case CLEAR_CONTACT_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
