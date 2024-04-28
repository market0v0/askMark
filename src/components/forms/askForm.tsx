import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import * as handlers from '../../handlers'
import { Spin, message } from 'antd'
import { config } from '../../../config'
import usePostData from '@/hooks/usePostData'
import { useRouter } from 'next/router'

/* import DefaultLayout from './layout/default' */

const AskForm: React.FC = () => {
  const router = useRouter()
  const url = router.query.user ?? 'default_value' // replace 'default_value' with the value you want to use when there's no ID
  const [question, setQuestion] = useState('')
  const { data, handlePostRequest, loading } = usePostData(
      `${config.BACKEND_ENDPOINT}/ask`
  )

  async function submitForm (): Promise<void> {
    if (question.trim() === '') {
      void message.error('Question cannot be empty')
      return
    }
    const bodyObj = {
      question,
      url
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
    void message.success('Question Sent')
    setQuestion('')
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

          <textarea
            placeholder={'Ask a Question'}
            className='w-full rounded-md border-b-4 h-[8rem] border-b-[#880AA8] px-2 py-2 text-sm text-black placeholder-[#880AA8] drop-shadow-lg'
            value={question}
            onChange={(e) => {
              handlers.onAskChange(e, setQuestion, 120)
            }}
          />
        </div>

        <div className='flex flex-col gap-2 text-center font-bold'>
          <button
            className='rounded-xl bg-[#880AA8] px-20 py-2 hover:bg-slate-600'
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={submitForm}
          >
            Send Question
          </button>
        </div>
      </div>
    </Spin>
  )
}

export default AskForm
