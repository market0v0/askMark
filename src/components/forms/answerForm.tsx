import usePutData from '@/hooks/usePutData'
import React, { useEffect, useState } from 'react'
import { config } from '../../../config'
import { message } from 'antd'
import * as handlers from '../../handlers'
import Image from 'next/image'

interface QuestionProps {
  questionId: string
  question: string
  status: boolean
  getanswer: string
}

const AnswerForm: React.FC<QuestionProps> = ({
  question,
  questionId,
  status,
  getanswer
}) => {
  const [answer, setAnswer] = useState(getanswer)
  const [isSubmitted, setIsSubmitted] = useState(status)

  const { data, handlePutRequest } = usePutData(
    `${config.BACKEND_ENDPOINT}/answer`
  )

  async function submitForm (): Promise<void> {
    if (answer.trim() === '') {
      void message.error('Answer cannot be empty')
      return
    }
    setIsSubmitted(true)
    const bodyObj = {
      questionId,
      answer
    }

    try {
      await handlePutRequest(bodyObj)
      void message.success('Answer submitted successfully')
    } catch (err) {
      void message.error('An error occurred while submitting the answer')
    }
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
    }
  }, [data])

  return (
    <div className='font-poppins flex flex-col gap-4 '>
      <div className='rounded-2xl bg-[#8062B0] p-4'>
        <div className='relative col-span-1 h-[4rem] w-full  border-b-2 border-dashed border-black'>
          <Image src={'/log.svg'} fill alt='marked' />
        </div>
        {/* <div className='flex items-center pt-2 lg:w-[80%]'> */}
        <div className='grid w-full grid-cols-5 items-start py-2 pt-4'>
          {/* <div className='relative h-[3rem] w-[6vw] sm:w-[4rem]'> */}
          <div className='relative col-span-1 h-[3rem] w-full'>
            <Image src={'/q.svg'} fill alt='marked' />
          </div>
          <span className='col-span-4 px-4 py-2 text-[1.2rem] font-bold tracking-wider text-white'>
            {question}
          </span>
        </div>
        {isSubmitted ? (
          <div className='flex'>
            <div className='itemas-center flex h-[5rem] w-full justify-center rounded-lg border-[.1rem] border-dashed border-black bg-white'>
              <span className='p-4 text-[1.2rem] font-bold'>{answer}</span>
            </div>
          </div>
        ) : (
          <div className='flex flex-col'>
            <textarea
              placeholder={'Answers'}
              className='w-full rounded-md border-b-4 border-b-[#880AA8] px-2 py-2 text-sm text-black placeholder-[#880AA8] drop-shadow-lg'
              value={answer}
              onChange={(e) => {
                handlers.onAnswerChange(e, setAnswer, 30)
              }}
              disabled={isSubmitted}
            />
          </div>
        )}
      </div>
      {isSubmitted ? (
        <button
          className='rounded-xl bg-[#880AA8] px-20 py-2 text-white hover:bg-slate-600'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={submitForm}
          disabled={status}
        >
          Download Image
        </button>
      ) : (
        <button
          className='rounded-xl bg-[#880AA8] px-20 py-2 text-white hover:bg-slate-600'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={submitForm}
          disabled={status}
        >
          Send Answer
        </button>
      )}
    </div>
  )
}

export default AnswerForm
