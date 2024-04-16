import React, { useEffect, useState } from 'react'
import { message, Spin } from 'antd'
import Image from 'next/image'
import * as handlers from '../../handlers'
import { setToken } from '@/core/redux/action'
import usePostData from '@/hooks/usePostData'
import router from 'next/router'
import { config } from '../../../config'
import { useDispatch } from 'react-redux'

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkpassword, setCheckPassword] = useState('')

  const { data, handlePostRequest, loading } = usePostData(
    `${config.BACKEND_ENDPOINT}/create_user`
  )

  async function submitForm (): Promise<void> {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!emailRegex.test(email)) {
      void message.error('Please enter a valid email address')
      return
    }

    const bodyObj = {
      username,
      email,
      password
    }
    try {
      await handlePostRequest(bodyObj)
    } catch (err) {}
  }

  useEffect(() => {
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
    void router.replace('/home')
  }, [data])
  return (
    <Spin spinning={loading}>
      <div className='font-poppins flex min-h-full w-full flex-col  items-center justify-center gap-4 rounded-[2rem] border-2 border-[#00000009] bg-[#231B8610] py-2 pb-4  text-white drop-shadow-lg md:w-[30rem]'>
        <div className='relative h-20  w-[80vw] md:w-[25rem]'>
          <Image src={'/log.svg'} fill alt='marked' />
        </div>

        <div className='flex w-[90%] flex-col gap-2 '>
          <input
            type='email'
            placeholder={'Email'}
            className='w-full rounded-md border-b-4 border-b-[#880AA8] px-2 py-2 text-sm text-black placeholder-[#880AA8] drop-shadow-lg'
            value={email}
            onChange={(e) => {
              handlers.onQuestionChange(e, setEmail, 30)
            }}
          />
          <input
            type='text'
            placeholder={'Username'}
            className='w-full rounded-md border-b-4 border-b-[#880AA8] px-2 py-2 text-sm text-black placeholder-[#880AA8] drop-shadow-lg'
            value={username}
            onChange={(e) => {
              handlers.onQuestionChange(e, setUsername, 30)
            }}
          />
          <input
            type='password'
            placeholder={'Password'}
            className='w-full rounded-md border-b-4 border-b-[#880AA8] px-2 py-2 text-sm text-black placeholder-[#880AA8]'
            value={password}
            onChange={(e) => {
              handlers.onMessage1Change(e, setPassword, 10)
            }}
          />
          <input
            type='password'
            placeholder={'Re-enter Password'}
            className='w-full rounded-md border-b-4 border-b-[#880AA8] px-2 py-2 text-sm text-black placeholder-[#880AA8]'
            value={checkpassword}
            onChange={(e) => {
              handlers.onMessage1Change(e, setCheckPassword, 10)
            }}
          />
        </div>

        <div className='flex flex-col text-center font-bold'>
          {/*       <button
          className='bg-[#880AA8] rounded-xl px-20 py-2 hover:bg-slate-600'

        >
          LOG IN
        </button>
        <p className='text-secondary'>or</p> */}
          <button
            className='rounded-xl bg-[#000] px-20 py-2 hover:bg-slate-600'
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={submitForm}
          >
            REGISTER
          </button>
          <span
            onClick={() => (window.location.href = '/login')}
            className='text-4 font-normal text-black'
          >
            Log in to your
            <span className='cursor-pointer text-[#880AA8]'>{' Account '}</span>
            instead
          </span>
        </div>
      </div>
    </Spin>
  )
}

export default RegisterForm
