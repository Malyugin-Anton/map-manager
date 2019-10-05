import { combineReducers } from "redux";
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

const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CITYS:
      return action.data;
    case ADD_CITY:
      return [...state, action.data];
    case EDIT_CITY:
      return [
        ...state.map(el => {
          if (el.cityId === action.cityId) {
            el.data.cityName = action.cityName;
            el.data.cityCoordinate.latitude = action.cityLatitude;
            el.data.cityCoordinate.longitude = action.cityLongitude;
          }

          return el;
        })
      ];
    case DELETE_CITY:
      return [
        ...state.filter(el => {
          return el.cityId !== action.cityId;
        })
      ];
    case ADD_PLACE:
      return [
        ...state.map(el => {
          if (el.cityId === action.cityId) {
            el.data.places.push(action.data);
          }
          return el;
        })
      ];
    case DELETE_PLACE:
      return [
        ...state.map(el => {
          if (el.cityId === action.cityId) {
            const newPlaces = el.data.places.filter(place => {
              return place.placeId !== action.placeId;
            });

            el.data.places = newPlaces;
          }
          return el;
        })
      ];
    case EDIT_PLACE:
      return [
        ...state.map(el => {
          if (el.cityId === action.cityId) {
            const changedPlace = el.data.places.map(place =>
              place.placeId === action.placeId ? action.placeData : place
            );
            el.data.places = changedPlace;
          }

          return el;
        })
      ];
    default:
      return state;
  }
};

const editPlaceForm = (state = false, action) => {
  switch (action.type) {
    case VISIBLE_EDIT_FORM:
      return action.visible;
    default:
      return state;
  }
};

export default combineReducers({
  cities: citiesReducer,
  editPlaceForm: editPlaceForm
});
