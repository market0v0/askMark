import React, { useEffect, useState } from 'react'
import useLazyFetchData from '@/hooks/useLazyFetchData'
import checkToken from '@/utils/functions/checkToken'
import { message, Spin } from 'antd'
import { config } from '../../../config'
import { truncateString } from '@/handlers'
import useValidToken from '@/hooks/useValidate'
import { useDispatch } from 'react-redux'
import { clearToken } from '@/core/redux/action'
import { useRouter } from 'next/router'

const DefaultNav: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const handleNav = (path: string): void => {
    void router.push(`/${path}`)
  }
  const handleLogout = (): void => {
    dispatch(clearToken())
    void router.push('/')
  }
  const [validToken, loading] = useLazyFetchData(`${config.BACKEND_ENDPOINT}/getData`)
  const [username, setUsername] = useState<string>('')
  useEffect(() => {
    const run = async (): Promise<void> => {
      try {
        const data = await validToken()
        setUsername(data?.data?.username)
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, eqeqeq
      } catch (error: any) {
        void message.error('Session Expired')
      }
    }
    void run()
  }, [checkToken()])
  return (
    <Spin spinning={loading.loading}>
    <div>
      <div className='rounded-lg bg-[#8878be] p-2  text-white'>
        {useValidToken() ? (
          <div className='flex min-w-full flex-col gap-2 md:min-w-[20%] '>
            <span className='rounded-2xl bg-[#AF05D9] p-2 text-center text-[1rem] font-bold px-10 '>
              {truncateString(username, 10)}
            </span>
            <button
              className=' w-full rounded-2xl bg-black p-2 text-[.8rem] hover:bg-gray-700 px-10 '
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className=' w-full rounded-2xl bg-black p-2 text-[.8rem] hover:bg-gray-700 px-10 '
            >
              Log out
            </button>
          </div>
        ) : (
          <div className='flex min-w-full flex-col gap-2 md:min-w-[20%] '>

            <button
              onClick={() => { handleNav('/') }}
              className=' w-full rounded-2xl bg-black p-2 text-[.8rem] hover:bg-gray-700 px-10 '
            >
              Home
            </button>
            <button
              onClick={() => { handleNav('register') }}
              className=' w-full rounded-2xl bg-black p-2 text-[.8rem] hover:bg-gray-700 px-10 '
            >
              Register
            </button>
            <button
              onClick={() => { handleNav('login') }}
              className=' w-full rounded-2xl bg-black p-2 text-[.8rem] hover:bg-gray-700 px-10 '
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
    </Spin>
  )
}

export default DefaultNav
