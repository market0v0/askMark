import React, { useEffect, useState } from 'react'
import { message } from 'antd'
import Image from 'next/image'
import * as handlers from '../handlers'
import DefaultLayout from './layout/default'
import useStores from '@/core/UseStores'
import { setToken } from '@/core/redux/action'
import usePostData from '@/hooks/usePostData'
import router from 'next/router'
import { config } from '../../config'
import { useDispatch } from 'react-redux'

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkpassword, setCheckPassword] = useState('')

  const { authStore } = useStores()
  const { data, handlePostRequest } = usePostData(
    `${config.BACKEND_ENDPOINT}/create_user`
  )

  async function submitForm (): Promise<void> {
    if (password === checkpassword) {
      console.log('test')
      const bodyObj = {
        email,
        username,
        password
      }
      try {
        await handlePostRequest(bodyObj)
      } catch (err) {
      }
    } else {
      void message.error('Password doesnt match')
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
    <DefaultLayout>
    <div className='font-poppins flex min-h-full drop-shadow-lg pb-4  w-full flex-col items-center justify-center gap-4 rounded-[2rem] border-2 border-[#00000009] bg-[#231B8610]  py-2 text-white md:w-[30rem]'>
      <div className='relative h-20 w-[25rem]'>
        <Image src={'/log.svg'} fill alt='marked' />
      </div>

      <div className='flex flex-col gap-2 w-[80%] px-4'>
        <input
          type='email'
          placeholder={'Email'}
          className='drop-shadow-lg w-full placeholder-[#880AA8] border-b-4 border-b-[#880AA8] rounded-md px-2 py-2 text-sm text-black'
          value={email}
          onChange={(e) => {
            handlers.onQuestionChange(e, setEmail, 30)
          }}
        />
        <input
          type='text'
          placeholder={'Username'}
          className='drop-shadow-lg w-full placeholder-[#880AA8] border-b-4 border-b-[#880AA8] rounded-md px-2 py-2 text-sm text-black'
          value={username}
          onChange={(e) => {
            handlers.onQuestionChange(e, setUsername, 30)
          }}
        />
        <input
          type='password'
          placeholder={'Password'}
          className='w-full rounded-md px-2 py-2 border-b-4 placeholder-[#880AA8] border-b-[#880AA8] text-sm text-black'
          value={password}
          onChange={(e) => {
            handlers.onMessage1Change(e, setPassword, 10)
          }}
        />
          <input
          type='password'
          placeholder={'Re-enter Password'}
          className='w-full rounded-md px-2 py-2 border-b-4 placeholder-[#880AA8] border-b-[#880AA8] text-sm text-black'
          value={checkpassword}
          onChange={(e) => {
            handlers.onMessage1Change(e, setCheckPassword, 10)
          }}
        />
      </div>

      <div className='flex flex-col font-bold text-center'>
  {/*       <button
          className='bg-[#880AA8] rounded-xl px-20 py-2 hover:bg-slate-600'

        >
          LOG IN
        </button>
        <p className='text-secondary'>or</p> */}
        <button
          className='bg-[#000] rounded-xl px-20 py-2 hover:bg-slate-600'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={submitForm}
        >
          REGISTER
        </button>
        <span onClick={() => (window.location.href = '/login')} className='text-black text-4 font-normal'>Log in to your<span className='cursor-pointer text-[#880AA8]' >{' Account '}</span>instead</span>
      </div>
    </div>
    </DefaultLayout>
  )
}

export default RegisterForm
