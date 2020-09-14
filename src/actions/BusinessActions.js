import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
  CONTACT_UPDATE,
  CONTACT_FETCH_SUCCESS,
  CLEAR_CONTACT_FORM,
} from './types';

export const contactUpdate = ({prop, value}) => {
  return {
    type: CONTACT_UPDATE,
    payload: {prop, value},
  };
};

export const contactCreate = ({name, phone, email, notes}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/contacts`)
      .push({name, phone, email, notes})
      .then(() => {
        dispatch({type: CLEAR_CONTACT_FORM});
        Actions.pop();
      });
  };
};

export const contactFetch = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/contacts`)
      .on('value', (snapshot) => {
        dispatch({type: CONTACT_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const contactSave = ({name, phone, email, notes, uid}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/contacts/${uid}`)
      .set({name, phone, email, notes})
      .then(() => {
        dispatch({type: CLEAR_CONTACT_FORM});
        Actions.pop();
      });
  };
};

export const contactDelete = ({uid}) => {
  const {currentUser} = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/contacts/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  };
};

export const clearContactForm = () => {
  return (dispatch) =>
    dispatch({
      type: CLEAR_CONTACT_FORM,
    });
};
