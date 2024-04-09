// reducers.js
/* import { combineReducers } from 'redux' */
import { combineReducers } from 'redux'
import { SET_TOKEN } from './action'

/* const usernameReducer = (state = '', action: { type: any, payload: any }): any => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    default:
      return state
  }
} */
const initialState = {
  token: null // or initial token value
}

const tokenReducer = (state = initialState, action: { type: any, payload: any }): any => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  token: tokenReducer
}) 
/* const rootReducer = tokenReducer */

export default rootReducer
