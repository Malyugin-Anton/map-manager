import { combineReducers } from 'redux'
import { GET_DATA, ADD_DATA, ADD_PLACE, DELETE_PLACE } from './types'

const cityReducer =  (state = [], action) => {
  console.log('cityReducer')
  console.log('state - ', state)
  console.log('action - ', action)

  switch(action.type) {
    case GET_DATA:
      return action.data
    case ADD_DATA:
      return [
        ...state,
        action.data
      ]
    case ADD_PLACE:
      return [
        ...state.map(el => {
          if(el.cityId === action.cityId) {
            el.data.places.push(action.data)
          }
          return el;
        })
      ]
    case DELETE_PLACE:
      return [
        ...state.map(el => {
          if (el.cityId === action.cityId) {
            const newPlaces = el.data.places.filter(place => {
              return place.idPlace !== action.idPlace
            })

            el.data.places = newPlaces;
          }
          return el;
        })
      ]
      default: 
        return state;
  }
}

export default combineReducers({
  data: cityReducer
});