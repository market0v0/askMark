import { useSelector } from 'react-redux'
import { keys } from '../enums'
type checkTokenReturnType = '' | string

function checkToken (): checkTokenReturnType {
  return JSON.parse(sessionStorage.getItem(keys.AUTH_TOKEN_KEY) ?? '').token.toString() ?? ''
}


export default checkToken
