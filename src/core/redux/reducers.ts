import { combineReducers } from 'redux'
import { SET_TOKEN } from './action'

const initialState = {
  token: null // or initial token value
}

const tokenReducer = (
  state = initialState.token, // Return just the token value
  action: { type: any, payload: any }
): any => {
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

export default rootReducer
