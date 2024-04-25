import { combineReducers } from 'redux'
import { SET_TOKEN } from './action'
import Cookies from 'js-cookie'

const initialState = {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  token: Cookies.get('token') ?? null
}

const tokenReducer = (state = initialState.token, action: { type: any, payload: any }): any => {
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
