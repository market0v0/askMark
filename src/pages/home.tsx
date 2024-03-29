import React, { useEffect, useState } from 'react'
import { config } from '../../config'

import useLazyFetchData from '@/hooks/useLazyFetchData'
import checkToken from '@/utils/functions/checkToken'
import DefaultLayout from '@/components/layout/default'
import QForm from '@/components/questions/questionHolder'
import router from 'next/router'

const Login: React.FC = () => {
  const [setQuestion] = useState<any>()
  const [getQuestion] = useLazyFetchData(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `${config.BACKEND_ENDPOINT}/questions`
  )

  useEffect(() => {
    if (checkToken() == null) {
      void router.replace('/')
      return
    }
    const run = async (): Promise<void> => {
      const questions = await getQuestion()
      setQuestion(questions)
    }
    void run()
  }, [checkToken()])

  return (
    <DefaultLayout>
      <div className='font-poppins px-2 flex min-h-screen items-center justify-center bg-[#000B28] bg-gradient-to-br'>
          <QForm/>
      </div>
    </DefaultLayout>

  )
}

export default Login
