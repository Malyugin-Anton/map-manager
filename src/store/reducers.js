import { combineReducers } from 'redux'
import { GET_DATA, ADD_DATA, ADD_PLACE } from './types'

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
      // return [
      //   ...state, { state.map(el => {
      //     el.cityId === 
      //   }) }
      // ]
      return [
        ...state.map(el => {
          if(el.cityId === action.cityId) {
            el.data.places.push(action.data)
          }

          return el;
        })
      ]
      default: 
        return state;
  }
}

// state = [
//   {
//     cityId: '1',
//     data: {
//       cityName: 'name',
//       // places: [] - меняется только это
//     }
//   }
// ]

export default combineReducers({
  data: cityReducer
});