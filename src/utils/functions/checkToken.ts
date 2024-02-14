import { useSelector } from 'react-redux'

type checkTokenReturnType = null | string

function checkToken (): checkTokenReturnType {
  const token = useSelector((state: { token: any }) => state.token)
  return token
}

export default checkToken
