/* import { useSelector } from 'react-redux'
import { keys } from '../enums' */
type checkTokenReturnType = null | string

function checkToken (): checkTokenReturnType {
  const value = sessionStorage.getItem('persist:TOKEN')

  const parsedValue = JSON.parse(value ?? '{}')
  const token = parsedValue?.token?.replace(/"/g, '') ?? null
  return token
}

export default checkToken
