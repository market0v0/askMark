
import Cookies from 'js-cookie'

export const SET_TOKEN = 'SET_TOKEN'

export const setToken = (token: any): any => {
  Cookies.set('token', token)
  return {
    type: SET_TOKEN,
    payload: token
  }
}

export const clearToken = (): any => {
  Cookies.remove('token')
  return {
    type: SET_TOKEN,
    payload: null
  }
}
