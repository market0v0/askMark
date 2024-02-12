import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import * as handlers from '../handlers'
import { Button, message } from 'antd'
import { config } from '../../config'
import usePostData from '@/hooks/usePostData'
import router from 'next/router'
import useStores from '@/core/UseStores'
import { setToken } from '../core/redux/action'
import { useDispatch, useSelector } from 'react-redux'

const LoginForm: React.FC = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: { token: any }) => state.token)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { authStore } = useStores()
  const { data, handlePostRequest } = usePostData(
    `${config.BACKEND_ENDPOINT}/login_user`
  )

  async function submitForm (): Promise<void> {
    const bodyObj = {
      username,
      password
    }

    try {
      await handlePostRequest(bodyObj)
    } catch (err) {
    }
  }

  useEffect(() => {
    console.log('Data received:', data)

    if (data === null || data === undefined) {
      return
    }
    if (data?.error === 'Missing required data') {
      void message.error('Missing required data')
      return
    }
    if (data?.error === 'User not found') {
      void message.error(data.error)
      return
    }

    dispatch(setToken(data.token))
    /* authStore.loginUser(data) */
    console.log('yawa', authStore.userProfile)
    void router.replace('/home')
  }, [data])

  return (
    <div className='font-poppins flex min-h-full w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-[#9f9f9f0b] bg-[#9f9f9f10]  py-2 text-white md:w-[30rem]'>
      <div className='relative h-20 w-[20rem]'>
        <Image src={'/logo.svg'} fill alt='marked' />
      </div>
      <span className='text-center text-sm'>
        {token}
      </span>
      <div className='flex flex-col gap-2 w-full px-10'>
        <input
          type='text'
          placeholder={'Username'}
          className='w-full rounded-md px-2 py-2 text-sm text-black'
          value={username}
          onChange={(e) => {
            handlers.onQuestionChange(e, setUsername, 30)
          }}
        />
        <input
          type='password'
          placeholder={'Password'}
          className='w-full rounded-md px-2 py-2 text-sm text-black'
          value={password}
          onChange={(e) => {
            handlers.onMessage1Change(e, setPassword, 10)
          }}
        />
      </div>

      <div className='flex flex-col gap-2 text-center'>
        <Button
          className='bg-[#F9C407] px-20 hover:bg-slate-600'
          type='primary'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={submitForm}
        >
          LOG IN
        </Button>
        <p className='text-secondary'>or</p>
        <Button
          className='bg-[#534f3e] px-20 hover:bg-slate-600'
          type='primary'
        >
          REGISTER
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
