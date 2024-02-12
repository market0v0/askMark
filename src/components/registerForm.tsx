import React, { useState } from 'react'
import { Progress } from 'antd'
import Image from 'next/image'
import * as handlers from '../handlers'
import * as utils from '../utils/utils'

const RegisterForm: React.FC = () => {
  const [question, setQuestion] = useState('')
  const [message1, setMessage1] = useState('')
  const [message2, setMessage2] = useState('')
  return (
    <div className='font-poppins flex min-h-full w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-[#9f9f9f0b] bg-[#9f9f9f10] px-10 py-2 text-white md:w-[30rem]'>
      <div className='relative h-20 w-[20rem]'>
        <Image src={'/logo.svg'} fill alt='marked' />
      </div>
      <span className='text-center text-sm'>
        Where Anonymity Sparks Boundless Curiosity!
      </span>
      <input
        type='text'
        placeholder={'GREETING'}
        className='w-full rounded-md px-2 py-2 text-sm text-black'
        value={question}
        onChange={(e) => {
          handlers.onQuestionChange(e, setQuestion, 30)
        }}
      />
      <Progress
        percent={utils.progress(question, 20)}
        showInfo={false}
        status={'exception'}
      />

      <input
        type='text'
        placeholder={'REPEATED MESSAGE '}
        className='w-full rounded-md px-2 py-2 text-sm text-black'
        value={message1}
        onChange={(e) => {
          handlers.onMessage1Change(e, setMessage1, 10)
        }}
      />
      <Progress
        percent={utils.progress(message1, 10)}
        showInfo={false}
        status={'exception'}
      />

      <input
        type='text'
        placeholder={'MESSAGE '}
        className='w-full rounded-md px-2 py-2 text-sm text-black'
        value={message2}
        onChange={(e) => {
          handlers.onMessage2Change(e, setMessage2, 50)
        }}
      />
      <Progress
        percent={utils.progress(message2, 30)}
        showInfo={false}
        status={'exception'}
      />

    </div>
  )
}

export default RegisterForm
