import React, { useEffect, useState } from 'react'
import { config } from '../../config'

import useLazyFetchData from '@/hooks/useLazyFetchData'
import checkToken from '@/utils/functions/checkToken'
import DefaultLayout from '@/components/layout/default'
import QForm from '@/components/questions/questionHolder'
import router from 'next/router'

const Login: React.FC = () => {
  const [question, setQuestion] = useState<any>()
  const [getQuestion, data, error] = useLazyFetchData(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `${config.BACKEND_ENDPOINT}/questions`
  )

  useEffect(() => {
    if (checkToken() == null) {
      void router.replace('/')
      return
    }
    const run = async (): Promise<void> => {
      try {
        const questions = await getQuestion()
        setQuestion(questions)
      } catch (error) {
        console.error('Error fetching questions:', error)
        void router.replace('/') // Redirect to "/" in case of error
      }
    }
    void run()
  }, [checkToken()])

  return (
    <DefaultLayout>
      <div className='font-poppins px-2 flex min-h-screen items-center justify-center bg-[#000B28] bg-gradient-to-br'>
        {error ? (
          <p>An error occurred while fetching questions. Redirecting...</p>
        ) : (
          <QForm/>
        )}
      </div>
    </DefaultLayout>
  )
}

export default Login
