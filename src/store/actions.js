import {
  GET_CITYS,
  ADD_CITY,
  EDIT_CITY,
  DELETE_CITY,
  ADD_PLACE,
  DELETE_PLACE,
  EDIT_PLACE,
  VISIBLE_EDIT_FORM
} from "./types";
import firebase from "../config/firebase";

// actions
export const getCitiesSuccess = data => {
  return {
    type: GET_CITYS,
    data
  };
};

export const addCitySuccess = data => {
  return {
    type: ADD_CITY,
    data
  };
};

export const editedCitySuccess = (cityId, cityName, cityLatitude, cityLongitude) => {
  return {
    type: EDIT_CITY,
    cityId,
    cityName,
    cityLatitude,
    cityLongitude
  };
};

export const deletedCitySuccess = cityId => {
  return {
    type: DELETE_CITY,
    cityId
  };
};

export const addPlaceSuccess = (data, cityId) => {
  return {
    type: ADD_PLACE,
    data,
    cityId
  };
};

export const deletePlaceSuccess = (placeId, cityId) => {
  return {
    type: DELETE_PLACE,
    placeId,
    cityId
  };
};

export const editedPlaceSuccess = (placeData, cityId, placeId) => {
  return {
    type: EDIT_PLACE,
    placeData,
    cityId,
    placeId
  };
};

export const visibleEditForm = visible => {
  return {
    type: VISIBLE_EDIT_FORM,
    visible
  };
};

export const getCities = () => {
  return dispatch => {
    const db = firebase.firestore().collection("cities");

    db.get().then(query => {
      const data = query.docs.map(doc => {
        return {
          cityId: doc.id,
          data: doc.data()
        };
      });

      dispatch(getCitiesSuccess(data));
    });
  };
};

export const addCity = data => {
  return dispatch => {
    const db = firebase.firestore().collection("cities");

    db.doc(data.cityId)
      .set(data.data)
      .then(() => {
        console.log("Added city Success");
        dispatch(addCitySuccess(data));
      });
  };
};

export const editCity = (cityId, cityName, cityLatitude, cityLongitude) => {
  return dispatch => {
    const db = firebase.firestore().collection("cities");

    db.doc(cityId)
      .get()
      .then(doc => {
        let dbData = doc.data();

        dbData.cityName = cityName;
        dbData.cityCoordinate = {
          latitude: cityLatitude,
          longitude: cityLongitude
        }

        // Записываем то что взяли с базы + наши дополнения
        db.doc(cityId)
          .set(dbData)
          .then(() => {
            console.log("edited city Success");
            dispatch(editedCitySuccess(cityId, cityName, cityLatitude, cityLongitude));
          });
      });
  };
};

export const deleteCity = cityId => {
  return dispatch => {
    const db = firebase.firestore().collection("cities");

    db.doc(cityId)
      .delete()
      .then(() => {
        console.log("deleted city Success");
        dispatch(deletedCitySuccess(cityId));
      });
  };
};

export const addPlace = (data, cityId) => {
  return dispatch => {
    const db = firebase.firestore().collection("cities");

    let dbData = {};

    // Читаем с базы то что у нас есть
    db.doc(cityId)
      .get()
      .then(doc => {
        dbData = doc.data();

        const newData = {
          cityName: dbData.cityName,
          cityCoordinate: dbData.cityCoordinate,
          places: [...dbData.places, data]
        };

        // Записываем то что взяли с базы + наши дополнения
        db.doc(cityId)
          .set(newData)
          .then(() => {
            console.log("Added place Success");
            dispatch(addPlaceSuccess(data, cityId));
          });
      });
  };
};

export const deletePlace = (placeId, cityId) => {
  return dispatch => {
    const db = firebase.firestore().collection("cities");

    let dbData = {};

    // Читаем с базы то что у нас есть
    db.doc(cityId)
      .get()
      .then(doc => {
        dbData = doc.data();

        const filterPlace = dbData.places.filter(
          place => place.placeId !== placeId
        );
        dbData.places = filterPlace;

        // Записываем то что взяли с базы + наши дополнения
        db.doc(cityId)
          .set(dbData)
          .then(() => {
            console.log("Deleted place Success");
            dispatch(deletePlaceSuccess(placeId, cityId));
          });
      });
  };
};

export const editPlace = (placeData, cityId, placeId) => {
  return dispatch => {
    const db = firebase.firestore().collection("cities");

    let dbData = {};

    db.doc(cityId)
      .get()
      .then(doc => {
        dbData = doc.data();
        const editedPlace = dbData.places.map(place =>
          place.placeId === placeId ? placeData : place
        );

        dbData.places = editedPlace;

        // Записываем то что взяли с базы + наши дополнения
        db.doc(cityId)
          .set(dbData)
          .then(() => {
            console.log("edited place Success");
            dispatch(editedPlaceSuccess(placeData, cityId, placeId));
          });
      });
  };
};
