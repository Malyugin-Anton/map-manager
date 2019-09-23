import { GET_DATA, ADD_DATA } from './types'
import firebase from '../config/firebase'

// actions
export const getCity = (data) => {
  return {
    type: GET_DATA,
    data
  }
};

export const addDataSuccess = (data) => {
  return {
    type: ADD_DATA,
    data
  }
};

 
export const getAllCities = () => {
  return (dispatch) => {
    const db = firebase.firestore().collection("cities");

    db
      .get()
      .then(query => {
        const data = query.docs.map(doc => doc.data());
        console.log('getAllCities - ', data)
        dispatch(getCity(data));
      })
  };
};

export const addData = (data, id) => {
  return (dispatch) => {
    const db = firebase.firestore().collection("cities");

    db
      .doc(id)
      .set(data)
      .then(() => {
        console.log('Added data Success')
        dispatch(addDataSuccess(data, id))
      })
  }
}