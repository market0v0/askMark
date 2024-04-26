import { useEffect, useState } from 'react'
import { message } from 'antd'
import useLazyFetchData from '@/hooks/useLazyFetchData'
import { config } from '../../config'
import checkToken from '@/utils/functions/checkToken'

const useValidToken = (): boolean => {
  const [validToken] = useLazyFetchData(`${config.BACKEND_ENDPOINT}/getData`)
  const [isvalid, setIsvalid] = useState<boolean>(false)

  useEffect(() => {
    const run = async (): Promise<void> => {
      try {
        const valid = await validToken()
        setIsvalid(valid?.valid)
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, eqeqeq
      } catch (error: any) {
        void message.error('Session Expired')
      }
    }
    void run()
  }, [checkToken()])

  return isvalid
}

export default useValidToken
