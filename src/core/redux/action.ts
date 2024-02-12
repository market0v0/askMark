// actions.js
/* export const SET_USER = 'SET_USER' */
import * as localForage from 'localforage'
export const SET_TOKEN = 'SET_TOKEN'

/* export const setUser = (username: any): any => ({
  type: SET_USER,
  payload: username
}) */

export const setToken = (token: any): any => ({
  type: SET_TOKEN,
  payload: token
})

export const clearReduxState = (): void => {
  localForage.clear()
    .then(() => {
      console.log('All Redux state cleared successfully.')
    })
    .catch(error => {
      console.error('Error clearing Redux state:', error)
    })
}
