// reducers.js
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

const tokenReducer = (state = '', action: { type: any, payload: any }): any => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  /*  username: usernameReducer, */
  token: tokenReducer
})

export default rootReducer
