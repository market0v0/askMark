import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { message } from 'antd'
import useLazyFetchData from '@/hooks/useLazyFetchData'
import { config } from '../../config'
import checkToken from '@/utils/functions/checkToken'

const useValidTokenRedirect = (link: string): boolean => {
  const router = useRouter()
  const [isvalid, setIsvalid] = useState<boolean>(false)
  const [validToken, loading] = useLazyFetchData(`${config.BACKEND_ENDPOINT}/getData`)

  useEffect(() => {
    if (checkToken() != null) {
      setIsvalid(loading.loading)
      const run = async (): Promise<void> => {
        try {
          const valid = await validToken()
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          if (!valid?.valid) {
            void router.push(link)
          }
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          if (valid?.valid) {
            void router.push('/home')
          }
        } catch (error: any) {
          void message.error('Session Expired')
        }
      }
      void run()
    }
  }, [checkToken()])

  return isvalid
}

export default useValidTokenRedirect
