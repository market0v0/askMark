/* import React, { useEffect, useState } from 'react'
import { config } from '../../config'

import useLazyFetchData from '@/hooks/useLazyFetchData'
import checkToken from '@/utils/functions/checkToken'
import DefaultLayout from '@/components/layout/default'
import QForm from '@/components/questions/questionHolder'
import { message } from 'antd'

const Home: React.FC = () => {
  const [question, setQuestion] = useState<any>()
  const [getQuestion] = useLazyFetchData(
    `${config.BACKEND_ENDPOINT}/questions`
  )

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
    console.log(question)
  }, [question])

  return (
    <DefaultLayout>
      <div className='font-poppins px-2 flex  items-center justify-center py-10'>

          <QForm questions={question}/>
      </div>
    </DefaultLayout>
  )
}

export default Home
 */
