import React, { useEffect, useState } from 'react'
import { config } from '../../config'
import useStores from '@/core/UseStores'

import useLazyFetchData from '@/hooks/useLazyFetchData'
import LoginForm from '@/components/loginForm'
const Login: React.FC = () => {
  const [question, setQuestion] = useState<any>()
  const { authStore } = useStores()
  const user = authStore.userProfile
  console.log('mark test home', authStore.userProfile)
  const [getQuestion, data] = useLazyFetchData(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${config.BACKEND_ENDPOINT}questions?username=${user}`
  )

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  useEffect(() => {
    if (user == null) return
    const run = async (): Promise<void> => {
      const questions = await getQuestion()
      setQuestion(questions)
    }

    void run()
  }, [user])
  console.log(question)
  return (<div className='font-poppins px-2 flex min-h-[100vh] items-center justify-center bg-[#000B28]'>mark</div>

  )
}

export default Login
