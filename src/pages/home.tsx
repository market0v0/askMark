import React, { useEffect, useState } from 'react'
import { config } from '../../config'

import useLazyFetchData from '@/hooks/useLazyFetchData'
import checkToken from '@/utils/functions/checkToken'
import DefaultLayout from '@/components/layout/default'
import QForm from '@/components/questions/questionHolder'
import { message, Spin } from 'antd'
import useValidTokenRedirect from '@/hooks/useValidationRedirect'

const Home: React.FC = () => {
  const [question, setQuestion] = useState<any>()
  // const [isvalid, setIsvalid] = useState<boolean>(false)
  const [getQuestion] = useLazyFetchData(`${config.BACKEND_ENDPOINT}/questions`)

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

  return (
    <DefaultLayout>
      <Spin spinning={ useValidTokenRedirect('/')}>
        <div className='font-poppins flex items-center  justify-center px-2 py-10'>
          <QForm questions={question} />
        </div>
      </Spin>
    </DefaultLayout>
  )
}

export default Home
