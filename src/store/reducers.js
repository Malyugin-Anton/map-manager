import { combineReducers } from 'redux'
import { GET_DATA, ADD_DATA } from './types'

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
      default: 
        return state;
  }
}

export default combineReducers({
  data: cityReducer
});