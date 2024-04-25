import React, { useEffect, useState } from 'react'
import { config } from '../../config'

import useLazyFetchData from '@/hooks/useLazyFetchData'
import checkToken from '@/utils/functions/checkToken'
import DefaultLayout from '@/components/layout/default'
import QForm from '@/components/questions/questionHolder'
import { message, Spin } from 'antd'
import router from 'next/router'

const Home: React.FC = () => {
  const [question, setQuestion] = useState<any>()
  // const [isvalid, setIsvalid] = useState<boolean>(false)
  const [getQuestion] = useLazyFetchData(`${config.BACKEND_ENDPOINT}/questions`)
  const [validToken, loading] = useLazyFetchData(`${config.BACKEND_ENDPOINT}/getData`)
  useEffect(() => {
    try {
      const run = async (): Promise<void> => {
        const questions = await getQuestion()
        setQuestion(questions.questions)
      }
      void run()
    } catch (error: any) {
      void message.error('Session Expired')
    }
  }, [checkToken()])
  useEffect(() => {
    try {
      const run = async (): Promise<void> => {
        const valid = await validToken()
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!valid?.valid) {
          void router.push('/')
        }

        // setIsvalid(valid?.valid)
      }
      void run()
    } catch (error: any) {
      void message.error('Session Expired')
    }
  }, [checkToken()])

  return (
    <DefaultLayout>
      <Spin spinning={loading.loading}>
        <div className='font-poppins flex items-center  justify-center px-2 py-10'>
          <QForm questions={question} />
        </div>
      </Spin>
    </DefaultLayout>
  )
}

export default Home
