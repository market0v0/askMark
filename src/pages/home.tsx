import React, { useEffect, useState } from 'react'
import { config } from '../../config'

import useLazyFetchData from '@/hooks/useLazyFetchData'
import checkToken from '@/utils/functions/checkToken'
import DefaultLayout from '@/components/layout/default'

const Login: React.FC = () => {
  const [question, setQuestion] = useState<any>()
  const [getQuestion, data] = useLazyFetchData(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `${config.BACKEND_ENDPOINT}/questions`
  )

  useEffect(() => {
    if (checkToken() == null) return
    const run = async (): Promise<void> => {
      const questions = await getQuestion()
      setQuestion(questions)
    }
    void run()
  }, [checkToken()])
  console.log(question)


  return (
    <DefaultLayout>
      <div className='font-poppins px-2 flex min-h-[100vh] items-center justify-center bg-[#000B28] bg-gradient-to-br'>
        
      </div>
    </DefaultLayout>

  )
}

export default Login
