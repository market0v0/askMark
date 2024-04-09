import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import * as handlers from '../handlers'
import { Spin, message } from 'antd'
import { config } from '../../config'
import usePostData from '@/hooks/usePostData'
import router from 'next/router'
import { setToken } from '../core/redux/action'
import { useDispatch } from 'react-redux'
/* import DefaultLayout from './layout/default' */

const LoginForm: React.FC = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { data, handlePostRequest, loading } = usePostData(
    `${config.BACKEND_ENDPOINT}/login_user`
  )

  async function submitForm (): Promise<void> {
    const bodyObj = {
      username,
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
    /* authStore.loginUser(data) */
    void router.replace('/home')
  }, [data])

  return (
    <Spin spinning={loading}>
      <div className='font-poppins flex min-h-full w-full flex-col  items-center justify-center gap-4 rounded-[2rem] border-2 border-[#00000009] bg-[#231B8610] py-2 pb-4  text-white drop-shadow-lg md:w-[30rem]'>
        <div className='relative h-20 w-[80vw] md:w-[25rem]'>
          <Image src={'/log.svg'} fill alt='marked' />
        </div>
        {/*  <span className='text-center text-sm'>
      Whispers in the Dark: Find the Answers, No Question Marks
      </span> */}
        <div className='flex w-[80%] flex-col gap-2 px-4'>
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
        </div>

        <div className='flex flex-col gap-2 text-center font-bold'>
          <button
            className='rounded-xl bg-[#880AA8] px-20 py-2 hover:bg-slate-600'
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={submitForm}
          >
            LOG IN
          </button>
          <span onClick={() => (window.location.href = '/register')} className='text-black text-4 font-normal'>Create an   <span className='cursor-pointer text-[#880AA8]' >{' Account '}</span>instead</span>
          {/*     <button
          className='bg-[#000] rounded-xl px-20 py-2 hover:bg-slate-600'
        >
          REGISTER
        </button> */}
        </div>
      </div>
      </Spin>
  )
}

export default LoginForm
