import DefaultLayout from '@/components/layout/default'
import LoginForm from '@/components/forms/loginForm'
import React from 'react'
import { Spin } from 'antd'

import useValidTokenRedirect from '@/hooks/useValidationRedirect'

const Login: React.FC = () => {
  return (
    <DefaultLayout>
      <Spin spinning={ useValidTokenRedirect('/login')}>
        <div className='font-poppins flex items-center  justify-center px-2 py-20'>
          <LoginForm />
        </div>
      </Spin>
    </DefaultLayout>
  )
}

export default Login
