import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { message } from 'antd'
import useLazyFetchData from '@/hooks/useLazyFetchData'
import { config } from '../../config'
import checkToken from '@/utils/functions/checkToken'

const useValidTokenRedirect = (link: string): boolean => {
  const router = useRouter()
  const [validToken, loading] = useLazyFetchData(`${config.BACKEND_ENDPOINT}/getData`)

  useEffect(() => {
    const run = async (): Promise<void> => {
      try {
        const valid = await validToken()
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, eqeqeq
        if (valid?.valid) {
          void router.push('/home')
        } else {
          void router.push(link)
        }
      } catch (error: any) {
        void message.error('Session Expired')
      }
    }
    void run()
  }, [checkToken()])

  return loading.loading
}

export default useValidTokenRedirect
