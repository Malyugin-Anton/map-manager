import { GET_DATA, ADD_DATA, ADD_PLACE, DELETE_PLACE } from './types'
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

export const addPlaceSuccess = (data, cityId) => {
  return {
    type: ADD_PLACE,
    data,
    cityId
  }
}

export const deletePlaceSuccess = (idPlace, cityId) => {
  return {
    type: DELETE_PLACE,
    idPlace,
    cityId
  }
}

export const getAllCities = () => {
  return (dispatch) => {
    const db = firebase.firestore().collection("cities");

    db
      .get()
      .then(query => {
        const data = query.docs.map(doc => {
          return {
            cityId: doc.id,
            data: doc.data()
          }
        });

        dispatch(getCity(data));
      })
  };
};

export const addData = (data) => {
  return (dispatch) => {
    const db = firebase.firestore().collection("cities");

    db
      .doc(data.cityId)
      .set(data.data)
      .then(() => {
        console.log('Added city Success')
        dispatch(addDataSuccess(data))
      })
  }
}

export const addPlace = (data, cityId) => {
  return (dispatch) => {
    const db = firebase.firestore().collection("cities");

    let dbData = {};

    // Читаем с базы то что у нас есть
    db
      .doc(cityId)
      .get()
      .then(doc => {
        dbData = doc.data()

        const newData = {
          cityName: dbData.cityName,
          places: [...dbData.places, data]
        }

        // Записываем то что взяли с базы + наши дополнения
        db
          .doc(cityId)
          .set(newData)
          .then(() => {
            console.log('Added place Success')
            dispatch(addPlaceSuccess(data, cityId))
          })
      })
  }
}

export const deletePlace = (idPlace, cityId) => {
  return (dispatch) => {
    const db = firebase.firestore().collection("cities");

    let dbData = {};

    // Читаем с базы то что у нас есть
    db
      .doc(cityId)
      .get()
      .then(doc => {
        dbData = doc.data()

        const filterPlace = dbData.places.filter(place => place.idPlace !== idPlace)
        dbData.places = filterPlace;

        // Записываем то что взяли с базы + наши дополнения
        db
          .doc(cityId)
          .set(dbData)
          .then(() => {
            console.log('Deleted place Success')
            dispatch(deletePlaceSuccess(idPlace, cityId))
          })
      })
  }
}